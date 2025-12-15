import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home";
import Layout from "./components/layout";
import SelectedWorks from "./pages/selected-works";
import GeneralInfo from "./pages/general-info";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
         {
          path: "/general-info",
          element: <GeneralInfo />,
        },
         {
          path: "/selected-works",
          element: <SelectedWorks />,
        },
      ],
    },
  ]);

  return  <RouterProvider router={router} />;
}

export default App;
