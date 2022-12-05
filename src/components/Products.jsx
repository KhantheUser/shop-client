import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import {getProducts} from '../../src/redux/reducer/productReducer'
import { Mobile } from '../responsive';
import {useDispatch,useSelector} from 'react-redux'
import Product from './Product';
import axios from 'axios';
const Container = styled.div`
padding :20px;
display: flex;
justify-content: flex-start;
flex-wrap: wrap;

`
function Products({sort,filter,cat}) {
  const [products,setProducts] = useState([])
  const dispatch = useDispatch();
  const [filterdProducts,setFilterdProducts] = useState([])
  const URL = process.env.REACT_APP_URL_SERVER

  useEffect(()=>{
      const getProducts = async ()=>{
        try{
          const res = await axios.get(cat? `${URL}product?category=${cat}` :`${URL}product`)
          console.log(res.data.data)
          setProducts(res.data.data.data)
          
      }catch(err){
        console.log(err.response.data)
      }
    }
    getProducts()
  
  },[cat])
  
  
  useEffect(()=>{
      cat && setFilterdProducts(products.filter((item)=>
        Object.entries(filter).every(([key,value])=>item[key].includes(value))
      ))
    },[cat,filter,products])

  useEffect(()=>{
    if(sort ==='newest'){
      setFilterdProducts(pre=>[...pre].sort((a,b)=>a.createdAt - b.createdAt))
    }else if(sort === 'asc'){
      setFilterdProducts(pre=>[...pre].sort((a,b)=>a.price - b.price))
      
    }else {
      setFilterdProducts(pre=>[...pre].sort((a,b)=>b.price - a.price))

    }
  },[sort])
 
  return (
    <Container>
        {cat?filterdProducts.map((item,index)=>(
            <Product key={index} item={item}/>
        )) : products.slice(0,8).map((item,index)=>(
          <Product key={index} item={item}/>
      ))}
    </Container>
  )
}

export default Products