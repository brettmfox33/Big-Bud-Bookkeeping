/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid, IconButton, useMediaQuery, withStyles } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/pro-light-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faCat} from '@fortawesome/free-solid-svg-icons'
import WebFooterInfo from './WebFooterInfo';
import MobileFooterInfo from './MobileFooterInfo';

const CustomIconButton = withStyles ({
    root: {
        fontFamily: fonts.textFont,
        '&:hover': {
            backgroundColor: colors.mainGreen
        }
    }
})(IconButton);

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
        marginLeft: 10,
        color: "white",
        fontSize: 32,
        marginTop: 2
    },
    facebookLogo: {
        color: "white",
        fontSize: 26
    },
    devCreditAnchor: {
        color: "#C6C6C6",
        textDecoration: 'none',
        fontWeight: 'bold'
    },
    cat: {
        color: "white",
        marginLeft: 5,
        marginBottom: 2
    }
  });


export default function Footer() {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:1000px)', {defaultMatches: true});

    return (
        <Grid container direction="column" justify="space-between" className={classes.footerContainer}>
            {
                matches ? <WebFooterInfo /> : <MobileFooterInfo />
            }
            <Grid container item direction="column" alignItems="center" className={classes.bottomInfo}>
                <Grid>
                    <CustomIconButton
                        disableFocusRipple={true} 
                        disableRipple={true} 
                        size="small"
                        href="https://www.facebook.com/BigBudBookkeeping/"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faFacebookF}  className={classes.facebookLogo}/>
                    </CustomIconButton>
                    <CustomIconButton
                        disableFocusRipple={true} 
                        disableRipple={true} 
                        size="small"
                        href="https://www.linkedin.com/in/raelyn-yoder-820068196/"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn}  className={classes.linkedInLogo}/>
                    </CustomIconButton>
                </Grid>
                <Grid>
                    <FontAwesomeIcon icon={faCopyright}/>
                    <span className={classes.copyrightText}>Big Bud Bookkeeping 2020</span>
                    <FontAwesomeIcon icon={faCat}  className={classes.cat}/>
                </Grid>
                <Grid className={classes.devCredit}>
                    Site Built by <a href="https://www.linkedin.com/in/brett-fox-00658a19b/" className={classes.devCreditAnchor}>Fox Digital</a>
                </Grid>
            </Grid>
        </Grid>
    )}