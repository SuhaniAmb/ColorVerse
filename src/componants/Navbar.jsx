import { IoColorPalette, IoSearch } from "react-icons/io5"
import search from "../assets/search.png"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { FaMoon, FaSun } from "react-icons/fa";
import { categories } from "../data/palettes";

 function Navbar({darkMode,setDarkMode,search,setSearch}){

  const [active,setActive]=useState("Home")
  const navigate=useNavigate()
  const location=useLocation()

  return(

    <nav className=" w-full flex justify-between items-center md:p-5 p-1 shadow-sm border-b border-gray-200 " >
      <div className="flex items-center md:gap-4 gap-0 " >
        <IoColorPalette  className="text-purple-600 dark:text-purple-400 md:w-10 w-5 md:h-10 h-4"  />
      <span className=" flex font-bold lg:text-2xl md:text-xl sm:text-lg text-[9px] text-gray-700 dark:text-white " >ColorVerse</span>
      </div>

      <a className={` font-medium lg:text-lg md:text-md sm:text-sm text-[6px] cursor-pointer text-gray-700 dark:text-white hover:scale-105 transition duration-200 active:scale-100 ${location.pathname==="/" ? "border-b border-black dark:border-white":""} `} onClick={()=>navigate("/")} >Home</a>
      <a className={` font-medium lg:text-lg md:text-md sm:text-sm text-[6px] cursor-pointer text-gray-700 dark:text-white hover:scale-105 transition duration-200 active:scale-100 ${location.pathname==="/categories" ? "border-b border-black dark:border-white":""} `} onClick={()=>navigate("/categories")} >Palettes</a>
      <a className={` font-medium lg:text-lg md:text-md sm:text-sm text-[6px] cursor-pointer text-gray-700 dark:text-white hover:scale-105 transition duration-200 active:scale-100 ${location.pathname==="/favorites" ? "border-b border-black dark:border-white":""} `} onClick={()=>navigate("/favorites")} >Favorites</a>
      

      <div className=" flex items-center border border-gray-200 md:px-5 px-1 ml- py-1 md:gap-3 gap-2 rounded-xl lg:w-[400px] md:w-[280px] w-[130px] " > 
        <IoSearch className="text-black dark:text-white md:w-[20px] w-[6px] sm:ml-0 ml-1 md:h-[20px] h-[6px] " />
        <input type="text" placeholder="Search Categories..." value={search} className=" outline-none text-gray-700 placeholder-gray-500 dark:placeholder-white md:text-lg text-[8px] " onChange={(e)=>{setSearch(e.target.value); if(location.pathname!=="/categories"){navigate("/categories")}}} />
      </div>
      <div onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer sm:p-2 rounded-full hover:bg-gray-200 transition" >
        { darkMode ? (<FaSun className="text-yellow-400" />) : (<FaMoon className="text-gray-700 md:text-xl text-xs" />) }
      </div>
    </nav>
    
  )
 }

 export default Navbar