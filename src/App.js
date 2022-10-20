import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Fruits from "./pages/FruitListing";
import Fruit from "./pages/IndividualFruit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Fruits />,
  },
  {
    path: "/fruit/:id",
    element: <Fruit />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
