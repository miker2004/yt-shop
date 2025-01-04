import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Spinner from './components/Spinner';

const HomePageLazy = lazy(() => import('./pages/HomePage'));
const CartLazy = lazy(() => import('./pages/Cart'));
const AccountLazy = lazy(() => import('./pages/Account'));
const ProductsLazy = lazy(() => import('./pages/Products'));
const FullProductPage= lazy(() => import('./components/products/FullProductPage'));
const NotFoundLazy = lazy(() => import('./components/NotFound'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path='/' element={<HomePageLazy />} />
            <Route path='cart' element={<CartLazy />} />
            <Route path='account' element={<AccountLazy />} />
            <Route path='products' element={<ProductsLazy />} />
            <Route path='*' element={<NotFoundLazy />} />
            <Route path='/products/id' element={<FullProductPage />}/>
          </Routes>
        </Suspense>
        <Navigation />
      </Router>
    </>
  );
}

export default App;
