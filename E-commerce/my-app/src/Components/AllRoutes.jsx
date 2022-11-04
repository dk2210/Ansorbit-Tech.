import { Routes, Route } from 'react-router-dom';
import ProductCart from './ProductCart';
import Products from './Products';

const AllRoutes = () => {

    return(
            <Routes>
                <Route path='/' element={<Products />}></Route>
                <Route path='/men'></Route>
                <Route path='/women'></Route>
                <Route path='/cart' element={<ProductCart />}></Route>
            </Routes>
    )
}

export default AllRoutes ;