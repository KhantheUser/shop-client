import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size:14px;
    font-weight: 500;

`
function Announcement() {
  return (
    <Container>Super Deal ! Free shipping on order over $50</Container>
  )
}

export default Announcement