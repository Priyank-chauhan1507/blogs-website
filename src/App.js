import React, { useEffect, useState } from 'react'
import Content from './components/Content'
import Main from './components/Main'
import slide1 from './Images/Slide1.webp'
import slide2 from './Images/Slide2.webp'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  const [img ,setImg] =useState(slide2);
  

  
   let changeImg =()=>{
    if(img===slide1){
      setImg(slide2);
      
    }
    else{
      setImg(slide1);
      
      
    }
  }

  return (
    <div>
      <Navbar/>
      <Content image ={img}  changeImg ={changeImg} />
      <div className="block"><Main/></div>
      <Footer/>
      
    </div>
  )
}

export default App

