/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid, useMediaQuery } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import ContactCalendly from '../../components/contact/ContactCalendly';
import ContactInfo from '../../components/contact/ContactInfo';

const useStyles = makeStyles({
    contactContainer: {
        marginTop: 50
    },
    mobileContactContainer: {
        paddingLeft: 20
    },
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
    }
});

export default function Contact() {
    const classes = useStyles();
    const largeScreen = useMediaQuery('(min-width:1000px)', {defaultMatches: true});

    return(
        <Grid 
            container 
            direction="row" 
            alignItems="center" 
            justify="space-evenly" 
            className={classes.contactContainer}
        >
            <Grid item sm={1}></Grid>
                {largeScreen ? <ContactCalendly /> : <ContactInfo />}
                {largeScreen ? <ContactInfo /> : <ContactCalendly />}
            <Grid item sm={1}></Grid>
        </Grid>
    )
}