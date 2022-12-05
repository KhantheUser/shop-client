
import { useState } from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newletters from '../components/Newletters';
import Products from '../components/Products';
import { Mobile } from '../responsive';

const Container = styled.div``
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
margin : 0 20px;
`
const Filter = styled.div`

${Mobile({display:'block'})}

`
const Title = styled.h1`
margin: 20px;
`
const FilterText = styled.span`
    font-size:20px;
    font-weight: 600;
    margin-right: 20px;
${Mobile({marginRight:'0px'})}

`
const Select = styled.select`
padding: 10px;
margin-right: 10px;
${Mobile({margin:'10px 0px'})}

`;
const Option = styled.option``;
function ProductList() {
    const cat = window.location.pathname.split('/')[2];
    const [filter,setFilter ] = useState({})
    const [sort,setSort] = useState('newest')
    const handleFilters = (e)=>{
        const value = e.target.value
        setFilter((pre)=>{
            return {
                ...pre,
                [e.target.name]: value.toLowerCase()
            }
        })
    }
    
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dress</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select name='color' onChange={handleFilters}>
                    <Option selected disabled>Colors</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select >
                <Select name='size' onChange={handleFilters}>
                    <Option selected disabled >Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products</FilterText>
            <Select onChange={(e)=>setSort(e.target.value)}>
                    <Option  value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                    
                </Select>
</Filter>
        </FilterContainer>
        <Products cat={cat} filter={filter} sort={sort}/>
        <Newletters/>
        <Footer/>
    </Container>
  )
}

export default ProductList