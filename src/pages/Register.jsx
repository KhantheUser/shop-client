import React, { useRef } from 'react'
import styled from 'styled-components';
import { Mobile } from '../responsive';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {registerUser} from '../redux/reducer/userReducer'
import {useDispatch} from 'react-redux'
import * as yup from "yup";
const Container  = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-hien-dai-dep-nhat_113857069.jpg');
display: flex;
justify-content: center;
align-items: center;

`
const Wrapper = styled.div`
width: 40%;
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
flex-wrap: wrap;
${Mobile({display:'block'})}
`
const InputContainer = styled.div`
flex: 1;
    
min-width: 40%;
`
const Input = styled.input`
width: 95%;
margin : 20px 10px 0 0;
padding: 10px;
${Mobile({width:'100%'})}
`
const Agreement= styled.span`
font-size: 12px;
margin : 20px 0;
`
const Button= styled.button`
padding :15px 20px;
border:none;
background-color: teal;
color :white;
width: 40%;
cursor: pointer;
${Mobile({display:'block',width:'100%',margin:'10px 0'})}

&:hover {
    opacity: 0.7;
}
`
const Error = styled.p`
    
    color :red
`



function Register() {
    const dispatch = useDispatch()
    const schema = yup.object({
 name : yup.string().required('Must have required field').matches('^[a-zA-Z ]*$','Sai định dạng'),
 lastname : yup.string().required('Must have required field').matches('^[a-zA-Z ]*$','Sai định dạng'),
 username :yup.string().required('Must have required field').matches('^[a-zA-Z0-9_ ]*$','Sai định dạng'),
 email :yup.string().required('Must have required field').matches('[a-z0-9]+@[a-z]+\.[a-z]{2,3}','Sai định dạng'),
 password: yup.string()
      .required('Password is mendatory')
      .min(8, 'Password must be at 8 char long'),
    confirmPassword: yup.string()
      .required('Password is mendatory')
      .oneOf([yup.ref('password')], 'Passwords does not match'),
})
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
     
    const onSubmit = data => {
        const user = {

        };
        user.email = data.email;
        user.password = data.password;
        user.username = data.username;
        console.log(user)
        dispatch(registerUser(user))
    };
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                <Input name='name' {...register("name")} placeholder='Name'/>
                <Error>{errors.name?.message}</Error>
                
                </InputContainer>
                <InputContainer>
                <Input  name='lastname' {...register("lastname")} placeholder='Last name'/>
                
                <Error>{errors.lastname?.message}</Error>
                </InputContainer>
                <InputContainer>
                
                <Input name='username' {...register("username")}  placeholder='Username'/>
                
                <Error>{errors.username?.message}</Error>
                </InputContainer>

                <InputContainer>
                <Input name='email' {...register("email")}  placeholder='Email'/>
                <Error>{errors.email?.message}</Error>
                
                </InputContainer>
                
                <InputContainer>
                <Input  type='password' {...register("password")} placeholder='Password'/>
                
                <Error>{errors.password?.message}</Error>
                </InputContainer>

                <InputContainer>
                <Input type='password'  {...register("confirmPassword")} placeholder='Confirm password'/>
                <Error>{errors.confirmPassword?.message}</Error>
                
                </InputContainer>

                <Agreement>
                    By creating an account , I consent to the processing of my personal data in  accodance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button onClick={onSubmit}>CREATE ACCOUNT</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register