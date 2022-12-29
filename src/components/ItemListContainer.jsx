import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db } from '../utils/firebaseConfig';
import { collection, getDocs, query, where, orderBy} from "firebase/firestore";


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    //componentDidUpdate
    useEffect( () => {
      const fetchFromFirestore = async() => {
            let q;
            if (idCategory) {

                q = query(collection(db, "products"), where('categoryId', '==', parseInt(idCategory)))
            } else {
                q = query ( collection(db, "products"), orderBy('cost'));
            }

            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(item => ({
                id: item.id,
                ...item.data()
            }))
            return dataFromFirestore;

       }  
       fetchFromFirestore()
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategory]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
            <ItemList items={datos} />
    );
}

export default ItemListContainer;