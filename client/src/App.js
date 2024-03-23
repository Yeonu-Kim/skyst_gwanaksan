import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { NavBar, Footer } from './page/common/NavBar';
import { Keyword } from './page/keyword/Keyword';
import './page/common/Global.css'; // Import the CSS file

const router = createBrowserRouter([
  {
    path: '/',
    element: (
    <>
      <NavBar />
      <div>Main Page</div>
    </>
    )
  },
  {
    path: '/face',
    element: (
      <>
        <NavBar />
        <div>Face</div>
      </>
      )
  },
  {
    path: '/keyword',
    element: (
      <>
        <NavBar />
        <Keyword />
      </>
      )
  },
  {
    path: '/result',
    element: (
      <>
        <NavBar />
        <div>Result</div>
      </>
      )
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;