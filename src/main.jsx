import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import Homepage from './components/Homepage';
import ProductDetails from './components/ProductDetails';
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
import TitleWrapper from './components/TitleWrapper';
import AboutUs from './components/AboutUs';
import NotFoundPage from './components/NotFoundPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: (
          <TitleWrapper title="Gadgets | Gadget Heaven">
            <Homepage />
          </TitleWrapper>
        ),
        children: [
          {
            path: '',
            element: (
              <TitleWrapper title="All Products | Gadget Heaven">
                <AllProducts />
              </TitleWrapper>
            ),
            loader: () => fetch('/products.json').then((res) => res.json())
          },
          {
            path: "laptops",
            element: (
              <TitleWrapper title="Laptops | Gadget Heaven">
                <Laptops />
              </TitleWrapper>
            ),
            loader: () => fetch('/products.json').then((res) => res.json())
          },
          {
            path: "phones",
            element: (
              <TitleWrapper title="Phones | Gadget Heaven">
                <Phones />
              </TitleWrapper>
            ),
            loader: () => fetch('/products.json').then((res) => res.json())
          },
          {
            path: "accessories",
            element: (
              <TitleWrapper title="Accessories | Gadget Heaven">
                <Accessories />
              </TitleWrapper>
            ),
            loader: () => fetch('/products.json').then((res) => res.json())
          },
          {
            path: "watches",
            element: (
              <TitleWrapper title="Watches | Gadget Heaven">
                <Watches />
              </TitleWrapper>
            ),
            loader: () => fetch('/products.json').then((res) => res.json())
          },
          {
            path: "macbooks",
            element: (
              <TitleWrapper title="MacBooks | Gadget Heaven">
                <MacBooks />
              </TitleWrapper>
            ),
            loader: () => fetch('/products.json').then((res) => res.json())
          },
          {
            path: "iphones",
            element: (
              <TitleWrapper title="iPhones | Gadget Heaven">
                <IPhones />
              </TitleWrapper>
            ),
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
        path: "product/:productId",
        element: (
          <TitleWrapper title="Product Details | Gadget Heaven">
            <ProductDetails />
          </TitleWrapper>
        ),
        loader: async ({ params }) => {
          const response = await fetch('/products.json');
          const data = await response.json();

          if (!Array.isArray(data.products)) {
            throw new Error("Products data is not an array");
          }

          const product = data.products.find(p => p.product_id === params.productId);

          if (!product) {
            throw new Error("Product not found");
          }

          return product;
        }
      }
    ]
  },
  {
    path: '/rot',
    element: <Rot />,
    children: [
      {
        path: '/rot/dash',
        element: (
          <TitleWrapper title="Dashboard | Gadget Heaven">
            <Dashboard />
          </TitleWrapper>
        )
      },{
        path: '/rot/about',
        element: (
          <TitleWrapper title="AboutUs | Gadget Heaven">
            <AboutUs></AboutUs>
          </TitleWrapper>
        )
      }
    ]
  },
  {
    path: '/r',
    element: <R />,
    children: [
      {
        path: '/r/stat',
        element: (
          <TitleWrapper title="Statistics | Gadget Heaven">
            <Stat />
          </TitleWrapper>
        )
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
