import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "../components/Contact";
import ErrorPage from "../pages/ErrorPage"
import App from "../App";
import About from "../components/About";



const Router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about",
    element: <About/>
  },
]);




export default Router