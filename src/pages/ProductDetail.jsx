import React, { useState } from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newletters from '../components/Newletters';
import {RemoveOutlined,AddOutlined} from '@material-ui/icons'
import { Mobile } from '../responsive';
import {Link,useParams} from 'react-router-dom'
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'

import {publicRequest, userRequest} from '../requestData'
import { addProduct } from '../redux/reducer/cartReducer';

const Container = styled.div`

`
const Wrapper = styled.div`
padding:50px;
display: flex;
${Mobile({padding:'10px',flexDirection:'column'})}

`
const ImgContainer = styled.div`
flex:1;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${Mobile({height:'40vh'})}

`
const InfoContainer = styled.div`
padding : 0 50px;
flex:1;
${Mobile({padding:'10px'})}

`
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
margin:20px 0;
`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
width: 50%;
margin:30px 0;
display: flex;
justify-content: space-between;
${Mobile({width:'100%'})}

`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
/* border : ${props=>props.isVisibleColor ? '3px solid teal':'none'}; */
background-color: ${props=>props.color};
margin : 0 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding :5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items:center;
justify-content: space-between;
${Mobile({width:'100%'})}

`
const AmountContainer = styled.div`
display: flex;
font-weight:700;
align-items: center;
`
const Amount = styled.span`
height: 30px;
width: 30px;
border:1px solid teal;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
margin : 0 5px;
`
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
font-weight: 500;
cursor: pointer;
&:hover{
    background-color: #f8f4f4;
}

`
function ProductDetail() {
    const dispatch = useDispatch()
    const {id} = useParams()
    const [product,setProduct] = useState({})
    const [quantity,setQuantity] = useState(1)
    const [color,setColor] = useState('')
    // const [isVisibleColor,setIsVisibleColor] = useState(false)
    const [size,setSize] = useState('')
    console.log(size)
    console.log(id);
    useEffect(()=>{
        const getProductDetail = async()=>{
            const res =await publicRequest.get(`/product/${id}`)
            // setProduct(res.data.data)
            setProduct(res.data.data.data)
        }
        getProductDetail()
    },[id])
    const handleQuantity = (number)=>{
       if(quantity >0){
        setQuantity(quantity+number)
       }else return
    }
    const handleSetColor = (color)=>{
        setColor(color)
        // setIsVisibleColor(!isVisibleColor)
        
    }
    const handleAddToCart = ()=>{
            if(!color || !size){
                alert('Please select a color or size')
                return
            }
           dispatch(addProduct({
             ...product,color,size,quantity
           }))
        
    }
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src={product.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>
                    {product.title}
                </Title>
                <Desc>{product.description}</Desc>
                <Price>{`$${product.price}`}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        
                        {product.color?.map((color,index)=><FilterColor  onClick={()=>handleSetColor(color)} key={index} color={color}/>)}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        
                        <FilterSize onChange={(e)=>setSize(e.target.value.toLowerCase())}>
                            <FilterSizeOption selected disabled ></FilterSizeOption>
                            {product.size?.map((size,index)=><FilterSizeOption>{size.toUpperCase()}</FilterSizeOption>)}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveOutlined onClick={()=>handleQuantity(-1)} style={{cursor:'pointer'}}/>
                        <Amount>{quantity}</Amount>
                        <AddOutlined onClick={()=>handleQuantity(1)}  style={{cursor:'pointer'}}/>
                    </AmountContainer>
                    <Button onClick={handleAddToCart}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newletters/>
        <Footer/>
    </Container>
  )
}

export default ProductDetail