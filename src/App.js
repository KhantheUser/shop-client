
import Cart from './pages/Cart';
import Home from './pages/Home'
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Success from './pages/Success';
import {useSelector} from 'react-redux'
function App() {
  const {currentUser} = useSelector((state=>state.userReducer))
  
  return (
    // <Home/>
    // <ProductList/>
    // <ProductDetail/>
    // <Register/>
    // <Login/>
    // <Cart/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/products' >
          <Route index element={<ProductList/>}/>
          <Route path=':category' element={<ProductList/>}/>
        </Route> */}
        <Route path='/products' >
          <Route index element={<ProductList/>}/>
          <Route path=':category' element={<ProductList/>}/>
        </Route>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout/success' element={<Success/>}/>
        <Route path='/login' element={ currentUser ? <Navigate to={'/'}/> : <Login/>}/>
        <Route path='/register' element={ currentUser ? <Navigate to={'/'}/> : <Register/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
