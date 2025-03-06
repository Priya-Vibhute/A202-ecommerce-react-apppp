import React, { useState } from 'react'
import { updateProduct } from '../../services/ProductService';


function UpdateForm({productId,productName,productDescription,productPrice,refreshProducts}) {

     const[formData,setFormData]= useState({
            productName:productName,
            productDescription:productDescription,
            productPrice:productPrice
        })
    
    
        const handleChange=(e)=>{
               let inputBoxName=e.target.name;
               let inputBoxValue=e.target.value;
               setFormData({...formData,[inputBoxName]:inputBoxValue})
        }
    
    
        const handleSubmit=async (e)=>{
          e.preventDefault();
          const data=await updateProduct(productId,formData)
          refreshProducts();

        }
    return (


        <div class="modal fade" id={`update-model-${productId}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Update Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        {/* Form for update */}


                        <form action="" onSubmit={handleSubmit}>
                           
                            {/* Product name */}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Product name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formData.productName} onChange={handleChange} name='productName' />
                            </div>


                            {/* Product Description */}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Product Description</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formData.productDescription} onChange={handleChange} name='productDescription' />
                            </div>


                            {/* Product price */}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Product price</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formData.productPrice} onChange={handleChange} name='productPrice' />
                            </div>

                            {/*  */}
                            <button type="submit" className="btn btn-dark">Submit</button>


                        </form>

                        {/* Form :End */}

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UpdateForm