import React, { Fragment } from 'react';
import './App.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import InfoHeader from './components/headers/InfoHeader';
import MobileHeader from './components/headers/MobileHeader';
import Banner from './components/Banner';
import Services from './components/services/Services';
import ServiceBanner from './components/services/ServiceBanner';
import { Grid } from '@material-ui/core';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import HeaderMain from './components/headers/HeaderMain';

function App() {
    const matches = useMediaQuery('(min-width:1000px)');

    return (
        <div>
            {
                matches 
                ? 
                <Fragment>
                    <InfoHeader />
                    <HeaderMain /> 
                </Fragment>
                : <div>
                    <MobileHeader />
                </div>
            }
            <Grid container direction="column">
                <Banner />
                <Services />
                <ServiceBanner />
                <Contact />
                <Footer />
            </Grid>
         </div>
     );
}

export default App;
