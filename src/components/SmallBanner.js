/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Grid, useMediaQuery } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import image from '../images/unknown.png'
import fonts from '../styles/fonts';
import colors from '../styles/colors';

const useStyles = makeStyles({
    fullBannerMain: {
        backgroundImage: `linear-gradient(0deg, rgba(20, 20, 20, 0.78), rgba(20, 20, 20, 0.78)), url(${image})`,
        height: 300,
        backgroundSize: "cover",
        padding: 50
    },
    mobileBannerMain: {
        backgroundImage: `linear-gradient(0deg, rgba(20, 20, 20, 0.78), rgba(20, 20, 20, 0.78)), url(${image})`,
        height: 300,
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
    }
});

export default function SmallBanner({title, text}) {
    const classes = useStyles();
    const largeScreen = useMediaQuery('(min-width:1000px)');

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
                    {title}
                </Grid>
                <Grid className={classes.bannerText}>
                    {text}
                </Grid>
            </Grid>
        </Grid>
    )
}