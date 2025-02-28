const API_LINK="http://localhost:8080/products"

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

