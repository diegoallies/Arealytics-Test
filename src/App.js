import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile"
import "./style.scss";

const Layout = () => {
return (
<>
<Navbar />
<Outlet />
<Footer />
</>
);
};

const router = createBrowserRouter([
{
path: "/",
element: <Layout />,
children: [
{
path: "/",
element: <Home />,
},
{
path: "/post/:id",
element: <Single />,
},
{
path: "/profile",
element: <Profile />,
},
],
},
{
path: "/register",
element: <Register />,
},
{
path: "/login",
element: <Login />,
},
]);

function App() {
return (
<div className="app">
<div className="container">
<RouterProvider router={router} />
</div>
</div>
);
}

export default App;