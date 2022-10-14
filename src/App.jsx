import React, { Component } from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import { BrowserRouter, Routes, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import CustomersMenuList from "./CustomersMenuList";
import ShoppingCartList from "./ShoppingCartlist";
import { Route } from "react-router";
import NopageFound from "./NopageFound";
// import { BrowserRouter} from "react-router-dom";
export default class App extends Component {

  render() {
    return (
      //all use <>...</> to declare fragment
      <BrowserRouter>
        <NavBar />

        <Routes>



          {/* <CustomersMenuList/> */}

          {/* <Dashboard></Dashboard> */}
          <Route path="/Login" element={<Login />} exact />
          {/* <Route path="/Login" exact component={Login}/>  */}
          <Route path="/dashboard" element={<Dashboard />} exact />
          <Route path="/customers" element={<CustomersMenuList />} exact />
          <Route path="/cart" element={<ShoppingCartList />} exact />
          <Route path="*" element={<NopageFound />} exact />

        </Routes>
      </BrowserRouter>
    );
  }
}
