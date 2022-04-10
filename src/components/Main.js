import React from 'react'
import typeImg from '../Images/mainImg.webp'
import Img1 from '../Images/img1.jpg'
import Img2 from '../Images/img2.jpg'
import sign from '../Images/sign.png'
import slide2 from '../Images/Slide1.webp'
import blog3 from '../Images/blog3.webp'
import posts1 from '../Images/posts1.webp'
import posts2 from '../Images/posts2.webp'
import posts3 from '../Images/posts3.webp'
import posts4 from '../Images/posts4.webp'

const Main = () => {
  return (
      <>
      <div className="flex bg-slate-100 w-[80vw] ml-[10vw] h-[50vh] mt-[40px] relative bottom-[100px]">
    <div className="w-[50%] ml-[2%] flex justify-center flex-col">
       <h1 className="font-semibold text-slate-500 text-xl mb-[12px]">EDITOR'S PICK</h1>
       <h1 className="font-bold text-[#444444] text-3xl mb-[12px]">News needs to meet its Audiences Where They Are</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus quasi quaerat laboriosam impedit at quibusdam ratione. Recusandae quasi omnis labore architecto vitae tenetur harum corrupti vero earum, esse accusamus.</p>
        <h1 className=" text-xl  text-[#444444] font-semibold mt-[6px] ">Dave Rogers on Tour</h1>
        <p className="text-slate-500">jun 14, 3 min read.</p>
        </div>
        <div className="flex justify-center items-center ml-[40px]">
      <img src={typeImg}  className ="h-[49vh] w-[36vw] left-[10vw]" alt=""/>
    </div>
    </div>
    <div className="w-[80vw] ml-[10vw] flex">
      <div>
        <img src={Img1} alt="" className="w-[85%]"/>
        <button type="button" className="bg-[#ffad4d] px-5 py-[1px] mt-[30px] text-lg text-white hover:bg-white hover:text-[#ffad4d] border-[1px]  transition  border-[#ffad4d]" >TRAVEL</button>
        <h1 className="text-lg my-[16px] font-semibold text-[#555555] ">Monday, March 14, 2021</h1>
       
        <ul className="flex justify-end ml-[200px] relative right-[8vw] bottom-[50px]">
          
          <li className="mx-4  text-[#555555] hover:text-[#ffad4d] transition"><i className="fa-solid fa-share-nodes "></i> Share</li>
          <li className="mx-4 text-[#555555] hover:text-[#ffad4d] transition"><i className="fa-solid fa-heart "></i> 04</li>
          <li className="mx-4 text-[#555555] hover:text-[#ffad4d] transition"><i className="fa-solid fa-message "></i> 06</li>
        </ul>
        <h1 className="text-[1.8rem] text-[#444444] relative bottom-[20px] font-semibold">This is post about travel, adventure and fun.</h1>
        <p className="text-[#555555] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. This is amazing trip we have. Lorem ipsum dolor sit amet.</p>
        <p className="text-[#555555] ">Trips are  consectetur adipisicing elit. This is amazing trip we have. Lorem ipsum dolor sit amet.</p>
        <p className="text-[#555555] ">Nothing amazing consectetur adipisicing elit. This is amazing trip we have. Lorem ipsum dolor sit amet.</p>
        <p className="text-[#555555] ">Lorem ipsum dolor sit amet consectetu elit. This is amazing trip we have. Lorem ipsum dolor sit amet.</p>
        <button type="button" className="bg-white px-7 py-[6px] mt-[30px] text-lg text-[#ffad4d] hover:bg-[#ffad4d] hover:text-[white] border-[1px]  transition  border-[#ffad4d]" >READ MORE</button>
      </div>
      {/* Aside bar */}
      <div className="bg-white shadow-[0px_35px_60px_-12px_rgba(0,0,0,0.35)] w-[35%] mt-[8vh]  h-[80vh] ">
        <img className="ml-[23%] bottom-[10%] shadow-2xl rounded-[4px] relative" src ={Img2} alt=""/>
      <div className="flex justify-center flex-col items-center">
      <ul className="flex justify-center">
        <li className =" mx-3 hover:text-[#ffad4d]"><i className="fa-brands fa-facebook-f"></i></li>
        <li className =" mx-3 hover:text-[#ffad4d]"><i className="fa-brands fa-instagram"></i></li>
        <li className =" mx-3 hover:text-[#ffad4d]"><i className="fa-brands fa-twitter"></i></li>
        <li className =" mx-3 hover:text-[#ffad4d]"><i className="fa-solid fa-comments"></i></li>
        <li className =" mx-3 hover:text-[#ffad4d]"><i className="fa-brands fa-twitch"></i></li>
      </ul>
      <h1 className="text-xl font-bold text-[#444444] my-[24px]">Christine Smith</h1>
      <p>Lorem, ipsum dolor sit amet consectetur</p>
      <p>Lorem, ipsum dolor sit amet con</p>
      <p>Lorem, ipsum dolor sit amet consectetur</p>
      <p> Ipsum dolor sit amet consectetur</p>
      <img src ={sign} alt=""/>
      <h1 className="text-lg text-[#ffad4d] font-semibold my-[16px]">READ MORE</h1>
      <hr className="bg-[#ffad4d] w-[100px] h-[3px] relative bottom-[18px] hover:bg-white transition"/>

      </div>
      
      </div>
      
    </div>
    {/* second blog */}
    <div className="w-[80vw] ml-[10vw] flex my-[2vw]">
      <div>
        <img src={slide2} alt="" className="w-[80%]"/>
        <button type="button" className="bg-[#ffad4d] px-5 py-[1px] mt-[30px] text-lg text-white hover:bg-white hover:text-[#ffad4d] border-[1px]  transition  border-[#ffad4d]" >TRAVEL</button>
        <h1 className="text-lg my-[16px] font-semibold text-[#555555] ">Monday, March 14, 2021</h1>
       
        <ul className="flex justify-end ml-[200px] relative right-[14vw] bottom-[50px]">
          
          <li className="mx-4  text-[#555555] hover:text-[#ffad4d] transition"><i className="fa-solid fa-share-nodes "></i> Share</li>
          <li className="mx-4 text-[#555555] hover:text-[#ffad4d] transition"><i className="fa-solid fa-heart "></i> 02</li>
          <li className="mx-4 text-[#555555] hover:text-[#ffad4d] transition"><i className="fa-solid fa-message "></i> 08</li>
        </ul>
        <h1 className="text-[1.8rem] text-[#444444] relative bottom-[20px] font-semibold">This is post for the Ones, that loves to Travel.</h1>
        <p className="text-[#555555] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. This is amazing trip we have. Lorem ipsum dolor sit amet.</p>
        <p className="text-[#555555] ">Trips are  consectetur adipisicing elit. This is amazing trip we have. Lorem ipsum dolor sit amet.</p>
        <p className="text-[#555555] ">Nothing amazing consectetur adipisicing elit. This is amazing trip we have. Lorem ipsum dolor sit amet.</p>
        <p className="text-[#555555] ">Lorem ipsum dolor sit amet consectetu elit. This is amazing trip we have. Lorem ipsum dolor sit amet.</p>
        <button type="button" className="bg-white px-7 py-[6px] mt-[30px] text-lg text-[#ffad4d] hover:bg-[#ffad4d] hover:text-[white] border-[1px]  transition  border-[#ffad4d]" >READ MORE</button>
      </div>
      {/* SUBSCRIBE BAR */}
     
     
          <div className="w-[35%]  h-[32vh]  bg-[#29333C] flex flex-col px-[3vw]">
            <h1 className="text-white text-lg font-semibold mt-[3.5vh] ">Subscribe to our Newsletter</h1>
            <input type="email" name="email" className=" hover:bg-slate-100 shadow h-[5.5vh]  my-[3vh] px-[2.5vw] rounded-sm" placeholder="Enter your Email.."/>
            <button type="button" className=" text-[#ffad4d] border-[1px] border-[#ffad4d] w-[10.5vw] px-[2vw] py-[2vh] hover:text-white  hover:bg-[#ffad4d] transition">SUBSCRIBE</button>
          </div>
          
         
        
      </div>
      {/* Blog three */}
      <div className="w-[80vw] ml-[10vw] flex my-[2vw]">
      <div>
        <img src={blog3} alt="" className="w-[80%]"/>
        <button type="button" className="bg-[#ffad4d] px-5 py-[1px] mt-[30px] text-lg text-white hover:bg-white hover:text-[#ffad4d] border-[1px]  transition  border-[#ffad4d]" >TRAVEL</button>
        <h1 className="text-lg my-[16px] font-semibold text-[#555555] ">Monday, March 14, 2021</h1>
       
        <ul className="flex justify-end ml-[200px] relative right-[14vw] bottom-[50px]">
          
          <li className="mx-4  text-[#555555] hover:text-[#ffad4d] transition"><i className="fa-solid fa-share-nodes "></i> Share</li>
          <li className="mx-4 text-[#555555] hover:text-[#ffad4d] transition"><i className="fa-solid fa-heart "></i> 02</li>
          <li className="mx-4 text-[#555555] hover:text-[#ffad4d] transition"><i className="fa-solid fa-message "></i> 08</li>
        </ul>
        <h1 className="text-[1.8rem] text-[#444444] relative bottom-[20px] font-semibold">How to Make your home Modern.</h1>
        <p className="text-[#555555] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. This is amazing trip we have. Lorem ipsum dolor sit amet.</p>
        <p className="text-[#555555] ">Trips are  consectetur adipisicing elit. This is amazing trip we have. Lorem ipsum dolor sit amet.</p>
        <p className="text-[#555555] ">Nothing amazing consectetur adipisicing elit. This is amazing trip we have. Lorem ipsum dolor sit amet.</p>
        <p className="text-[#555555] ">Lorem ipsum dolor sit amet consectetu elit. This is amazing trip we have. Lorem ipsum dolor sit amet.</p>
        <button type="button" className="bg-white px-7 py-[6px] mt-[30px] text-lg text-[#ffad4d] hover:bg-[#ffad4d] hover:text-[white] border-[1px]  transition  border-[#ffad4d]" >READ MORE</button>
      </div>
      {/* Recent posts */}
      <div className="w-[35%]  h-[100vh] relative bottom-[20vh] left-[3.5vw] bg-white flex  px-[3vw]">
        <h1 className="text-[#444444] text-2xl font-semibold w-[100%] ">POSTS</h1>
        <ul className="flex mt-[50px] flex-col relative right-[4.5vw] ">
          <li className="my-[2vh] flex"><img src={posts1} alt="not loaded" className=" w-[90px]"/> <div className="flex flex-col w-[20vw] mx-[25px]">
            <button type="button" className=" w-[6vw] transition text-white bg-[#ffad4d] border-[1px] border-[#ffad4d] hover:text-[#ffad4d] hover:bg-white my-[8px]">TRAVEL</button>
            <h1 className="text-lg text-[#444444] font-semibold">One More night in  Club.</h1>
            <h2 className="text-[#555555]">Mondey, january 13,2022</h2></div></li>
          <li className="my-[2vh] flex "><img src={posts2} alt="not loaded" className=" w-[90px]"/><div className="flex flex-col w-[20vw] mx-[25px]">
            <button type="button" className=" w-[6vw] transition text-white bg-[#ffad4d] border-[1px] border-[#ffad4d] hover:text-[#ffad4d] hover:bg-white my-[8px]">TRAVEL</button>
            <h1 className="text-lg text-[#444444] font-semibold">One More night in  Club.</h1>
            <h2 className="text-[#555555]">Mondey, january 13,2022</h2></div></li>
          <li className="my-[2vh] flex "><img src={posts3} alt="not loaded" className=" w-[90px]"/><div className="flex flex-col w-[20vw] mx-[25px]">
            <button type="button" className=" w-[6vw] text-white transition bg-[#ffad4d] border-[1px] border-[#ffad4d] hover:text-[#ffad4d] hover:bg-white my-[8px]">TRAVEL</button>
            <h1 className="text-lg text-[#444444] font-semibold">One More night in  Club.</h1>
            <h2 className="text-[#555555]">Mondey, january 13,2022</h2></div></li>
          <li className="my-[2vh] flex"><img src={posts4} alt="not loaded" className=" w-[90px]"/><div className="flex flex-col w-[20vw] mx-[25px]">
            <button type="button" className=" w-[6vw] transition  text-white bg-[#ffad4d] border-[1px] border-[#ffad4d] hover:text-[#ffad4d] hover:bg-white my-[8px]">TRAVEL</button>
            <h1 className="text-lg text-[#444444] font-semibold">One More night in  Club.</h1>
            <h2 className="text-[#555555]">Mondey, january 13,2022</h2></div></li>
        </ul>
      </div>
      </div>
    </>
  )
}

export default Main
