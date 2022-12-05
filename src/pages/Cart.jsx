import React, { Fragment } from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components';
import {AddOutlined,RemoveOutlined} from '@material-ui/icons'
import { Mobile } from '../responsive';
import {useSelector,useDispatch} from 'react-redux'
import {quantityProduct} from '../redux/reducer/cartReducer'
import axios from 'axios'
import { userRequest } from '../requestData';
const Container  = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
${Mobile({padding:'10px'})}

`
const Title = styled.h1`
text-align: center;
font-weight: 300;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && 'none'};
background-color: ${props=>props.type === "filled" ?'black':'transparent'};
color: ${props=>props.type === "filled" && 'white'};
`
const TopTexts = styled.div`
${Mobile({display:'none'})}

`
const TopText = styled.span`
    text-decoration : underline;
    cursor: pointer;
    margin: 0px 10px;

`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
${Mobile({flexDirection:'column'})}

`
const Info = styled.div`
flex: 3;
`
const Summary = styled.div`
flex: 1;
border:0.5px solid lightgray;
border-radius: 10px;
padding:20px;
height: 50vh;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
margin: 16px 0;
${Mobile({flexDirection:'column'})}

`
const ProductDetail = styled.div`
flex: 2;
display: flex;
`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductSize = styled.span``
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`
const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${Mobile({margin:'5px 15px'})}

`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${Mobile({marginBottom:'20px'})}

`
const Hr = styled.hr`
    background-color: #eee;
    /* border:none */
    height: 1px;
`
const SummaryTitle = styled.h1`
font-weight :200;
`
const SummaryItem = styled.div`
margin :30px 0;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type ==='total' && 500};
font-size: ${props=>props.type ==='total' && '24px'};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
cursor: pointer;
transition: all 0.4s linear;
&:hover{
    opacity: 0.8;
};
width: 100%;
padding: 10px;
border-radius: 6px;
background-color: black;
color: white;
font-weight: 600;
`


function Cart() {
    const dispatch = useDispatch()
    const URL = process.env.REACT_APP_URL_SERVER
    const {products,total} = useSelector(state=>state.cartReducer)
    const handleQuantity = (payload)=>{
        dispatch(quantityProduct(payload))
    }
    const handleCheckout = async(products)=>{
        // console.log(products)
        const {data} = await userRequest.post(`${URL}checkout/payment`,products)
        
        window.location.href = data.data.url

    }
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Badge(2)</TopText>
                    <TopText>Your Whislist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    {products?.map((product,index)=> <Fragment key={index}>
                        <Product >
                        <ProductDetail>
                            <Image src={product.img}/>
                            <Details>
                                <ProductName>
                                    <b>Product :</b> {product.title}
                                </ProductName>
                                <ProductId>
                                    <b>ID :</b> {product._id} 
                                </ProductId>
                                <ProductColor color={product.color}/>
                                <ProductSize><b>Size : {product.size.toUpperCase()}</b></ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddOutlined style={{cursor:'pointer'}} onClick={()=>handleQuantity({id:product._id,number:+1})}/>
                                <ProductAmount>{product.quantity}</ProductAmount>
                                <RemoveOutlined style={{cursor:'pointer'}} onClick={()=>handleQuantity({id:product._id,number:-1})}/>
                            </ProductAmountContainer>
                            <ProductPrice>{product.quantity * product.price}</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    </Fragment>)}
                    
                </Info>
                <Summary>
                    <SummaryTitle>SUMMARY TITLE</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>$ {total}</SummaryItemPrice>
                    </SummaryItem>
                    <Button onClick={()=>handleCheckout(products)}>CHECKOUT</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart