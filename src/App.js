import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Footer from './components/footer/Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainPage from './components/main/MainPage';
import AboutMain from './pages/about/AboutMain';
import ContactMain from './pages/contact/ContactMain';
import ServicesMain from './pages/services/ServiceMain';
import GuaranteeMain from './pages/guarantee/GuaranteeMain';

function App() {

    return (
        <Router>
            <Grid container direction="column">
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route exact path="/about">
                        <AboutMain />
                    </Route>
                    <Route exact path="/services">
                        <ServicesMain />
                    </Route>
                    <Route exact path="/contact">
                        <ContactMain />
                    </Route>
                    <Route exact path="/guarantee">
                        <GuaranteeMain />
                    </Route>
                </Switch>
                <Footer />
            </Grid>
        </Router>
     );
}

export default App;
