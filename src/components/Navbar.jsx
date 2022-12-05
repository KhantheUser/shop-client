import React, { useState } from 'react'
import styled from 'styled-components';
import {Search ,ShoppingCartOutlined} from '@material-ui/icons'
import { Mobile } from '../responsive';
import { Badge } from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'
const Container = styled.div`
    
    height: 60px;
    ${Mobile({heihgt:'50px'})}
    
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
${Mobile({padding:'10px 0px'})}

`
const Language = styled.div`
font-size: 14px;
cursor: pointer;
${Mobile({display : 'none'})}

`
const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
`
const Input = styled.input`
    outline: none;
    padding:6px;
border: none;
${Mobile({width:'50px'})}

`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Center = styled.div`
flex: 1;
`
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
${Mobile({fontSize:'24px'})}

`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${Mobile({justifyContent:'center',flex:2})}


`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    position: relative;
${Mobile({fontSize:'12px',marginLeft:'10px'})}
`
const Dropdown  = styled.div`
position: absolute;
top: 25px;
right: 0;
width: 150px;
/* height: 150px; */
background-color: #dcd3d3;
z-index: 2;
@keyframes appear {
    0%{
        display: none;
    }
    50%{
        display: block;
        opacity: 0.5;

    }
    100%{
        display: block;
        opacity: 1;


    }
};
animation : appear 0.4s linear;
display: ${props=>props.showDropdown?'block':'none'};
    

`

const DropItem = styled.div`
text-align: center;
padding: 10px;
border-bottom: 2px solid #ccc;
`
function Navbar() {
    const {currentUser} = useSelector(state=>state.userReducer)
    const {quantity} = useSelector((state)=>state.cartReducer)
    const [showDropdown,setDropdown]  = useState(false)
    const handleShowDropdown =()=>{
        setDropdown(!showDropdown)
    }
    const handleLogout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    const navigate = useNavigate()
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search style={{color:'gray',fontSize:'16px'}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Khan</Logo>
            </Center>
            <Right>
               {currentUser ?
               
               <MenuItem onClick={()=>handleShowDropdown()}>
               Hello <b>{currentUser.username}</b>
               <Dropdown showDropdown={showDropdown}>
                 <DropItem>Đi đến giỏ hàng</DropItem>
                 <DropItem onClick={handleLogout}>Đăng xuất</DropItem>
               </Dropdown>
               </MenuItem> :
               <>
               
                <MenuItem onClick={()=>navigate('/register')}>
                Register
                </MenuItem>
                <MenuItem onClick={()=>navigate('/login')}>
                Login
                </MenuItem>
               </>}
                <Link to={'/cart'}>
                <MenuItem>
                <Badge badgeContent={quantity} color="secondary">
  <ShoppingCartOutlined color="action" />
</Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar