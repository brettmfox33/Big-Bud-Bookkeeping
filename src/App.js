import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Footer from './components/footer/Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './components/About';
import MainPage from './components/main/MainPage';
import Appointment from './components/Appointment';

function App() {

    return (
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
                        <About />
                    </Route>
                    <Route exact path="/appointment">
                        <Appointment />
                    </Route>
                </Switch>
                <Footer />
            </Grid>
        </Router>
     );
}

export default App;
