import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Order from './pages/Order/Order';
import Contact from './pages/Contact/Contact';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
