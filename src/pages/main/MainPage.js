/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useMediaQuery, Grid } from '@material-ui/core';
import { Fragment } from 'react';
import InfoHeader from '../../components/headers/InfoHeader';
import HeaderMain from '../../components/headers/HeaderMain';
import MobileHeader from '../../components/headers/MobileHeader';
import Services from './services/Services';
import ServiceBanner from './services/ServiceBanner'
import Banner from './Banner';
import Contact from './Contact';

export default function MainPage() {
    const largeScreen = useMediaQuery('(min-width:1000px)', {defaultMatches: true});

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