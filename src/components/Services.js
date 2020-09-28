/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from "react"
import WhiteHeader from "./headers/WhiteHeader"
import InfoHeader from './headers/InfoHeader';
import image from '../images/Under-Construction.png'
import { Grid, useMediaQuery } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import MobileHeader from './headers/MobileHeader';

const useStyles = makeStyles({
    container: {
        marginTop: 50
    }
});

export default function Services() {
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
            <Grid container direction="row" justify="center" className={classes.container}>
                <img alt="Under Construction" src={image}/>
            </Grid>
        </Fragment>
    );
}