const API_LINK="http://localhost:8080/category"

export const fetchCategories=async ()=>{
  
   const response=await fetch(API_LINK);
   const data=await response.json()
   return data["_embedded"]["categories"]

}