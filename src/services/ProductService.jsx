const API_LINK="http://localhost:8080/products"
// To add product
export const addProduct=async (product)=>{

   const response= await fetch(API_LINK,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(product)
    })

   console.log(response.status)

   const data=await response.json()

   return data;
    
}

// To fetch all products
export const fetchProducts=async ()=>{
         const response= await fetch(API_LINK);
         const data=await response.json();
         return data["_embedded"]["products"]
}

// fetch products (productname :ASC)

export const fetchProductsByProductNameAsc=async ()=>{

   const reponse=await fetch(API_LINK+"/search/findByOrderByProductNameAsc");
   const data=await reponse.json();
   return data["_embedded"]["products"]

}

// fetch products (productname :Desc)

export const fetchProductsByProductNameDesc=async ()=>{

   const reponse=await fetch(API_LINK+"/search/findByOrderByProductNameDesc");
   const data=await reponse.json();
   return data["_embedded"]["products"];

}