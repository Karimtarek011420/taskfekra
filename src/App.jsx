import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "login", element: <Login /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
