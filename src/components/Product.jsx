import React  from 'react'
import styled from 'styled-components';
import {ShoppingCartOutlined,SearchOutlined,FavoriteBorder} from '@material-ui/icons'
import { Mobile } from '../responsive';
import {Link,useParams} from 'react-router-dom'
const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
background-color: rgba(0,0,0,0.2);
top:0;
left: 0;
align-items: center;
display: flex;
z-index: 3;
justify-content: center;
`
const Container = styled.div`
margin :5px;

width: 23%;
height: 350px;
display: flex;
position: relative;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
${Mobile({width:'100%'})}
&:hover ${Info}{
    opacity: 1;
    transition: all 0.5s linear;
    cursor: pointer;
}
`
const Circle = styled.div``
const Image = styled.img`
height: 75%;
width: 60%;
border-radius: 16px;
`

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;align-items:center;justify-content:center;
margin: 10px;
&:hover{
    background-color: #e9f5f5;
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s linear;

}

`
function Product({item}) {
    
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`}>

                <SearchOutlined />
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorder />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product