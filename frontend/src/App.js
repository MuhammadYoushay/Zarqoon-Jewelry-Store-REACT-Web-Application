import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Footer from "./components/footer";
import { ThemeProvider } from "styled-components";
import Header from "./components/header";
import NavigationMenu from "./components/navigation";
import HomePage from "./components/banner";

import "react-toastify/dist/ReactToastify.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./slices/authSlice";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "black",
      white: "black",
      black: "black",
      helper: "#8490ff",
      bg: "snow ",
      footer_bg: "seashell ",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "black",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ToastContainer />
        <Header/>
        <NavigationMenu/>
        <HomePage/>
        
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
      <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
