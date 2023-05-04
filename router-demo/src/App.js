import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductsPage';
import RootLayout from './Pages/RootLayout';
import ProductDetails from './Pages/ProductsDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <p style={{ textAlign: 'center' }}>Something went wrong</p>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'products',
        element: <ProductPage />
      },
      {
        path: 'products/:id',
        element: <ProductDetails />
      }
    ]
  },

])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
