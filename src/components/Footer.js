import React from 'react'
import footer1 from '../Images/footer1.jpg'
import footer2 from '../Images/footer2.jpg'
import footer3 from '../Images/footer3.jpg'
import footer4 from '../Images/footer4.jpg'
import footer5 from '../Images/footer5.jpg'
import footer6 from '../Images/footer6.jpg'
import footer7 from '../Images/footer7.jpg'

const Footer = () => {
  return (
      <>
    <div className="h-[90vh]">
    <hr className="bg-slate-200 h-[2px]"/>
     <div>
         <h1 className="text-[#444444] relative left-[20vw] text-2xl font-bold my-[3vh]">Follow me on Instagram</h1>
     </div>
     <ul className="flex ">
         <li> <img src={footer1} alt="not Preview"/></li> 
         <li> <img src={footer2} alt="not Preview"/></li>
         <li> <img src={footer3} alt="not Preview"/></li>
         <li> <img src={footer4} alt="not Preview"/></li>
         <li> <img src={footer5} alt="not Preview"/></li>
         <li> <img src={footer6} alt="not Preview"/></li>
         <li> <img src={footer7} alt="not Preview"/></li>
     </ul>
     <div className=" w-[100%] ">
         <ul className="flex justify-center mt-[4vw]">
             <li className="hover:bg-[#ffad4d] hover:text-white transition rounded-[40%] mx-[5px] w-[40px] h-[40px] bg-[#cccccc] px-[14px] py-[7px]"><i class="fa-brands fa-facebook-f"></i></li>
             <li className="hover:bg-[#ffad4d] hover:text-white transitio5  rounded-[40%] mx-[5px] w-[40px] h-[40px] bg-[#cccccc] px-[14px] py-[7px]"><i class="fa-brands fa-twitter"></i></li>
             <li className="hover:bg-[#ffad4d] hover:text-white transitio5  rounded-[40%] mx-[5px] w-[40px] h-[40px] bg-[#cccccc] px-[14px] py-[7px]"><i class="fa-brands fa-linkedin-in"></i></li>
             <li className="hover:bg-[#ffad4d] hover:text-white transitio5  rounded-[40%] mx-[5px] w-[40px] h-[40px] bg-[#cccccc] px-[12px] py-[7px]"><i class="fa-brands fa-youtube"></i></li>
             <li className="hover:bg-[#ffad4d] hover:text-white transitio5  rounded-[40%] mx-[5px] w-[40px] h-[40px] bg-[#cccccc] px-[14px] py-[7px]"><i class="fa-brands fa-instagram"></i></li>

         </ul>
          <h1 className="text-[#555555] mx-[30vw] my-[4vh]">Copyright 2022 All rights Reserved | This template is made for Blogs by <span>PRIYANK</span></h1>
          <h1 className="text-[#555555] mx-[41vw] my-[2vh] underline">Terms & Conditions / Privacy policy </h1>
     </div>
    </div>
    </>
  )
}

export default Footer
