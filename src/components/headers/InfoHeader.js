/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Grid, IconButton} from '@material-ui/core';
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
    infoHeader: {
      height: 42,
      background: colors.mainPurple,
      color: "white",
      paddingRight: 200,
      position: 'sticky',
      top: 0,
      zIndex: 9999
    },
    contactInfo: {
        display: "flex"
    },
    phoneText: {
        marginLeft: 10,
        fontFamily: fonts.textFont
    },
    emailText: {
        marginLeft: 10,
        fontFamily: fonts.textFont
    },
    phoneInfo: {
        marginLeft: 25
    },
    socialMediaIcons: {
        marginLeft: 30
    },
    linkedInLogo: {
        fontSize: 26,
        marginTop: 2,
        marginLeft: 10,
        color: "white"
    },
    facebookLogo: {
        fontSize: 25,
        color: "white"
    }
  });

export default function InfoHeader () {
    const classes = useStyles();

    return (
        <Grid
            id="contactContainer"
            className={classes.infoHeader}
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
        >
            <div id="contactInfo" className={classes.contactInfo}>
                <div id="emailInfo">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <span className={classes.emailText}>sales@bigbudbookkeeping.com</span>
                </div>
                <div id="phoneInfo" className={classes.phoneInfo}>
                    <FontAwesomeIcon icon={faPhoneAlt}/>
                    <span className={classes.phoneText}>918-978-4853</span>
                </div>
            </div>
            <div id="socialMediaIcons" className={classes.socialMediaIcons}>
                <IconButton 
                    disableFocusRipple={true} 
                    disableRipple={true} 
                    size="small"
                    href="https://www.facebook.com/BigBudBookkeeping/"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faFacebook}  className={classes.facebookLogo}/>
                </IconButton>
                <IconButton 
                    disableFocusRipple={true} 
                    disableRipple={true} 
                    size="small" 
                    className={classes.linkedInLogo}
                    href="https://www.linkedin.com/in/raelyn-yoder-820068196/"
                    target="_blanke"
                >
                    <FontAwesomeIcon icon={faLinkedin}/>
                </IconButton>
            </div>
        </Grid>
    )
}