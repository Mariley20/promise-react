import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import './css/app.css';
import {search} from './actions';
export const Home = ({items, planets}) => {
return (
    <div className="container">
        <button onClick={search}>CLICK...</button>
        <div>
            {
                items.map((item,index)=>{
                return(
                 <div key={index}>
                     <p>{item.pl_name}</p>
                     <img src="img/33.gif"/>
                     <p>Discovered {item.pl_disc} {item.pl_telescope}</p>
                </div>)
            })}
        </div>
    </div>
)
}

