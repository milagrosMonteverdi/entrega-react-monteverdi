import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styledComponents';
import { serverTimestamp, updateDoc } from 'firebase/firestore';
import { doc, setDoc, collection, increment } from 'firebase/firestore';
import {db} from '../utils/firebaseConfig';
import FormatNumber from "../utils/FormatNumber";
import styled from "styled-components";
import swal from 'sweetalert';

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.span`
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {
      const order = {
        buyer: {
          name: 'Mily Monteverdi',
          email: 'mily@mail.com',
          phone: '222333666'
        },
        date: serverTimestamp(),
        item: test.cartList.map( item => ({
          id:item.idItem,
          title:item.nameItem,
          price:item.costItem,
          qty:item.qtyItem

        })),
        total: test.calcTotal()
    
      }

      const createOrderInFirestore = async () =>{
        const newOrderRef = doc(collection(db, "orders"))
        await setDoc(newOrderRef, order);
        return newOrderRef;
      }

      createOrderInFirestore ()
       .then(result => {
          swal(" Tu orden ha sido creada, Numero de ref:  " + result.id )
          
          //actualizar stock
          test.cartList.forEach(async(item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {             
              stock: increment(-item.qtyItem)
            });
          })
          //vaciar carro
          test.clear() 

       })
       .catch (err => console.log(err))
    }

    return (
        <WrapperCart>
            <TitleCart>TU CARRO</TitleCart>
            <Top>
                <Link to='/'><TopButton>CONTINUA COMPRANDO</TopButton></Link>
                {
                    (test.cartList.length > 0)
                    ? <TopButton type="filled" onClick={test.clear}>ELIMINAR TODOS LOS PRODUCTOS</TopButton>
                    : <TopText>Tu carro esta vacio</TopText>
                }
            </Top>
            <ContentCart>
            <Bottom>
                <Info>
                    {
                        test.cartList.length > 0 &&
                            test.cartList.map(item => 
                            <Product key={item.idItem}>
                            <ProductDetail>
                                <ImageCart src={item.imgItem} />
                                <Details>
                                <span>
                                    <b>Product:</b> {item.nameItem}
                                </span>
                                <TopButton type="filled" onClick={() => test.deleteItem(item.idItem)}>Eliminar</TopButton>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                <ProductAmount>{item.qtyItem} unidades</ProductAmount>
                                /
                                <ProductAmount>$ {item.costItem} c/u</ProductAmount>
                                </ProductAmountContainer>
                                <ProductPrice>$ {test.calcTotalPerItem(item.idItem)} </ProductPrice>
                            </PriceDetail>
                            </Product>
                            )
                    }
                </Info>
                {
                    test.cartList.length > 0 &&
                        <Summary>
                            <SummaryTitle>PEDIDO</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>ENVIO </SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>ENVIO Bonificado</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={-test.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <Button onClick={createOrder}>CHECKOUT</Button>
                        </Summary>
                }
            </Bottom>
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;