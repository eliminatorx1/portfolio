import React from "react";
import  ReactDOM  from "react-dom"; //this will help to connect with our html file
import App from "./App";
import './index.css';
import {createRoot} from 'react-dom/client';
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home"/>)

// ReactDOM.render(<App/>, document.getElementById("root")); //here we are connecting our app with the div with an id root