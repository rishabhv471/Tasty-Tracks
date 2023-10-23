import { Provider } from "react-redux";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import store from "./utils/store";
import Footer from "./Components/Footer";
import React, { Component }  from 'react';
import React from 'react'
import ReactDOM from 'react-dom'

 

const App = ()=>{

  
//hussain naseed!!
  return (
    
    <Provider store={store}>
    <div >
  
  <Header  />
  <Outlet />
 
  </div>
  
  

  </Provider>
    
  );

  }
export default App;



