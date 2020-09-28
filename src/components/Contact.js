/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from "react"
import WhiteHeader from "./headers/WhiteHeader"
import { Grid, useMediaQuery } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import InfoHeader from './headers/InfoHeader';
import ContactCalendly from './contact_components/ContactCalendly';
import ContactInfo from './contact_components/ContactInfo';
import MobileHeader from './headers/MobileHeader';

const useStyles = makeStyles({
    contactContainer: {
        marginTop: 50
    }
});

export default function Appointment() {
    const classes = useStyles();
    const largeScreen = useMediaQuery('(min-width:1000px)');

    return(
        <Fragment>
            {
                largeScreen 
                ?
                    <Fragment>
                        <InfoHeader />
                        <WhiteHeader />
                    </Fragment>
                :
                    <div>
                        <MobileHeader />
                    </div>
            }
            <Grid 
                container 
                direction="row" 
                alignItems="center" 
                justify="space-evenly" 
                className={classes.contactContainer}
            >
                <Grid item sm={1}></Grid>
                <ContactInfo />
                <ContactCalendly />
                <Grid item sm={1}></Grid>
            </Grid>
        </Fragment>
    );
}