import React, { useState } from 'react'
import { addProduct } from '../../services/ProductService';
import { ToastContainer, toast } from 'react-toastify';

function ProductForm() {

   const[formData,setFormData]= useState({
        productName:"",
        productDescription:"",
        productPrice:""
    })


    const handleChange=(e)=>{
           let inputBoxName=e.target.name;
           let inputBoxValue=e.target.value;
           setFormData({...formData,[inputBoxName]:inputBoxValue})
    }


    const handleSubmit=(e)=>{
      e.preventDefault();

      addProduct(formData)
      toast.success("Product added successfully")

      console.log("form Submitted",formData)

      setFormData({
        productName:"",
        productDescription:"",
        productPrice:""
    })
    }
   


    return (
        <div className='container mx-5 mt-5 p-3 border border-2 border-dark'>
            {/* ============(Form for adding Product)==============*/}

            <form action="" onSubmit={handleSubmit}>
                <h3 className='bg-dark text-center p-2 text-white'>Add Product</h3>
                {/* Product name */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Product name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    value={formData.productName} onChange={handleChange} name='productName'/>
                </div>


                 {/* Product Description */}
                 <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Product Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    value={formData.productDescription} onChange={handleChange} name='productDescription'/>
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


            <ToastContainer/>

            {/* ==================================================== */}
        </div>
    )
}

export default ProductForm