import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Footer from './components/footer/Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainPage from './pages/main/MainPage';
import AboutMain from './pages/about/AboutMain';
import ContactMain from './pages/contact/ContactMain';
import ServicesMain from './pages/services/ServiceMain';
import ScrollToTop from './components/ScrollToTop';
import TermsMain from './pages/terms/TermsMain';
import PrivacyMain from './pages/privacy/PrivacyMain';

function App() {

    return (
        <Router>
            <ScrollToTop />
            <Grid container direction="column">
                <Switch>
                    <Route exact path="/about">
                        <AboutMain />
                    </Route>
                    <Route exact path="/services">
                        <ServicesMain />
                    </Route>
                    <Route exact path="/contact">
                        <ContactMain />
                    </Route>
                    <Route path="/terms">
                        <TermsMain />
                    </Route>
                    <Route path="/privacy">
                        <PrivacyMain />
                    </Route>
                    <Route path="/">
                        <MainPage />
                    </Route>
                </Switch>
                <Footer />
            </Grid>
        </Router>
     );
}

export default App;
