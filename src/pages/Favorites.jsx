import { categories } from "../data/palettes"
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

function Favorites(){

    const [copied,setCopied]=useState(null)
    const [favorites,setFavorites]=useState(JSON.parse(localStorage.getItem("favorites")) || [])


    const favoriteColors=[ ...new Map(
        categories.flatMap((category)=>category.colors).filter((color)=>favorites.includes(color.code)).map((color)=>[color.code,color])).values()]

    
    const copyColor=(code,index)=>{
        navigator.clipboard.writeText(code)
        setCopied(index)

        setTimeout(() => {
            setCopied(null)
        }, 500);
    }



    const toggleFavorite=(code)=>{
        let updatedFavorites 
        if(favorites.includes(code))
        {
            updatedFavorites=favorites.filter((item)=>item!==code)
        }
        else
        {
            updatedFavorites=[...favorites,code]
        }
        setFavorites(updatedFavorites)

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    }         

    return(
        <div className=" bg-slate-50 dark:bg-gray-900 px-6 md:px-10 " >
            <h1 className="text-3xl text-gray-900 dark:text-white font-bold mb-5">Favorites Colors</h1>

            { favoriteColors.length===0 ? ( <p className="text-gray-500 dark:text-white text-center my-40">No favorite colors yet ❤️</p> ):(
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pb-10">
                { favoriteColors.map((item,index)=>(
                    <div key={item.code} >
                        <div style={{ background: item.code }} onClick={()=>copyColor(item.code,index)} className="lg:h-36 h-30 shadow-md rounded-lg cursor-pointer hover:scale-95 active:scale-90 transition duration-300 relative group " >
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md px-3 py-1 text-white font-semibold opacity-0 group-hover:opacity-100 transition">
                                {copied===index ? <>Copied ! <br/> <span className="text-sm">{item.code}</span> </>:<>Copy</>}
                            </span>
                            <div className=" flex justify-between p-2 mt-2  " >
                            <p className=" font-semibold text-gray-800 dark:text-white" >{item.name}</p>
                            <div onClick={(e)=>{e.stopPropagation(); toggleFavorite(item.code)}} >{favorites.includes(item.code)?(<FaHeart size={20} className="text-red-500 hover:scale-110 transition cursor-pointer" />):(<FaRegHeart size={20} className=" text-gray-400 hover:text-red-500 cursor-pointer transition " />)}</div>
                        </div>
                        </div>
                    </div>
                )) }
            </div>
            ) }
        </div>
    )
}
export default Favorites
