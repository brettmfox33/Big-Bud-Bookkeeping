/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Grid, useMediaQuery } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import image from '../images/unknown.png'
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const useStyles = makeStyles({
    bannerMain: {
        backgroundImage: `linear-gradient(0deg, rgba(20, 20, 20, 0.78), rgba(20, 20, 20, 0.78)), url(${image})`,
        height: 500,
        backgroundSize: "cover",
        padding: 50
    },
    fullBannerMain: {
        marginTop: -72,
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
        lineHeight: 2
    }
});

export default function Banner() {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:1000px)');

    return(
        <Grid
            container
            direction="row"
            className={[classes.bannerMain, matches ? classes.fullBannerMain : null]}
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
                    We help cannabis business owners implement robust daily operating 
                    processes and controls around cash, inventory and compliance 
                    to ensure business is hitting profit benchmarks.
                </Grid>
            </Grid>
        </Grid>
    )
}