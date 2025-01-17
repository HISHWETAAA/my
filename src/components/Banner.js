import React from 'react'
import {useState,useEffect} from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
const Banner = () => {
    const [loopNum ,setLoopNum]=useState(0);
    const [isDeleting ,setIsDeleting]=useState(false);
    const [text,setText]=useState('');
    const [delta,setDelta] =useState(300-Math.random()*100);
    const toRotate=["Front-End Developer" , "Web Developer","Web Designer"];
        const period=2000;

      useEffect(()=>{
        let ticker= setInterval(()=>{
            tick();
            }, delta)
        return ()=>{clearInterval(ticker)}; 
      },)
         
      const tick =()=>{
        let i =loopNum % toRotate.length;
        let fullText= toRotate[i];
        let updatedText=isDeleting?fullText.substring(0,text.length -1): fullText.substring(0,text.length +1);

        setText(updatedText);

        if(isDeleting){
          setDelta(prevDelta=> prevDelta/2);
        }

        if(!isDeleting && updatedText ===fullText){
          setIsDeleting(true);
          setDelta(period);
        }
        else if(isDeleting&& updatedText=== ''){
          setIsDeleting(false);
          setLoopNum(loopNum+1);
          setDelta(500);
        }
       }


    
  return (
    <div>
      <section className='banner' id='home'>
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7} >
                <span className='tagline'>WELCOME TO MY PORTFOLIO</span>
                <h1>{"Hi I'm Shweta "} <span className='wrap'>{text}</span></h1>
                <p>
                Welcome to my portfolio! I’m a passionate frontend developer specializing in creating dynamic, user-friendly websites and web applications.
                 I craft seamless user experiences using modern technologies like HTML, CSS, and JavaScript and React Js.
                </p>
                <button onClick={()=> console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt='header'></img>
                </Col>
            </Row>
        </Container>

      </section>
    </div>
  )
}

export default Banner
