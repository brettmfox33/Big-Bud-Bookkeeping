/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid, IconButton, Divider } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles({
    footerContainer: {
        backgroundColor: colors.mainGreen,
        color: 'white',
        paddingTop: 40,
        paddingBottom: 10
    },
    bottomInfo: {
        fontSize: 16,
        fontStyle: fonts.textFont
    },
    devCredit: {
        fontSize: 14,
        color: "#C6C6C6",
        marginTop: 3
    },
    copyrightText: {
        marginLeft: 5
    },
    linkedInLogo: {
        fontSize: 30,
        marginLeft: 10,
        color: "white"
    },
    facebookLogo: {
        fontSize: 30,
        color: "white"
    },
    divider: {
        height: 115,
        backgroundColor: 'white',
    },
    leftQuestion: {
        fontSize: 25,
        fontFamily: fonts.titleFont,
    },
    leftText: {
        fontSize: 16,
        fontFamily: fonts.textFont
    },
    rightQuestion: {
        fontSize: 25,
        fontFamily: fonts.titleFont,
    },
    rightText: {
        fontSize: 16,
        fontFamily: fonts.textFont
    },
    leftInfo: {
        marginBottom: 60
    },
    rightInfo: {
        marginBottom: 60
    }
  });

export default function Footer() {
    const classes = useStyles();

    return (
        <Grid container direction="column" justify="space-between" className={classes.footerContainer}>
            <Grid container item direction="row" justify="space-around">
                <Grid container item direction="row" alignItems="center" justify="space-evenly" xs={10} sm={3} wrap="nowrap" className={classes.leftInfo}>
                    <Grid item xs={3} className={classes.leftQuestion}>Who do we help?</Grid>
                    <Divider orientation="vertical" className={classes.divider}></Divider>
                    <Grid item xs={8} className={classes.leftText}>
                        Our primary focus is on Oklahoma dispensaries but we are happy to help our friends from anywhere
                    </Grid>
                </Grid>
                <Grid container item direction="row" alignItems="center" justify="space-evenly" xs={10} sm={3} wrap="nowrap"  className={classes.rightInfo}>
                    <Grid item xs={3} className={classes.rightQuestion}>Ready to get started?</Grid>
                    <Divider orientation="vertical" className={classes.divider}></Divider>
                    <Grid item xs={8} container direction="column" alignItems="center" className={classes.rightText}>
                        <Grid>918-978-4853</Grid>
                        <Grid>sales@bigbudbookkeeping.com</Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item direction="column" alignItems="center" className={classes.bottomInfo}>
                <Grid>
                    <IconButton
                        disableFocusRipple={true} 
                        disableRipple={true} 
                        size="small"
                        href="https://www.facebook.com/BigBudBookkeeping/"
                        target="_blank"
                        className={classes.facebookLogo}
                    >
                        <FontAwesomeIcon icon={faFacebook}  className={classes.facebookLogo}/>
                    </IconButton>
                    <IconButton
                        disableFocusRipple={true} 
                        disableRipple={true} 
                        size="small"
                        href="https://www.linkedin.com/in/raelyn-yoder-820068196/"
                        target="_blank"
                        className={classes.linkedInLogo}
                    >
                        <FontAwesomeIcon icon={faLinkedin}  className={classes.facebookLogo}/>
                    </IconButton>
                </Grid>
                <Grid>
                    <FontAwesomeIcon icon={faCopyright}/>
                    <span className={classes.copyrightText}>Big Bud Bookkeeping 2020</span>
                </Grid>
                <Grid className={classes.devCredit}>
                    Site Built by Fox Digital
                </Grid>
            </Grid>
        </Grid>
    )}