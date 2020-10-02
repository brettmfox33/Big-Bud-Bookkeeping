/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from "react"
import WhiteHeader from "../headers/WhiteHeader"
import InfoHeader from '../headers/InfoHeader';
import image from '../../images/Under-Construction.png'
import { Grid, useMediaQuery } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import MobileHeader from '../headers/MobileHeader';
import SmallBanner from '../SmallBanner';
import ServiceItem from './ServiceItem';

const useStyles = makeStyles({
    image: {
        width: '100%'
    },
    servicesContainer: {
        margin: 50
    }
});

export default function ServicesMain() {
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
                title="Services"
                text="Our step by step process helps implement a solid 
                foundation for your business."
            />
            <Grid container direction="row" justify="center">
                <Grid item container direction="column" xs={6}  className={classes.servicesContainer}>
                    <ServiceItem 
                        number="1"
                        title="Title goes here"
                        subTitle="This is a subtile"
                        text="This is the text! This is the text! This is the text! This is the text! This is the text! This is the text! This is the text! This is the text!
                        This is the text! This is the text! This is the text! This is the text!"
                    />
                    <ServiceItem 
                        number="2"
                        title="Title goes here"
                        subTitle="This is a subtile"
                        text="This is the text! This is the text! This is the text! This is the text! This is the text! This is the text! This is the text! This is the text!
                        This is the text! This is the text! This is the text! This is the text!"
                    />
                    <ServiceItem 
                        number="3"
                        title="Title goes here"
                        subTitle="This is a subtile"
                        text="This is the text!"
                    />
                </Grid>
            </Grid>
            {/* <Grid container direction="row" justify="center">
                <img alt="Under Construction" src={image} className={classes.image}/>
            </Grid> */}
        </Fragment>
    );
}