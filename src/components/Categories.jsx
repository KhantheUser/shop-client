import React from 'react'
import styled from 'styled-components';
import { categories } from '../data';
import { Mobile } from '../responsive';
import CategoryItem from './CategoryItem';
const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${Mobile({padding:'0px',flexDirection:'column'})}

`
function Categories() {
  return (
    <Container>{
        categories.map((category,index)=>(
            <CategoryItem key={index} item={category}/>
        ))
        }</Container>
  )
}

export default Categories