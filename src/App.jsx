import Deals1 from "./components/best deals/Deals1"
import Deals2 from "./components/best deals/Deals2"
import Client from "./components/client card/Client"
import Hero from "./components/home/Hero"
import Navbar from "./components/navbar/Navbar"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
// import ProductDetails from "./components/product details page/Product_dtls"
import Product_dtls from "./components/product details page/Product_dtls"


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
       <Deals1/>
       <Deals2/>
       <Product_dtls/>
      </Router>   
     
    </div>
  )
}

export default App
