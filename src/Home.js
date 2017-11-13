import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import './css/app.css';
import {search, getJSON } from './actions';
export const Home = ({items}) => {
return (
    <div>
        <input type='text' />
        <button onClick={search}>Buscar</button>
    </div>
)
}