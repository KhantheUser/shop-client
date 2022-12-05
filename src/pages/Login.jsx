import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { Mobile } from '../responsive';
import {useDispatch,useSelector} from 'react-redux'
import { login } from '../redux/reducer/userReducer';
const Container  = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-hien-dai-dep-nhat_113857069.jpg');
display: flex;
justify-content: center;
align-items: center;

`
const Wrapper = styled.div`
width: 25%;
padding:20px;
background: white;
${Mobile({width:'80%'})}
`
const Title = styled.h1`
font-size: 20px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin : 10px 0;
padding: 10px;
`
const Button= styled.button`
padding :15px 20px;
border:none;
background-color: teal;
color :white;
width: 100%;
transition: linear 0.5s all;

cursor: pointer;
&:hover {
    opacity: 0.7;
}
&:disabled {
  cursor: not-allowed;
  background-color: gray;
}
`
const Link = styled.a`
margin: 5px 0;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
margin-bottom: 10px;
    
`
const Error = styled.p`
  color : red;
  margin :10px 0;
  text-align: center;

`
function Login() {
  const [values,setValues]= useState({})
  const {isLoading,isError} = useSelector(state=>state.userReducer)
  const dispatch = useDispatch()
  const handleChange =(e)=>{
      const {name,value} = e.target
      setValues((pre)=>{
        return {
          ...pre,
          [name] :value
        }
      })
    }
    const handleLogin = (userInfo)=>{
      
      // console.log(userInfo)
      dispatch(login(userInfo))
    }
   
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder='Email' name='email'  onChange={(e)=>handleChange(e)}/>
                <Input type='password' placeholder='Password' name='password'  onChange={(e)=>handleChange(e)}/>
                
                
                <Button disabled={isLoading} onClick={(e)=>{
                  e.preventDefault();
                  handleLogin(values)
                }}>LOGIN</Button>
                <Error>{isError ? 'Email or password was wrong':''}</Error>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login