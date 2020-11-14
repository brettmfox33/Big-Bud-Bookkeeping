/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid, IconButton, useMediaQuery, withStyles } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/pro-light-svg-icons'
import {faHeart} from '@fortawesome/pro-solid-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faCat} from '@fortawesome/free-solid-svg-icons'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import WebFooterInfo from './WebFooterInfo';
import MobileFooterInfo from './MobileFooterInfo';
import { Link } from 'react-router-dom';

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
        color: "white",
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
        color: "white",
        textDecoration: "none",
        fontWeight: 'bold'
    },
    catIcon: {
        color: "white",
        marginLeft: 5,
        marginBottom: 2
    },
    heartIcon: {
        color: "white"
    },
    termsButton: {
        marginTop: 2,
        fontSize: 14,
        color: "white"
    },
    privacyButton: {
        marginTop: 2,
        fontSize: 14,
        color: "white"
    },
    termsAndPrivacy: {
        textDecoration: "none"
    },
    circle: {
        marginLeft: 5,
        marginRight: 5,
        fontSize:5,
        marginBottom: 2
    },
    spaceBetween: {
        width: 16
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
                        aria-label="Visit us on Facebook"
                    >
                        <FontAwesomeIcon icon={faFacebookF}  className={classes.facebookLogo}/>
                    </CustomIconButton>
                    <CustomIconButton
                        disableFocusRipple={true} 
                        disableRipple={true} 
                        size="small"
                        href="https://www.linkedin.com/in/raelyn-yoder-820068196/"
                        target="_blank"
                        aria-label="Visit us on LinkedIn"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn}  className={classes.linkedInLogo}/>
                    </CustomIconButton>
                </Grid>
                <Grid>
                    <FontAwesomeIcon icon={faCopyright}/>
                    <span className={classes.copyrightText}>Big Bud Bookkeeping 2020</span>
                    {<FontAwesomeIcon icon={faCat}className={classes.catIcon}/>}
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <Link to="/terms" className={classes.termsAndPrivacy}>
                            <span className={classes.termsButton}>Terms</span>
                        </Link>
                    </Grid>
                    <Grid item>
                        <FontAwesomeIcon icon={faCircle} className={classes.circle}/>
                    </Grid>
                    <Grid item>
                        <Link to="/privacy" className={classes.termsAndPrivacy}>
                            <span className={classes.privacyButton}>Privacy</span>
                        </Link>
                    </Grid>
                </Grid>
                <Grid className={classes.devCredit} aria-label="Visit the site developer's LinkedIn">
                    Developed with <FontAwesomeIcon icon={faHeart}  className={classes.heartIcon}/> by <a href="https://www.linkedin.com/in/brett-fox-00658a19b/" className={classes.devCreditAnchor}>Brett Fox</a>
                </Grid>
                
            </Grid>
        </Grid>
    )}