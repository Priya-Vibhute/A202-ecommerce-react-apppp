import React from 'react'
import logo from '../../images/icon-image-not-available.svg';
import { useNavigate } from 'react-router-dom'
import UpdateForm from './UpdateForm';
function ProductItem({ productId, productName, productDescription, productPrice,refreshProducts }) {
  const navigate = useNavigate();

  return (

    <div class="col" >

      <div class="card">
        <img src={logo} class="card-img-top" alt="..." onClick={() => { navigate(`/products/${productId}`) }}/>
        <div class="card-body">
          <h5 class="card-title">{productName}</h5>
          <p class="card-text">{productDescription}</p>
          <p class="card-text">Price {productPrice}</p>


          <button type="button" class="btn btn-success" data-bs-toggle="modal" 
          data-bs-target={`#update-model-${productId}`}>
            Update
          </button>
          

          <button className='btn btn-danger ms-2'>Delete</button>

          <UpdateForm  productId={productId} 
                       productName={productName} 
                       productDescription={productDescription}
                       productPrice={productPrice}
                       refreshProducts={refreshProducts}
                       />
                       


        </div>
      </div>
    </div>
  )
}

export default ProductItem