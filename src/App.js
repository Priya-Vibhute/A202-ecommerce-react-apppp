import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './components/HomePage';
import Template from './components/Template';
import ProductForm from './components/products/ProductForm';



// Creating routes
const routes=createBrowserRouter([
  {
    path:"",
    element:<Template/>,
    children:[
      {
        path:"",
        element:<HomePage/>
      },
      {
        path:"create-product",
        element:<ProductForm/>
      }
    ]
  }
])



function App() {
  return (
    <div className="">
        <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
