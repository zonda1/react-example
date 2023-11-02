import { Navigate } from "react-router-dom";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import PostById from "../pages/PostById/PostById";
import { Posts } from "../pages/Posts/Posts";

export const privateRoutes = [
  { path: "/posts", element: <Posts /> },
  { path: "/about", element: <About /> },
  { path: "/post/:id", element: <PostById /> },
  { path: "*", element: <Navigate to="/posts" /> },
  // { path: "*", element: <Error /> },
];
export const publicRoutes = [
  { path: "/login", element: <Login /> },
  // { path: "*", element: <Login /> },
  { path: "*", element: <Navigate to="/login" /> },
  // { path: "*", element: <Error /> },
];
