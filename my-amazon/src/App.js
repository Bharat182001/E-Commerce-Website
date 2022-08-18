import React, { useEffect } from "react";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Footer from "./components/Footer/Footer";
import Payment from "./components/Payment/Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51JyWUeSCRZD3PReJMOpFQ100npAut23ob7rvmB02YpY4XzIMkwak4C5ATA8U1KI1wHFKDXXoEiSj6wbqolxefOYY00P0MgEsAA");

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log("user: ", authUser);

      if(authUser){
        // user logged in/ or was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])     // will only run once when the app component loads

  return (
    <Router>
      <div className="App">
      <Header />  
        <Switch>
          
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Home />
            <Footer />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
