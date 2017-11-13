import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import {
    BrowserRouter,
    Redirect,
    NavLink,
    Route,
    Switch} from 'react-router-dom';
// import './styles/App.css';
import {Home, Information, NavBar} from './Home';
import {About} from './About';
import {Portfolio} from './Portfolio';
import {Habilities} from './Habilities';
import {Contact} from './Contact';
import {ModalSpotify} from './ModalSpotify';
// import {Resume} from './Resume';
const App = ({biografy, selected, show, sharedProps}) => {
return (
     <div className="container-fluid">
        <BrowserRouter>
            <Switch>
                    <Route exact path="/" render={() => <Home />}/>
                    <Route path="/home" render={() => <Home  />}/>
                    <Route path="/about" render={() => <About NavBar={NavBar} Information={Information}  />}/>
                    <Route path="/portfolio"  render={() => <Portfolio NavBar={NavBar} Information={Information} ModalSpotify={ModalSpotify} show={show} sharedProps={sharedProps} />}/>
                    <Route path="/habilities"  render={() => <Habilities NavBar={NavBar} Information={Information} />}/>
                    <Route path = "/contact" render = { () => <Contact NavBar={NavBar} Information={Information}/>} />
                    <Route path='/portfolio' render={() => <Redirect to="/home"/>}/>
                    {/* <Route path="/resume"  render={() => <Resume biografy={biografy} selected={selected} />}/> */}
            </Switch>
        </BrowserRouter>
    </div>
)
}
const mapToProps = ({biografy, selected, show, sharedProps}) => ({biografy, selected, show});

export default connect(mapToProps)(App);