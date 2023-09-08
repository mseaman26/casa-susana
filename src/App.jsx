import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Order from './pages/Order/Order';
import Contact from './pages/Contact/Contact';
import ReviewOrder from './pages/ReviewOrder/ReviewOrder';
import Checkout from './pages/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import OrderLocations from './pages/OrderLocations/OrderLocations';
import menuData1 from '../src/assets/menu1.json'
import menuData2 from '../src/assets/menu2.json'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order1'))|| {})
    console.log(order)
  
  const [order2, setOrder2] = useState(JSON.parse(localStorage.getItem('order2'))|| {})
  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(order))
}, [order])

useEffect(() => {
  localStorage.setItem('order2', JSON.stringify(order2))
}, [order2])

  return (
    <Router basename='/'>
        {/* <> */}
        <Header/>
          {/* <Outlet/> */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/menu/location1' element={<Menu menuData={menuData1}/>}></Route>
          <Route path='/menu/location2' element={<Menu menuData={menuData2}/>}></Route>
          <Route path='/orderlocations' element={<OrderLocations order={order} order2={order2} setOrder={setOrder} setOrder2={setOrder2} />}></Route>
          {/* <Route path='/orderlocations/location1' element={<Order order={order} setOrder={setOrder} menuData={menuData1}/>}></Route> */}
          <Route path='/locations' element={<Contact/>}></Route>
          <Route path='/order/review' element={<ReviewOrder order={order} setOrder={setOrder} menuData={menuData1}/>}></Route>
          <Route path='/order/checkout' element={<Checkout/>}></Route>
        </Routes>
        <Footer/>
        {/* </> */}
      </Router>
  )
}

export default App
