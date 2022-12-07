import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "black"}}><Logo>THE COFFE STORE</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/9' style={{textDecoration: "none", color: "black"}}><MenuItem>CAFE</MenuItem></Link>
                    <Link to='/category/1' style={{textDecoration: "none", color: "black"}}><MenuItem>CAPSULAS</MenuItem></Link>
                    <Link to='/category/5' style={{textDecoration: "none", color: "black"}}><MenuItem>ACCESORIOS</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>REGISTRATE</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem><CartWidget /></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;