import React , {createContext, useState} from 'react';
import { Route, Switch } from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import AllOrders from './Components/Pages/All orders/AllOrders';
import Home from './Components/Pages/Home/Home/Home';
import Register from './Components/Pages/Login/Register/Register';
import Login from './Components/Pages/Login/Login/Login';
import MyOrders from './Components/Pages/My orders/MyOrders';
import NotFound from './Components/Pages/NotFound/NotFound';
import PlaceOrder from './Components/Pages/PlaceOrder/PlaceOrder';
import AuthProvider from './Components/Context/AuthProvider';
import Shipping from './Components/Pages/Shipping/Shipping';
import PrivateRoute from './Components/Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Components/Pages/AddService/AddService';
import Footer from './Components/Footer/Footer';



function App() {


  return (
    <div className="App">
        <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/manage-all-orders">
              <AllOrders></AllOrders>
            </Route>
            <Route path="/add-service">
              <AddService></AddService>
            </Route>
            <PrivateRoute path="/shipping/:id">
              <Shipping></Shipping>
            </PrivateRoute>
            <Route path="/my-orders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/place-order">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
