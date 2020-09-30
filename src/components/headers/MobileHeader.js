/** @jsx jsx */
import { jsx } from '@emotion/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Button, Drawer, Grid, withStyles } from '@material-ui/core'
import {faBars, faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import colors from "../../styles/colors";
import { IconButton} from '@material-ui/core';
import { useState } from 'react';
import MobileDrawer from '../MobileDrawer';
import { Link } from "react-router-dom";
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import fonts from '../../styles/fonts';

const CustomIconButton = withStyles ({
    root: {
        fontFamily: fonts.textFont,
        '&:hover': {
            backgroundColor: 'white'
        }
    }
})(IconButton);

const useStyles = makeStyles({
    mobileHeader: {
        height: 70,
        width: '100%',
        borderBottom: `1px ${colors.mainPurple} solid`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: 'fixed',
        top: 0,
        backgroundColor: 'white',
    },
    mobileLogo: {
        display: "flex",
        alignItems: "center",
        marginLeft: 10
    },
    mobileHeaderMenu: {
        display: "flex",
        alignItems: "center",
        height: 70,
        marginRight: 30,
        fontSize: 20
    },
    image: {
        width: 200
    },
    facebookLogo: {
        fontSize: 25,
        color: colors.mainPurple
    },
    linkedInLogo: {
        fontSize: 28,
        marginTop: 2,
        marginLeft: 10,
        color: colors.mainPurple
    },
    envelopeIcon: {
        color: colors.mainPurple,
        fontSize: 20,
    },
    phoneIcon: {
        color: colors.mainPurple,
        fontSize: 20,
    },
    email: {
        fontFamily: fonts.textFont,
        marginBottom: 15
    },
    phoneNumber: {
        fontFamily: fonts.textFont,
        marginBottom: 15
    },
    infoContainer: {
        height: '100%',
        marginBottom: 20
    },
    drawer: {
        backgroundColor: '#fafafa'
    }
  });

export default function MobileHeader() {
    const classes = useStyles();

    const [openDrawer, setOpenDrawer] = useState(false);
    
    const handleDrawerOpen = () => {
        setOpenDrawer(true);
      };
    
      const handleDrawerClose = () => {
        setOpenDrawer(false);
      };
      
    return (
        <div className={classes.mobileHeader}>
            <Link to="/" className={classes.mobileLogo}>
                <Button disableFocusRipple={true} disableRipple={true}>
                    <img alt="Colored Logo" src={require('../../images/BigBudBookkeeping_Logo.png')} className={classes.image}></img>
                </Button>
            </Link>
            <div className={classes.mobileHeaderMenu}>
                <IconButton 
                    disableFocusRipple={true} 
                    disableRipple={true}
                    onClick={handleDrawerOpen}
                >
                    <FontAwesomeIcon icon={faBars}/>
                </IconButton>
            </div>
            <Drawer anchor="right" open={openDrawer} onClose={handleDrawerClose} classes={{paper: classes.drawer}}>
                <MobileDrawer />
                <Grid container direction="column" justify="flex-end" alignItems="center" className={classes.infoContainer}>
                    <Grid className={classes.envelopeIcon}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </Grid>
                    <Grid className={classes.email}>
                        sales@bigbudbookkeeping.com
                    </Grid>
                    <Grid  className={classes.phoneIcon}>
                        <FontAwesomeIcon icon={faPhoneAlt}/>
                    </Grid>
                    <Grid className={classes.phoneNumber}>
                        918-978-4853
                    </Grid>
                    <Grid container justify="center" item direction="row">
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
                            className={classes.linkedInLogo}
                            href="https://www.linkedin.com/in/raelyn-yoder-820068196/"
                            target="_blanke"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                        </CustomIconButton>
                    </Grid>
                </Grid>
            </Drawer>
        </div>
    )
}