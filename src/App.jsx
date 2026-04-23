import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './pages/Home';
import Translator from './pages/Translator';
import Layout from './components/Layout';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> },
      { path: "/translator", element: <Translator /> },]
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ]);

  return (
    <>
      <div className='bg-[#060E20] min-h-screen'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
