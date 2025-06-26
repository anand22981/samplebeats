import React from "react";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import Sample from "./pages/sample";
import ContactUs from "./pages/contactUs";
import Blog from "./pages/blog";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/Sample",
        element: <Sample/>,
      },
      {
        path: "/ContactUs",
        element: <ContactUs/>,
      },

      {
        path: "/Blog",
        element: <Blog/>,
      },

    ],
  },
]);

function App() {
  return (
     <RouterProvider router = {appRouter}/>
  );
}



export default App;
