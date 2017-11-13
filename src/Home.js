import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/app.css';
import {search } from './actions';
export const Home = () => {
return (
    <div>
        <input type='text' />
        <button onClick={() => getJSON('https://drive.google.com/open?id=0B7Li-EGmDEw5SE1tNTVLVG94Wkk')}></button>
    </div>
)
}