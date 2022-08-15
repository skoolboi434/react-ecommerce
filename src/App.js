import './sass/App.scss';
import Products from './components/Products';
import ProductPage from './components/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>App</h1>
        <Routes>
          <Route exact path='/' element={<Products />} />
          <Route exact path='/product/:id' element={<ProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
