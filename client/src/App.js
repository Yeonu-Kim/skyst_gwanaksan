import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import {NavBar,Footer} from './page/common/NavBar';
import Button from './page/common/Button';
import {Title, SubTitle, Paragraph} from './page/common/Title';
import './page/common/Global.css'; // Import the CSS file

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Main Page</div>
  },
  {
    path: '/face',
    element: <div>face</div>,
  },
  {
    path: '/keyword',
    element: <div>keyword</div>
  },
  {
    path: '/result',
    element: <div>result</div>,
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Button/>
    </div>
  );
}

export default App;