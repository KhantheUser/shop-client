import React from 'react'
import styled from 'styled-components';
import { Mobile } from '../responsive';
import {Link} from 'react-router-dom'
const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;


`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${Mobile({height:'20vh'})}
`;
const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top : 0;
left:  0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Title = styled.h1`
color:#fff;
margin-bottom: 20px;
`;
const Button = styled.button`
padding: 14px 16px;
background-color: white;
border: none;
border-radius: 10px;
cursor: pointer;
font-weight: 600;
`;
function CategoryItem({item}) {
  return (
    <Container >
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
          <Title>{item.title}</Title>
          <Button>Show Now</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem