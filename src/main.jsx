import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import Homepage from './components/Homepage';
import ProductDetails from './components/ProductDetails'; // Import the ProductDetails component
import AllProducts from './components/AllProducts';
import Laptops from './components/Laptops';
import Accessories from './components/Accessories';
import Watches from './components/Watches';
import MacBooks from './components/MacBooks';
import IPhones from './components/iPhones';
import Phones from './components/Phones';

import Rooot from './components/Rooot';
import Dashboard from './components/Dashboard';
import Rot from './components/Rot';
import R from './components/R';
import Stat from './components/Stat';
import { CartProvider } from './components/provider/CartProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        children: [
          {
            path: '',
            element: <AllProducts />,
            loader: () => fetch('/products.json').then((res) => res.json())
          },
          {
            path: "laptops",
            element: <Laptops />,
            loader: () => fetch('/products.json').then((res) => res.json())
          },
          {
            path: "phones",
            element: <Phones />,
            loader: () => fetch('/products.json').then((res) => res.json())
          },
          {
            path: "accessories",
            element: <Accessories />,
            loader: () => fetch('/products.json').then((res) => res.json())
          },
          {
            path: "watches",
            element: <Watches />,
            loader: () => fetch('/products.json').then((res) => res.json())
          },
          {
            path: "macbooks",
            element: <MacBooks />,
            loader: () => fetch('/products.json').then((res) => res.json())
          },
          {
            path: "iphones",
            element: <IPhones />,
            loader: () => fetch('/products.json').then((res) => res.json())
          },
        ]
      }
    ]
  },
  {
    path: '/pro',
    element: <Rooot />,
    children: [
      {
        // Remove the leading slash from this path
        path: "product/:productId", 
        element: <ProductDetails />,
        loader: async ({ params }) => {
          const response = await fetch('/products.json');
          const data = await response.json(); // Now 'data' contains the entire object, including the 'products' array.
          
          if (!Array.isArray(data.products)) {
            throw new Error("Products data is not an array");
          }
          
          const product = data.products.find(p => p.product_id === params.productId);
          
          if (!product) {
            throw new Error("Product not found");
          }
          
          return product;  // Return the found product
        }
      }
    ]
  },
  {
    path:'/rot',
    element:<Rot></Rot>,
    children:[
      {
        path:'/rot/dash',
        element:<Dashboard></Dashboard>
      }
    ]
  },
  {
    path:'/r',
    element:<R></R>,
    children:[
      {
        path:'/r/stat',
        element:<Stat></Stat>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
