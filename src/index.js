import React from 'react';
import ReactDOM from 'react-dom/client';
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import App  from './App';
import'./index.css';
import "font-awesome/css/font-awesome.css";
//import NavBar from './NavBar';
//import CustomersMenuList from './CustomersMenuList';


 //var element=<button className="btn btn-success"> hey simon</button>
//  ReactDOM.createRoot(<NavBar/>,document.getElementById('root'));
//  //console.log(element);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   


    
   
   
  </React.StrictMode>
);



