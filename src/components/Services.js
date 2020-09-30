/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from "react"
import WhiteHeader from "./headers/WhiteHeader"
import InfoHeader from './headers/InfoHeader';
import image from '../images/Under-Construction.png'
import { Grid, useMediaQuery } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import MobileHeader from './headers/MobileHeader';
import SmallBanner from './SmallBanner';

const useStyles = makeStyles({
    image: {
        width: '100%'
    }
});

export default function Services() {
    const classes = useStyles();
    const largeScreen = useMediaQuery('(min-width:1000px)', {defaultMatches: true});

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
            <SmallBanner 
                title="SERVICES"
                text="Our step by step process helps implement a solid 
                foundation for your business."
            />
            <Grid container direction="row" justify="center">
                <img alt="Under Construction" src={image} className={classes.image}/>
            </Grid>
        </Fragment>
    );
}