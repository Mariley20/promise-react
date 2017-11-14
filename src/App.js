import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import {
    BrowserRouter,
    Redirect,
    // NavLink,
    Route,
    Switch} from 'react-router-dom';
// import './styles/App.css';
import {Home} from './Home';
// import {About} from './About';
// import {Portfolio} from './Portfolio';
// import {Habilities} from './Habilities';
// import {Contact} from './Contact';
// import {ModalSpotify} from './ModalSpotify';
// import {Resume} from './Resume';
const App = ({items, planets}) => {
return (
     <div className="container-fluid">
        <BrowserRouter>
            <Switch>
                    <Route exact path="/" render={() => <Home items={items} planets={planets}/>}/>
                    <Route path="/home" render={() => <Home items={items} planets={planets}/>}/>
                    {/* <Route path="/about" render={() => <About NavBar={NavBar} Information={Information}  />}/>
                    <Route path="/portfolio"  render={() => <Portfolio NavBar={NavBar} Information={Information} ModalSpotify={ModalSpotify} show={show} sharedProps={sharedProps} />}/>
                    <Route path="/habilities"  render={() => <Habilities NavBar={NavBar} Information={Information} />}/>
                    <Route path = "/contact" render = { () => <Contact NavBar={NavBar} Information={Information}/>} /> */}
                    <Route path='/promise-react' render={() => <Redirect to="/home"/>}/> 
                    {/* <Route path="/resume"  render={() => <Resume biografy={biografy} selected={selected} />}/> */}
            </Switch>
        </BrowserRouter>
    </div>
)
}
const mapToProps = ({items, planets}) => ({items, planets});

export default connect(mapToProps)(App);