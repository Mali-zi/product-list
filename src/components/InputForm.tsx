import React, { useState } from 'react';
import { Props } from '../models';

export default function InputForm({products, setProducts}: Props) {
  const [product, setProduct] = useState<string>('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (product.trim()) {
      setProducts(
        [
          {
            id: Date.now(),
            name: product,
            checked: false,
          },
          ...products
        ]
      );
      setProduct('');
    };
    event.preventDefault();
  };
  
  return (
    <form
      aria-label='new product'
      className='inputForm' 
      onSubmit={event => handleSubmit(event)}
    >
      <input 
        type='text' 
        placeholder='Введите продукт'
        className='inputPlace'
        value={product} 
        onChange={event => setProduct(event.target.value)}
      />
      <button 
        type='submit' 
        name='add'
        className='add'
      >
        Добавить
      </button>
    </form>
  )
}