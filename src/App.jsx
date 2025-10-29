import Deals1 from "./components/best deals/Deals1"
import Deals2 from "./components/best deals/Deals2"
import Client from "./components/client card/Client"
import Hero from "./components/home/Hero"
import Navbar from "./components/navbar/Navbar"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
// import ProductDetails from "./components/product details page/Product_dtls"
import Product_dtls from "./components/product details page/Product_dtls"
import MenFashion from "./components/page/MenFashion"
import WomenFashion from "./components/page/WomenFashion"
import GymFashion from "./components/page/GymFashion"
import KitchenTool from "./components/page/KitchenTool"
import KidsToy from "./components/page/KidsToy"
import CartPage from "./components/page/CartPage"
import Shoes from "./components/page/Shoes"
import Beauty from "./components/page/Beauty"
import Client2 from "./components/client card2/Client2"
import Mobile from "./components/page/Mobile"
import Laptop from "./components/page/Laptop"
import Login from "./components/page/Login"
import SignUp from "./components/page/SignUp"
import Vanity from "./components/page/Vanity"
import Electronic from './components/page/Electronic'
import Deals3 from "./components/best deals/Deals3"
import Deals4 from "./components/best deals/Deals4"
import Chair from "./components/page/Chair"
import Footer from "./components/footer/Footer"
import PaymentPage from "./components/page/PaymentPage"
import OrderPage from "./components/page/OrderPage"



function App() {


  return (
    <div className="App">  
    <Router>
       <Navbar />
       <Routes>
        <Route  
        path="/" 
        element={
          <>
        <Hero />
       <Client/>
       <Deals1/>
       <Deals2/>
        <Client2/>
         <Deals3/>
         <Deals4/>
         <Footer/>
       </>
        } />
        <Route  path="/sell" element="" />
        <Route  path="/fresh" element="" />
        <Route  path="/bestsellers" element="" />
        <Route  path="/todaysdeal" element="" />
        <Route  path="/mobile" element={<Mobile/>}/>
        <Route  path="/vanity" element={<Vanity/>}/>
        <Route  path="/customer" element="" />
        <Route  path="/fashion" element="" />
        <Route  path="/electronic" element={<Electronic/>} />
        <Route  path="/releases" element="" />
        <Route  path="/book" element="" />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/signup" element={<SignUp/>} />
        <Route  path="/returnorder" element="" />
        <Route  path="/cart" element={<CartPage/>} />
        <Route  path="/item/:id" element={<Product_dtls/>} />
        <Route  path="/menfashion" element={<MenFashion/>} />
        <Route  path="/Womenfashion" element={<WomenFashion/>} />
        <Route  path="/gymfashion" element={<GymFashion/>} />
        <Route  path="/kidstoy" element={<KidsToy/>} />
        <Route  path="/kittools" element={<KitchenTool/>} />
        <Route  path="/shoes" element={<Shoes/>} />
        <Route  path="/beauty" element={<Beauty/>} />
        <Route  path="/laptop" element={<Laptop/>} />
        <Route  path="/chair" element={<Chair/>} />
        <Route  path="/payment" element={<PaymentPage/>} />
        <Route  path="/order" element={<OrderPage/>} />
       
       </Routes>
      
       {/* <Product_dtls/> */}
      </Router>   
     
    </div>
  )
}

export default App
