import { useParams } from "react-router-dom";
import { categories } from "../data/Palettes.jsx";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";


function PaletteDetails() {

    const { name } = useParams()
    const [copied,setCopied]=useState(null)
    const [favorites,setFavorites]=useState(JSON.parse(localStorage.getItem("favorites")) || [])


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



    const palette = categories.find((item) => item.name === name)
    if (!palette) {
        return <h1>Palette Not Found</h1>
    }

    return (
        <div className=" min-h-screen bg-slate-50 dark:bg-gray-900 p-5 " >
            <h1 className="text-3xl text-gary-900 dark:text-white font-bold mb-5">{palette.name} Palette</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 ">{palette.colors.map((item, index) => (
                <div key={item.code} className="text-end " >
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
            ))}</div>
        </div>
    )
}
export default PaletteDetails