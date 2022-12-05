import React from 'react'
import styled from 'styled-components';
import {Send} from '@material-ui/icons';
import { Mobile } from '../responsive';
const Container = styled.div`
height:60vh ;
background-color : #fcf5f5;
display: flex;
justify-content: center;
align-items : center;
flex-direction: column;

`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`;
const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${Mobile({textAlign:'center'})}
`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border:1px solid lightgray;
${Mobile({width:'80%'})}
`;
const Input = styled.input`
border:none ;
flex:8;
padding-left: 20px;
outline: none;
`;
const Button = styled.button`
    flex:1;
    background-color: teal;
    color: white;
    border: none;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
        transition: all 0.3s linear;
    }
`
function Newletters() {
  return (
   <Container>
    <Title>New letter</Title>
    <Description>Get timely udaptes from favourite products</Description>
    <InputContainer>
    <Input placeholder='Your email...'/>
    <Button>
        <Send/>
    </Button>
    </InputContainer>
   </Container>
  )
}

export default Newletters