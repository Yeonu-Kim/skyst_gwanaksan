import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

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
    </div>
  );
}

export default App;