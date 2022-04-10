import React from 'react'
import blog from '../Images/blog.webp'
const Navbar = () => {
  return (
    <>
    <nav className="flex my-3">
       
      <img className ="flex justify-center" src ={blog} alt ="blogPage"/>
      
      <ul className ="flex justify-center items-center absolute right-20  h-40">
      <li className =" mx-4 hover:text-[#ffad4d]"><i className="fa-brands fa-instagram scale-[1.5]"></i></li>
      <li className =" mx-4 hover:text-[#ffad4d]"><i className="fa-brands fa-twitter scale-[1.5]"></i></li>
      <li className =" mx-4 hover:text-[#ffad4d]"><i className="fa-brands fa-facebook-f scale-[1.5]"></i></li>
      
      <input  className =" mx-2 px-4 h-1/4 w-auto relative bottom-1 rounded-xl shadow border-none hover:bg-slate-50" type ="search" name ="my search" placeholder='Search..'></input>
      <li className =" mx-4 w-10 px-3 py-2 cursor-pointer rounded-2xl bg-black justify-center bottom-1 relative hover:bg-[#ffad4d]" ><i className="fa-solid fa-magnifying-glass text-white"></i></li>
 </ul>
 </nav>
 
   <hr className="bg-slate-100"/>
   <div>
     <ul className="flex my-3 justify-center">
       <li className=" rounded-xl mx-2 px-3 py-2 font-semibold text-[18px]  hover:text-[#ffad4d] hover:bg-slate-100"> <a href="/" target="_blank">HOME</a></li>
       <li className="text-[18px]  rounded-xl mx-2 px-3  py-2 font-semibold hover:bg-slate-100 hover:text-[#ffad4d]"> <a href="/" target="_blank">FEATURED</a></li>
       <li className="text-[18px]  rounded-xl mx-2 px-3 py-2 font-semibold hover:bg-slate-100 hover:text-[#ffad4d]"> <a href="/" target="_blank">ABOUT</a></li>
       <li className="text-[18px]  rounded-xl mx-2 px-3 py-2 font-semibold hover:bg-slate-100 hover:text-[#ffad4d]"> <a href="/" target="_blank">CATEGORIES</a></li>
       <li className="text-[18px]  rounded-xl mx-2 px-3 py-2 font-semibold hover:bg-slate-100 hover:text-[#ffad4d]"> <a href="/" target="_blank">CONTACT</a></li>
     </ul>
   </div>
 
 
    </>
  )
}

export default Navbar
