import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Products from './pages/products';
import NavBar from './components/navBar';
import ProductsList from './pages/productsList';
import SingleProduct from './pages/singleProduct';
export default function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} >
            <Route index element={<ProductsList />} />
            <Route path=':id' element={<SingleProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
