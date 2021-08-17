import React from "react";
import ReactDom from "react-dom";
import { GifExpertApp } from "./GifExpertApp";
//import CounterApp from "./CounterApp";

//import PrimeraApp from "./PrimerApp";

import './index.css';


const divRoot=document.querySelector('#root');

//ReactDom.render(<PrimeraApp saludo="Im riccardo"/>,divRoot);
ReactDom.render(<GifExpertApp/>,divRoot);
