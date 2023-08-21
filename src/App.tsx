import React, { useEffect, useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import ProductList from './components/ProductList';
import { IProduct } from './models';


function App() {
  let initialProducts: IProduct[] = [];
  const localStorageProducts = localStorage.getItem('products');
  
  if (localStorageProducts) {
    initialProducts = JSON.parse(localStorageProducts);
  };

  const [products, setProducts] = useState(initialProducts);
  
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <div className="App">
      <div className="container">
        <h1 className='header'>Список продуктов</h1>
        <InputForm products={products} setProducts={setProducts} />
        <ProductList products={products} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default App;