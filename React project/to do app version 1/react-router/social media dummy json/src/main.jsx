import React from "react";
import ReactDOM from "react-dom/client";
import App from "./route/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost, { createPostAction } from "./component/CreatePost.jsx";
import PostList from "./component/LoadingSpinner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
      },
      {
        path: "/",
        element: <PostList />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
