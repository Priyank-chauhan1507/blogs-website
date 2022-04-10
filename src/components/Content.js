import React  from 'react'


const Content = (props) => {

  
  return (
      <>
    <div style ={{background: `url(${props.image}) no-repeat center center/cover`,content:"", position:"absolute", width:"100%", opacity:"1", zIndex:"-1",}} className="w-[100vw] h-[80vh] block transition-all">
        </div>
    <div className=" py-[38vh] z-[2]">  <span className="mx-[3vw] border-2 relative top-[15px] border-white px-[15px] py-[13px] hover:bg-white text-white hover:text-black rounded-lg" onClick={props.changeImg}><i className="fa-solid fa-angle-left scale-[1.5] z-[100] "></i></span>
    <span className="bg-black ">
      <ul className={` relative  transition left-[50px] top-[30px] mx-[15vw] px-[10vw] opacity-[0.6] bg-black w-[350px]` }><li className="relative top-[8px] right-[55px]"><button className="bg-[#ffad4d] px-[15px] py-[6px] border-[1px] border-[#ffad4d] text-white hover:text-[#ffad4d] hover:bg-black hover:opacity-[0.6] hover:border-[#ffad4d] hover:border-[1px] text-lg " type="button">TRAVEL</button></li>
      <li className="my-[9px] text-2xl  font-bold text-white w-[300px] opacity-[1] relative right-[56px]">Travel, Love, Live</li>
      <li className=" relative  right-[55px] text-white text-lg font-semibold opacity-[4] z-[2] w-[200px]">10 April ,2022</li>
      </ul>
    </span>
     <span className="mx-[95vw] border-2 border-white px-[15px] py-[13px] hover:bg-white text-white hover:text-black rounded-lg relative bottom-[16vh]" onClick={props.changeImg} ><i className="fa-solid fa-angle-right scale-[1.5]  hover:text-black"></i></span></div>
          
      </>
  )
}

export default Content
