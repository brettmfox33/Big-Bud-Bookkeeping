/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from "react"
import WhiteHeader from "./headers/WhiteHeader"
import image from '../images/Under-Construction.png'
import { Grid } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import InfoHeader from './headers/InfoHeader';

const useStyles = makeStyles({

});

export default function Appointment() {
    const classes = useStyles();

    return(
        <Fragment>
            <InfoHeader />
            <WhiteHeader />
            <Grid container direction="row" justify="center">
                <img alt="Under Construction" src={image}/>
            </Grid>
        </Fragment>
    );
}