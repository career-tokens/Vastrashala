import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import CartMenu from "./scenes/global/CartMenu";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";

import { useStytchUser } from "@stytch/react";//for login
import Profile from "./scenes/login/Profile";
import Login from "./scenes/login/Login";
import UserAccount from "./scenes/userAccount/UserAccount";
import AdminPanel from "./scenes/adminPanel/AdminPanel";
import AccessDeniedComponent from "./scenes/adminPanel/AccessDenied";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {

  const { user } = useStytchUser();
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<>{user ? <Home /> : <Login />}</>} />
          <Route path="/useraccount" element={<>{user ? <UserAccount /> : <Login />}</>} />
          <Route path="/adminpanel" element={<>{user ?user.emails[0].email==="heellomeelo@gmail.com"? <AdminPanel /> :<AccessDeniedComponent/>: <Login />}</>} />
          <Route path="item/:itemId" element={<>{user ? <ItemDetails /> : <Login/>}</>} />
          <Route path="checkout" element={<>{user ? <Checkout/> : <Login/>}</>} />
          <Route path="checkout/success" element={<>{user ? <Confirmation/>: <Login/>}</>} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;