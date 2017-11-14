import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import './css/app.css';
import {search, search2 } from './actions';
export const Home = ({items, planets}) => {
    const itemsss = items.map((element, index) => {
        return(
            <p key={index}  >{element}</p>
        )
    })
return (
    <div>
        <input type='text' />
        <button onClick={search}>Buscar</button>
        <div>
            {planets}
        </div>
    </div>
)
}