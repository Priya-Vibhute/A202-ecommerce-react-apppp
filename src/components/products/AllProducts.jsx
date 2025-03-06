import React, { useEffect, useState } from 'react'
import { fetchProducts, fetchProductsByProductNameAsc, fetchProductsByProductNameDesc } from '../../services/ProductService'
import ProductItem from './ProductItem'
import { fetchCategories, fetchProductByCategory } from '../../services/CategoryService'

function AllProducts() {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    //  To fetch all products
    const getProducts = async () => {
        setProducts(await fetchProducts())
    }


    // To fetch all categories
    const getCategories = async () => {
        setCategories(await fetchCategories())
    }

    //To fetch product based on category
    const getProductByCategory = async (categoryId) => {
        setProducts(await fetchProductByCategory(categoryId))
    }

    useEffect(() => {
        getProducts();
        getCategories();
    }, [])

    // To sort data
    const sort = async (action) => {

        switch (action) {
            case "ProductName_ASC":
                setProducts(await fetchProductsByProductNameAsc());
                break;

            case "ProductName_DESC":
                setProducts(await fetchProductsByProductNameDesc());
                break;

        }
    }

    return (
        <div className='mt-2'>




            <div class="mx-2">
                <div class="row">
                    <div class="col-2">
                        {/* Column 1 */}
                        <p>Total Products {products.length}</p>
                        <hr />

                        <label for="exampleInputEmail1" class="form-label">Search</label>

                        <input type="text" class="form-control"
                            onChange={(e) => { setSearchQuery(e.target.value) }}
                            id="exampleInputEmail1" aria-describedby="emailHelp" />

                        <hr />
                        <ul class="list-group">
                            <li class="list-group-item" onClick={() => { sort("ProductName_ASC") }}>A-Z</li>
                            <li class="list-group-item" onClick={() => { sort("ProductName_DESC") }}>Z-A</li>
                            <li class="list-group-item" onClick={() => { sort("Low_To_High") }}>Low to High</li>
                            <li class="list-group-item" onClick={() => { sort("High_To_Low") }}>High to Low</li>
                        </ul>

                        <hr />

                        {/* fetching categories  */}
                        <ul class="list-group">

                            {categories.map((category) => {

                                return <li class="list-group-item"
                                    onClick={() => { getProductByCategory(category.categoryId) }}>
                                    {category.categoryName}
                                </li>

                            })}

                        </ul>



                    </div>
                    <div class="col">
                        {/* All Products :Start */}
                        <div class="row row-cols-1 row-cols-md-3 g-2">

                            {products
                                .filter((product) =>
                                    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
                                )
                                .map((product) => {
                                    return <ProductItem productId={product.productId}
                                        productName={product.productName}
                                        productDescription={product.productDescription}
                                        productPrice={product.productPrice} 
                                        refreshProducts={getProducts}/>
                                })}


                        </div>

                        {/* All Products-end */}
                    </div>

                </div>
            </div>






        </div>
    )
}

export default AllProducts