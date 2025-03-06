import React from 'react'
import logo from '../../images/icon-image-not-available.svg';
import { useNavigate } from 'react-router-dom'
function ProductItem({productId,productName, productDescription,productPrice}) {
 
  const navigate=useNavigate();

  return (
    
    <div class="col" onClick={()=>{navigate(`/products/${productId}`)}}>
    
    <div class="card">
      <img src={logo} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{productName}</h5>
        <p class="card-text">{productDescription}</p>
        <p class="card-text">Price {productPrice}</p>

      </div>
    </div>
  </div>
  )
}

export default ProductItem