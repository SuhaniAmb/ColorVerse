import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import PaletteDetails from "./pages/PaletteDetails"
// import Palettes from "./data/palettes"
import Favorites from "./pages/Favorites"
import Navbar from "./componants/Navbar"
import { useState } from "react"
import Footer from "./componants/Footer"



function App() {

  const [darkMode,setDarkMode]=useState(JSON.parse(localStorage.getItem("darkMode")) || false)

  const toggleDarkMode = () => {
  const newMode = !darkMode;
  setDarkMode(newMode);
  localStorage.setItem("darkMode", JSON.stringify(newMode));
}

  const [search, setSearch]=useState("")

  return (
    <div className={darkMode ? "dark min-h-screen bg-gray-900 flex flex-col" : "min-h-screen bg-gray-50 flex flex-col"}>
    <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} search={search} setSearch={setSearch} />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/categories" element={<Categories search={search} />} />
      <Route path="/palettedetails/:name" element={<PaletteDetails/>} />
      {/* <Route path="/palette" element={<Palettes/>} /> */}
      <Route path="/favorites" element={<Favorites/>} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App
