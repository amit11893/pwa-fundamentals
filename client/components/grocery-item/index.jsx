// @ts-check

import React from 'react';
import { endpoint as API_ENDPOINT } from '../../utils/api';

import './styles.scss';

function formatPrice(rawPrice) {
  return `$${rawPrice.toFixed(2)}`;
}

const GroceryItem = ({ item, cartStore }) => {
  let itemUrl = `${API_ENDPOINT}${item.imageUrl.substring(1)}`;
  let price = formatPrice(item.price);

  let unit = item.unit;
  let schemaData = {
    '@context' : 'http://schema.org',
    '@type': 'Product',
    'image': 'dell-30in0lcd.jpg',
    'name': 'Dell UltraSharp 30" LCD Monitor',
    'offers': {
      '@type': 'Offer',
      'price': '$1495'
    }
  };

  return (
    <li className='GroceryItem mui-panel'>
      <img className='item-image' src={itemUrl} alt={item.name} />
      <h4 className='item-name'>{item.name}</h4>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <span className="item-price bottom-tile bottom-tile--right">
        {price}
        {unit ? <span className='item-unit'>{unit}</span> : ''}
      </span>
      <button onClick={() => {
        cartStore.addItemToCart(item)
      }} className="add-item-to-cart bottom-tile bottom-tile--left mui-btn mui-btn--accent" >+</button>
    </li>
  )
};

export default GroceryItem;
