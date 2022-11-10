import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import AddService from "../Pages/Home/Services/AddService";
import Services from "../Pages/Home/Services/Services";
import SingleService from "../Pages/Home/Services/SingleService";
import Login from "../Pages/Login/Login";
import EditReview from "../Pages/MyReviews/EditReview";
import MyReviews from "../Pages/MyReviews/MyReviews";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/allservices"),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <SingleService></SingleService>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(` http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/myreviews/:id",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(` http://localhost:5000/myreviews/${params.id}`),
      },
      {
        path: "/editreview/:id",
        element: (
          <PrivateRoute>
            <EditReview></EditReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(` http://localhost:5000/singlereview/${params.id}`),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/allservices"),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);
