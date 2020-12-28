/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Grid, IconButton, withStyles} from '@material-ui/core';
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/pro-solid-svg-icons'

const CustomIconButton = withStyles ({
    root: {
        fontFamily: fonts.textFont,
        '&:hover': {
            backgroundColor: colors.mainPurple
        }
    }
})(IconButton);

const useStyles = makeStyles({
    infoHeader: {
      height: 42,
      background: colors.mainPurple,
      color: "white",
      paddingRight: 100,
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
        fontSize: 23,
        color: "white"
    }
  });

export default function InfoHeader () {
    const classes = useStyles();

    return (
        <Grid
            className={classes.infoHeader}
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
        >
            <div className={classes.contactInfo}>
                <div>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <span aria-label="Email us at sales@bigbudbookkeeping.com" className={classes.emailText}>sales@bigbudbookkeeping.com</span>
                </div>
                <div className={classes.phoneInfo}>
                    <FontAwesomeIcon icon={faPhoneAlt}/>
                    <span aria-label="Call us at 918-978-4853" className={classes.phoneText}>918-978-4853</span>
                </div>
            </div>
            <div className={classes.socialMediaIcons}>
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
                    <FontAwesomeIcon icon={faLinkedinIn} className={classes.linkedInLogo}/>
                </CustomIconButton>
            </div>
        </Grid>
    )
}