import Client from "./components/client card/Client"
import Hero from "./components/home/Hero"
import Navbar from "./components/navbar/Navbar"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"


function App() {


  return (
    <div className="App">  
    <Router>
       <Navbar />
       <Routes>
        <Route  path="/" element="" />
        <Route  path="/sell" element="" />
        <Route  path="/fresh" element="" />
        <Route  path="/bestsellers" element="" />
        <Route  path="/todaysdeal" element="" />
        <Route  path="/mobile" element="" />
        <Route  path="/customer" element="" />
        <Route  path="/fashion" element="" />
        <Route  path="/electric" element="" />
        <Route  path="/releases" element="" />
        <Route  path="/book" element="" />
        <Route  path="/login" element="" />
        <Route  path="/returnorder" element="" />
        <Route  path="/cart" element="" />
       </Routes>
       <Hero />
       <Client/>
      </Router>   
     
    </div>
  )
}

export default App
