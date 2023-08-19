import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Order from './pages/Order/Order';
import Contact from './pages/Contact/Contact';
import ReviewOrder from './pages/ReviewOrder/ReviewOrder';
import Checkout from './pages/Checkout/Checkout';
//import { AppProvider } from './context/appContext';
import './App.css'

function App() {

  const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order'))|| {})
    console.log(order)
  
  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(order))
}, [order])

  return (
    <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/order' element={<Order order={order} setOrder={setOrder}/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/order/review' element={<ReviewOrder order={order} setOrder={setOrder}/>}></Route>
          <Route path='/order/checkout' element={<Checkout/>}></Route>
        </Routes>
    </Router>
  )
}

export default App
