import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import EditNote from "./features/notes/EditNote";
import NewNote from "./features/notes/NewNote";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import Prefetch from "./features/auth/Prefetch";
import Register from "./public/Register";
import Home from "./public/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Public />,
        children: [
          { index: true, Component: () => <Home /> },
          { path: "register", element: <Register /> },
          { path: "login", element: <Login /> },
        ],
      },

      { path: "login", Component: Login },

      {
        element: <Prefetch />,
        children: [
          {
            path: "dash/",
            element: <DashLayout />,
            children: [
              { index: true, Component: () => <Welcome /> },
              {
                path: "users/",
                children: [
                  { index: true, Component: () => <UsersList /> },
                  { path: ":id", element: <EditUser /> },
                  { path: "new", element: <NewUserForm /> },
                ],
              },
              {
                path: "notes/",
                children: [
                  { index: true, Component: () => <NotesList /> },
                  { path: ":id", element: <EditNote /> },
                  { path: "new", element: <NewNote /> },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
