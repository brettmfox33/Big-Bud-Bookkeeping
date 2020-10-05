/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/pro-solid-svg-icons'

const useStyles = makeStyles({
    contactTitle: {
        color: colors.mainPurple,
        fontFamily: fonts.titleFont,
        fontSize: 18,
        fontWeight: 700
    },
    titleText: {
        fontFamily: fonts.titleFont,
        fontSize: 40,
        fontWeight: 700,
        marginBottom: 15
    },
    mainText: {
        fontFamily: fonts.textFont,
        fontSize: 18,
        fontWeight: 400,
        marginBottom: 20,
        lineHeight: 1.8
    },
    tasksTitle: {
        fontFamily: fonts.textFont,
        fontSize: 18,
        fontWeight: 400,
        marginBottom: 10
    },
    tasks: {
        marginBottom: 20,
        paddingLeft: 20
    },
    task: {
        fontFamily: fonts.textFont,
        fontsize: 14,
        marginBottom: 15
    },
    otherOptions: {
        fontFamily: fonts.textFont,
        fontSize: 18,
        fontWeight: 400
    },
    check: {
        color: colors.mainPurple,
        marginRight: 5
    },
    contactContainer: {
        marginBottom: 20,
        padding: 10
    }
});
export default function ContactInfo() {
    const classes = useStyles();

 return (
    <Grid container direction="column" item xs={11} sm={4} className={classes.contactContainer}>
        <Grid className={classes.contactTitle}>Contact Us</Grid>
        <Grid className={classes.titleText}>Let's see if we're a fit!</Grid>
        {/* <Grid className={classes.mainText}>We’d love to answer your questions about Big Bud Bookkeeping and how we can save you time and money with your canibus business.</Grid> */}
        {/* <Grid className={classes.tasksTitle}>Schedule time with us and we’ll:</Grid> */}
        <Grid className={classes.tasksTitle}>Schedule a free 15-minute call with RaeLyn:</Grid>
        <Grid className={classes.tasks}>
            <Grid className={classes.task}>
                <FontAwesomeIcon icon={faCheck}  className={classes.check}/>
                Tell us where you are now and where you want to be.</Grid>
            <Grid className={classes.task}>
                <FontAwesomeIcon icon={faCheck}  className={classes.check}/>
                Expand on the services that will get you there.
            </Grid>
            <Grid className={classes.task}>
                <FontAwesomeIcon icon={faCheck}  className={classes.check}/>
                Answer all your questions about Big Bud Bookkeeping.
            </Grid>
        </Grid>
        <Grid className={classes.otherOptions}>You can also contact us directly by phone or email.</Grid>
    </Grid>
 )
}