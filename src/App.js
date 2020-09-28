import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Footer from './components/footer/Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './components/About';
import Services from './components/Services';
import MainPage from './components/main/MainPage';
import Contact from './components/Contact';
import image from './images/Under-Construction.png'




function App() {

    return (
        // <Grid container justify="center">
        //     <img alt="Under Construction" src={image}/>
        // </Grid>
        <Router>
            <Grid container direction="column">
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/services">
                        <Services />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
                <Footer />
            </Grid>
        </Router>
     );
}

export default App;
