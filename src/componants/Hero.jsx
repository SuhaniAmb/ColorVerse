import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


function Hero(){

    const navigate=useNavigate()

    const palettes=[{name:"Sunset",colors:["bg-orange-500","bg-yellow-400","bg-red-500","bg-pink-500","bg-purple-600","bg-indigo-700","bg-amber-500","bg-fuchsia-500"]}, 
                    {name:"Ocean",colors:["bg-blue-600","bg-cyan-500","bg-sky-400","bg-teal-500","bg-emerald-500","bg-green-600","bg-lime-600","bg-sky-600"]},
                    {name:"Nature",colors:["bg-green-700","bg-lime-500","bg-yellow-500","bg-amber-600","bg-stone-500","bg-yellow-300","bg-emerald-600","bg-orange-400"]}]
        

    const [activePalettes, setActivePalettes]=useState(palettes)

    const suffleColors=(colors)=>{
        return[...colors].sort(()=>Math.random()-0.5)
    }

    useEffect(()=>{
        const interval=setInterval(()=>{

            setActivePalettes(prev=>
                prev.map(palette=>({
                    ...palette,
                    colors:suffleColors(palette.colors)
                }))
            )

        },1000)

        return()=>clearInterval(interval)
    },[])

    return(
        <section className=" flex flex-col lg:flex-row justify-between items-center bg-gray-50 dark:bg-gray-900 px-5 py-40 gap-10">
            <div className="flex flex-col justify-center items-center w-full lg:w-3/5 leading-tight lg:space-y-6 space-y-10">
                <h1 className=" font-bold xl:text-5xl md:text-3xl text-xl text-gray-900  dark:text-white leading-tight " >Discover Beautiful Color Palettes</h1>
                <p className=" font-bold xl:text-xl md:text-md text-xs text-gray-600 dark:text-white " >Find and explore amazing color combinations for your designs.</p>
                <button className=" md:text-lg text-xs bg-purple-600 text-white lg:px-8 px-5 py-3 rounded-full font-medium hover:bg-purple-700 transition-all hover:scale-105 active:scale-95 duration-300 hover:border-purple-700 hover:shadow-lg cursor-pointer " onClick={()=>navigate("/categories")} >Explore Palettes</button>
            </div>
            <div className="w-full lg:w-2/5 flex justify-center">
            <div className="shadow-2xl rounded-3xl bg-white dark:bg-gray-800 p-5 border border-gray-100 w-full max-w-lg">
                <h2 className=" md:text-2xl text-xl font-bold text-gray-800 dark:text-white " >Trending Palettes</h2>
                <p className=" text-gray-500 dark:text-white mt-2 md:text-lg sm:text-sm text-xs " >Explore beautiful color combinations</p>
                <div className=" space-y-4 mt-5 " >
                    <div>
                        <p className=" md:text-sm text-xs font-medium text-gray-500 dark:text-white mb-2 " >Sunset</p>
                        <div className="flex gap-3" >
                            {activePalettes[0].colors.map((item,index)=>(
                                <div key={index} className={` md:h-10 sm:h-7 h-6 w-10 md:rounded-xl rounded-lg  ${item}  animate-float`} style={{animationDelay:`${index * 0.2}s`}} ></div> 
                            ))}
                        </div>
                </div>
                <div>
                    <p className=" md:text-sm text-xs font-medium text-gray-500 dark:text-white mb-2 " >Ocean</p>                
                    <div className="flex gap-3" >
                        {activePalettes[1].colors.map((item,index)=>(
                            <div key={index} className={` md:h-10 sm:h-7 h-6 w-10 md:rounded-xl rounded-lg ${item} animate-float`} style={{animationDelay:`${index * 0.3}s`}} ></div>
                        ))}
                    </div>
                </div>
                <div>
                    <p className=" md:text-sm text-xs font-medium text-gray-500 dark:text-white mb-2 " >Nature</p>                
                    <div className="flex gap-3" >
                        {activePalettes[2].colors.map((item,index)=>(
                            <div key={index} className={` md:h-10 sm:h-7 h-6 w-10 md:rounded-xl rounded-lg ${item} animate-float`} style={{animationDelay:`${index * 0.4}s`}} ></div>
                        ))}
                    </div>
                </div>
                </div>

            </div>
            </div>

        </section>
    )
}
export default Hero