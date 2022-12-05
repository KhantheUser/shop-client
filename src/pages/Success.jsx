
import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
const Container = styled.div`
height: 100vh;
width: 100vw;
background : linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("https://www.elleman.vn/wp-content/uploads/2019/05/20/phoi-do-minimalism-mau-nam-mac-do-nau-feature-.jpg");
display: flex;
align-items: center;
justify-content: center;
`
const SuccessContainer = styled.div`
height: 50vh ;
width: 40vw;
background-color: #e3dada;
z-index: 3;
border-radius: 16px;
display: flex;
flex-direction: column;

`
const Title =styled.h1`
text-align: center;
margin-top: 20px;
`
const LinkContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
padding: 10px;
`
const Left = styled.p`
padding:10px;
background-color: black;
color:white;
border-radius: 6px;
font-size:18px;
margin:0 16px;
cursor: pointer;
transition: all 0.4s linear;
&:hover{
    opacity: 0.8;
}
`
const Right = styled.p`
padding:10px;
background-color: black;
color:white;
border-radius: 6px;
font-size:18px;
margin:0 16px;
cursor: pointer;
transition: all 0.4s linear;

&:hover{
    opacity: 0.8;
}
`

function Success() {
    const navigate = useNavigate()
  return (
    <Container>
        <SuccessContainer>
            <Title>Thank you for checkout !</Title>
            <LinkContainer>
                <Left onClick={()=>navigate('/')}>
                    Quay lại trang chủ
                </Left>
                <Right onClick={()=>navigate('/products')}>
                    Tiếp tục mua sắm
                </Right>
            </LinkContainer>
        </SuccessContainer>
    </Container>
  )
}

export default Success