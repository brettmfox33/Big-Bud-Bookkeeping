/** @jsx jsx */
import { jsx } from '@emotion/core'
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Grid, Button, withStyles, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";

const BannerButton = withStyles ({
    root: {
        fontFamily: fonts.textFont,
        border: '1px solid white',
        borderRadius: 50,
        color: 'white',
        width: 211,
        height: 48,
        '&:hover': {
            backgroundColor: 'white',
            borderColor: 'white',
            color: colors.softPurple
          }
    }
})(Button);

const useStyles = makeStyles({
    bannerContainer: {
        height: 240,
        backgroundColor: colors.softPurple,
        padding: 10
    },
    mobileBannerContainer: {
        height: 300,
        backgroundColor: colors.softPurple,
        padding: 10
    },
    text: {
        fontFamily: fonts.titleFont,
        color: 'white',
        fontSize: 30,
        textAlign: "center",
        // marginBottom: 15
    },
    button: {
        textDecoration: 'none'
    }
});

export default function ServiceBanner() {
    const classes = useStyles();
    const largeScreen = useMediaQuery('(min-width:1000px)', {defaultMatches: true});

    return (
        <Grid container direction="column" justify="center" alignItems="center" className={largeScreen ? classes.bannerContainer : classes.mobileBannerContainer}>
            <Grid item sm={4} className={classes.text}>
                Bring your business back into focus with our step by step process.
            </Grid>
            {/* <Grid item>
                <Link to="/services" className={classes.button}>
                    <BannerButton aria-label="Visit Services Page">Process Overview</BannerButton>
                </Link>
            </Grid> */}
        </Grid>
    )
}