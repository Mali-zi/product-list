import React from 'react';
import { Props } from '../models';
import { IconDelete } from './IconDelete';

export default function ProductList({products, setProducts}: Props) {
  function handleCheck(id: number) {
    const changeProducts = products.filter(item => item.id !== id);
    let curentProduct = products.find(item => item.id === id);
    if (curentProduct) {
      curentProduct = {
        ...curentProduct,
        checked: !curentProduct.checked,
      };
      if(curentProduct.checked) {
        changeProducts.push(curentProduct)
      } else {
        changeProducts.unshift(curentProduct)
      };
      setProducts(changeProducts);
    };
  };

  function handleDelete(id: number) {
    const changeProducts = products.filter(item => item.id !== id);
    setProducts(changeProducts);
  };

  const productList = products.map(item => {
    return (
      <li 
        key={item.id}
        className={item.checked ? 'product checkedProduct' : 'product'}
      >
        <form 
          aria-label='productForm'
          className='productForm'
        >
          <input 
            type='checkbox'
            title='checkbox'
            className='checkbox'
            checked={item.checked}
            onChange={() => handleCheck(item.id)}
          />
          <p className='textPlace'>{item.name}</p>
          <button
            type='button'
            title='delete'
            className='delete'
            onClick={() => handleDelete(item.id)}
          >
            <IconDelete />
          </button>
        </form>
      </li>
    )
  });

  return (
    <ul className="mylist">
      {productList}
    </ul>
  )
}