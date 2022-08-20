import './sass/App.scss';
import Products from './components/Products';
import ProductPage from './components/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNav from './components/MainNav';
import Footer from './components/Footer';
import Hero from './components/reusables/Hero';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='customer-alert'>
          <span>Call 123-456-7890 for awesome savings!</span>
        </div>
        <MainNav />

        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Hero type='home' btnText='Shop Now' borderAngle={true} />
                <Products />
              </>
            }
          />
          <Route exact path='/product/:id' element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
