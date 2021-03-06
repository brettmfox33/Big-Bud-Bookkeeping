/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Grid, useMediaQuery, Button, withStyles } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import image from '../../images/smallBanner.png'
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { Link } from "react-router-dom";

const AppointmentButton = withStyles({
    root: {
        fontFamily: fonts.textFont,
        borderRadius: 50,
        height: 50,
        width: 230,
        padding: 0,
        fontSize: 15,
        borderColor: colors.mainPurple,
        backgroundColor: colors.mainPurple,
        color: 'white',
        '&:hover': {
            backgroundColor: null,
            borderColor: "white",
        }
    }
})(Button);


const useStyles = makeStyles({
    fullBannerMain: {
        backgroundImage: `linear-gradient(0deg, rgba(20, 20, 20, 0.7), rgba(20, 20, 20, 0.70)), url(${image})`,
        height: 500,
        backgroundSize: "cover",
        padding: 50,
        marginTop: -75,
    },
    mobileBannerMain: {
        backgroundImage: `linear-gradient(0deg, rgba(20, 20, 20, 0.70), rgba(20, 20, 20, 0.70)), url(${image})`,
        height: 500,
        backgroundSize: "cover",
        padding: 50,
        marginTop: 70
    },
    bannerTitle: {
        color: colors.softGreen,
        fontFamily: fonts.titleFont,
        fontSize: 38,
        marginBottom: 20
    },
    bannerText: {
        color: "white",
        fontFamily: fonts.textFont,
        fontSize: 18,
        lineHeight: 2,
        marginBottom: 40
    },
    link: {
        textDecoration: 'none'
    }
});

export default function Banner() {
    const classes = useStyles();
    const largeScreen = useMediaQuery('(min-width:1000px)', {defaultMatches: true});

    return(
        <Grid
            container
            direction="row"
            className={largeScreen ? classes.fullBannerMain : classes.mobileBannerMain}
        >
            <Grid item sm={2}></Grid>
            <Grid
                container
                item
                direction="column"
                justify="center"
                alignItems="flex-start"
                sm={4}
            >
                <Grid className={classes.bannerTitle}>
                    Specialized Bookkeeping
                </Grid>
                <Grid className={classes.bannerText}>
                    We help small business owners implement robust daily operating processes
                    and controls around cash and inventory to ensure their business is hitting
                    profit benchmarks.
                </Grid>
                {
                    largeScreen ? 
                        <Link to="/contact" className={classes.link}>
                            <AppointmentButton aria-label="visit Contact Us page" variant="outlined"> Schedule Appointment </AppointmentButton>
                        </Link>
                    : null
                }
            </Grid>
        </Grid>
    )
}