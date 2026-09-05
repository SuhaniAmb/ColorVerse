import { useState } from "react";
import Navbar from "../componants/Navbar"
import { useNavigate } from "react-router-dom";
import { categories } from "../data/Palettes.jsx";
import { IoSearch } from "react-icons/io5";

function Categories({search}){
console.log(categories[0]);

    const navigate=useNavigate()

    const filterCategories=categories.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase()))
    
    return(
        <div className=" bg-slate-50 dark:bg-gray-900 py-20 md:px-30 px-6 " >
            <h1 className=" sm:text-4xl text-2xl font-bold text-gray-900 dark:text-white " >Explore Color Palettes</h1>
            <p className="text-gray-500 dark:text-white sm:text-lg text-sm mt-2 mb-20">Browse beautiful palettes organized by color themes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6 gap-10 ">
                { filterCategories.length>0 ? (
                 filterCategories.map((item,index)=>(
                    <div key={index} onClick={()=>navigate(`/palettedetails/${item.name}`)} className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-md hover:-translate-y-1 hover:shadow-2xl border border-gray-200 transition duration-300 cursor-pointer " >
                        <div className="flex justify-between items-center mb-4" >
                        <h2 className="sm:text-xl text-md font-semibold text-gray-800 dark:text-white " >{item.name}</h2>
                         </div>
                        <div className=" grid grid-cols-5 gap-1 " >
                            { item.colors.map((item,index)=>(
                                <div key={index} style={{backgroundColor: item.code }} className=" xl:h-12 sm:h-8 h-12 rounded-md " ></div> 
                            )) }
                        </div>
                    </div>
                ))
                        ) : (
                             <div className="col-span-full flex flex-col items-center justify-center py-20">
      <IoSearch className="text-6xl text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
        No Categories Found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mt-2">
        No category matches "<span className="font-semibold">{search}</span>"
      </p>
    </div>
                        )}

            </div>
        </div>
    )
}
export default Categories