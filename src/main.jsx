import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Order from './pages/Order/Order';
import Contact from './pages/Contact/Contact';
import ReviewOrder from './pages/ReviewOrder/ReviewOrder';
import OrderLocations from './pages/OrderLocations/OrderLocations';

const router = createBrowserRouter([{
  path: '/', 
  element: <App/>,
  children: [
    {
      index: true,
      element: <Home/>
    },
    {
      path: '/menu',
      element: <Menu/>
    },
    {
      path: '/orderlocations/location1',
      element: <Order/>
    },
    {
      path: '/locations',
      element: <Contact/>
    },
    {
      path: '/order/review',
      element: <ReviewOrder/>
    },
    {
      path: '/orderlocations',
      element: <OrderLocations/>
    }
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  // <RouterProvider router={router}/>
  <App/>

)
