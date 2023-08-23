import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import theme from "./styles/themes.js";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Submenu from "./components/Submenu.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Gig from "./pages/Gig.jsx";
import MyGigs from "./pages/MyGigs.jsx";
import Orders from "./pages/Orders.jsx";
import Gigs from "./pages/Gigs.jsx";
import Add from "./pages/Add.jsx";
import Login from "./pages/Login.jsx";
import Message from "./pages/Message.jsx";
import Messages from "./pages/Messages.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ActivateUser from "./pages/ActivateUser.jsx";
import PutNewPassword from "./pages/PutNewPassword.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Pay from "./pages/Pay.jsx";
import Success from "./pages/Success.jsx";

const queryClient = new QueryClient();

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Submenu />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
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
        path: "/gigs",
        element: <Gigs />,
      },
      {
        path: "/myGigs",
        element: <MyGigs />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/message/:id",
        element: <Message />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/gig/:id",
        element: <Gig />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/activate",
        element: <ActivateUser />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/putNewPassword",
        element: <PutNewPassword />,
      },
      {
        path: "/pay/:id",
        element: <Pay />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
        <ToastContainer position="top-right" autoClose={5000} theme="dark" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
