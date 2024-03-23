import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { NavBar, Footer } from './page/common/NavBar';
import { Keyword } from './page/keyword/Keyword';
import { Main } from './page/main/Main';
import './page/common/Global.css'; 
import Result from './page/result/Result';
import { Paragraph, Title } from './page/common/Title';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
    <>
      <NavBar />
      <Main />
      <Footer />
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
        <Result />
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