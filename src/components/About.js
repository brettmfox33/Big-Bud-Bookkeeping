/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from "react"
import WhiteHeader from "./headers/WhiteHeader"
import InfoHeader from './headers/InfoHeader';
import { Grid, useMediaQuery } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import MobileHeader from './headers/MobileHeader';
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const useStyles = makeStyles({
    motivationContainer: {
        padding: 30,
        marginTop: 50
    },
    motivationHeader: {
        color: colors.mainPurple,
        fontSize: 38,
        fontFamily: fonts.titleFont,
        fontWeight: 700
    },
    motivationText: {
        fontSize: 18,
        fontFamily: fonts.textFont,
        lineHeight: 1.8
    },
    mobileMotivationText: {
        fontSize: 18,
        fontFamily: fonts.textFont,
        lineHeight: 1.8,
        textAlign: "center"
    },
    motivationTextTop: {
        marginBottom: 50
    },
    motivationBottomText: {
        fontWeight: 700
    },
    whyContainer: {
        marginBottom: 100,
        padding: 30
    },
    whyHeader: {
        color: colors.mainPurple,
        fontSize: 38,
        fontFamily: fonts.titleFont,
        fontWeight: 700,
        textAlign: "right"
    },
    mobileWhyHeader: {
        color: colors.mainPurple,
        fontSize: 38,
        fontFamily: fonts.titleFont,
        fontWeight: 700,
        textAlign: "center"
    },
    whyText: {
        fontSize: 18,
        fontFamily: fonts.textFont,
        lineHeight: 1.8
    },
    mobileWhyText: {
        fontSize: 18,
        fontFamily: fonts.textFont,
        lineHeight: 1.8,
        textAlign: "center"
    },
    whyTextTop: {
        marginBottom: 50
    },
    whyBottomText: {
        fontWeight: 700
    },
    
});

export default function About() {
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
                        <MobileHeader/>
                    </div>
            }
            <Grid container direction="column">
                {/****** MOTIVATION TEXT ******/}
                <Grid item container direction="row" spacing={largeScreen ? 8 : 2} className={classes.motivationContainer}>
                    <Grid xs sm={1}></Grid>
                    <Grid item xs={12} sm={4} container justify={largeScreen ? "flex-end" : "center"} className={classes.motivationHeader}>
                        <Grid>Our Motivation</Grid>
                    </Grid>
                    <Grid item xs={12} sm={5} container direction="column" className={largeScreen ? classes.motivationText : classes.mobileMotivationText}>
                        <Grid className={classes.motivationTextTop}>
                            Over the past two years when I’ve spoken with business owners in the cannabis industry it’s always the same things that we discuss; 
                            the difficulties of knowing where the money went, in staying on top of the mountain of paperwork and the stress of making sure they 
                            are staying in compliance with an entity that doesn’t state the rules clearly.  It’s all about processes and understanding the rules 
                            of the industry.  
                        </Grid>
                        <Grid className={classes.motivationBottomText}>
                            Many dispensary owners are too busy running the day-to-day business and live in fear of the paperwork mountain turning into a landslide.
                        </Grid>
                    </Grid>
                    <Grid item xs sm={2}></Grid>
                </Grid>

                {/****** WHY TEXT ******/}
                <Grid item container direction="row" spacing={largeScreen ? 8 : 2} className={classes.whyContainer}>
                    <Grid item xs={false} sm={1}></Grid>
                    <Grid item xs={12} sm={4} container justify={largeScreen ? "flex-end" : "center"} className={largeScreen ? classes.whyHeader : classes.mobileWhyHeader}>
                        Why Big Bud Bookkeeping
                    </Grid>
                    <Grid item xs={12} sm={5} container direction="column" className={largeScreen ? classes.whyText: classes.mobileWhyText}>
                        <Grid className={classes.whyTextTop}>
                            How do I know?  Well, I have walked a mile in your shoes, I started a retail business from scratch and lived in the shadow of the 
                            mountain. Luckily I was able to escape the shadow and climb that mountain to totally transform my life and business.   
                        </Grid>
                        <Grid className={classes.whyBottomText}>
                            Now I am on a mission to help small businesses in the cannabis industry escape from the shadow of the mountain so they can climb 
                            to the top and take in the view of success.
                        </Grid>
                    </Grid>
                    <Grid item xs sm={2}></Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
}