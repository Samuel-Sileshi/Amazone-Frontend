import "./App.css";
import Checkout from "./Components/Checkout/Checkout";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import { useStateValue } from './Components/StateProvider/StateProvider';
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";


const promise = loadStripe(
  "pk_test_51NbswxAkCOp7VfH7HkB6JNYhBDeMWPfUw3kxrXIq0cUmVCtIYe1ES2Pgjltxbq9uOdZd1U93b5a4DWQbxBSI8uUU00UTlRvB38"
)

  function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
    }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<><Login/></>} />
          <Route path="/" element={<><Header/><Home/></>} />
          <Route path="/checkout" element={<><Header/><Checkout/></>} />
          <Route path="/payment" element={<><Elements stripe={promise}><Payment/></Elements></>} />
          <Route path="/orders" element={<><Header/><Orders/></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
