/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid } from "@material-ui/core";
import Banner from '../Banner';
import Services from '../services/Services';
import ServiceBanner from '../services/ServiceBanner';
import Contact from '../contact/Contact';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import InfoHeader from '../headers/InfoHeader';
import MobileHeader from '../headers/MobileHeader';
import { Fragment } from 'react';
import HeaderMain from '../headers/HeaderMain';

export default function MainPage() {
    const largeScreen = useMediaQuery('(min-width:1000px)');

    return(
        <Grid container direction="column">
            {
                    largeScreen 
                    ?
                        <Fragment>
                            <InfoHeader />
                            <HeaderMain />
                        </Fragment>
                    :
                        <div>
                            <MobileHeader />
                        </div>
                }
            <Banner />
            <Services />
            <ServiceBanner />
            <Contact />
        </Grid>

    )
}