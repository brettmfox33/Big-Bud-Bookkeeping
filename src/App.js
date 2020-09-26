import React, { Fragment } from 'react';
import './App.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import InfoHeader from './components/headers/InfoHeader';
import MobileHeader from './components/headers/MobileHeader';
import ClearHeader from './components/headers/ClearHeader';
import Banner from './components/Banner';
import Services from './components/services/Services';
import ServiceBanner from './components/services/ServiceBanner';
import { Grid } from '@material-ui/core';
import Footer from './components/Footer';

function App() {
    const matches = useMediaQuery('(min-width:1000px)');

    return (
        <div>
            {
                matches 
                ? 
                <Fragment>
                    <InfoHeader />
                    <ClearHeader />
                </Fragment>
                : <div>
                    <MobileHeader />
                </div>
            }
            <Grid container direction="column">
                <Grid><Banner /></Grid>
                <Grid><Services /></Grid>
                <Grid><ServiceBanner /></Grid>
                <Grid><Footer /></Grid>
            </Grid>
         </div>
     );
}

export default App;
