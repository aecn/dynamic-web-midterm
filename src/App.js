import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Countries from "./pages/CountriesList";
import Country from "./pages/IndividualCountry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Countries />,
  },
  {
    path: "/country/:id",
    element: <Country />,
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
