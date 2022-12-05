
import React from 'react'
import styled from 'styled-components';
import {ArrowLeftOutlined,ArrowRightOutlined} from '@material-ui/icons'
import { useState } from 'react';
import { sliderItems } from '../data';
import { Mobile } from '../responsive';
const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
  
   position: relative;
  
   
   overflow-x: hidden;
${Mobile({display:'none'})}


`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position:absolute;
top: 0;
   bottom: 0;
   margin : auto;
   left: ${prop=>prop.direction ==='left' && '10px'};
   right: ${prop=>prop.direction ==='right' && '10px'};
   cursor: pointer;
   opacity: 0.5;
   z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 0.7s linear;
    transform: translateX(${prop=>prop.slideIndex * -100}vw);

`
const Slide =styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${prop=>prop.bg};
`;
const ImgContainer =styled.div`
height: 100%;

flex: 1;
`;
const Image = styled.img`
height: 80%;
`
const InfoContainer =styled.div`
flex: 1;
padding: 50px;
`
const Title = styled.h1`
font-size:70px
`
const Desc = styled.p`
margin: 50px 0;
font-size: 20px;
letter-spacing: 3px;
font-weight: 500;

`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`
function Slider() {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        }else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }

    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick('left')}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item,index)=>(

            <Slide bg={item.bg}  key={index}>
    
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>Show Now</Button>
                </InfoContainer>
            </Slide>
            ))}
            </Wrapper>
        
        <Arrow direction="right" onClick={()=>handleClick('right')}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider