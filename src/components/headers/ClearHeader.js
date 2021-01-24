/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button, withStyles } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import whiteLogo from '../../images/BigBudBookkeeping_Logo_White.png'
import logo from '../../images/BigBudBookkeeping_Logo.png'

const HeaderButton = withStyles ({
    root: {
        '&:hover': {
            fontWeight: 'bold',
            backgroundColor: 'transparent'
        }
    }
})(Button);

const AppointmentButtonWhite = withStyles({
    root: {
        fontFamily: fonts.textFont,
        borderRadius: 50,
        height: 50,
        width: 215,
        padding: 0,
        fontSize: 15,
        borderColor: colors.mainPurple,
        color: colors.mainPurple,
        '&:hover': {
            backgroundColor: colors.mainPurple,
            borderColor: colors.mainPurple,
            color: "white"
          }
    }
})(Button);

const useStyles = makeStyles({
    headerBottomMain: {
        width: "100%",
        height: 70,
        backgroundColor: 'transparent',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: 'sticky',
        top: 42,
        zIndex: 3
    },
    headerLinks: {
        marginRight: 100,
        display: "flex"
    },
    mainLogo: {
        marginLeft: 100,
        display: "flex"
    },
    scheduleAppointment: {
        marginLeft: 25,
    },
    servicesButton: {
        marginLeft: 25,
        color: "white"
    },
    aboutButton: {
        color: "white"
    },
    blogButton: {
        color: "white",
        marginLeft: 25
    },
    link: {
        display: "flex",
        textDecoration: "none",
        alignItems: "center"
    },
    AppointmentButtonContainer: {
        display: "flex",
        alignItems: "center"
    },
    image: {
        width: 200
    }
  });

  const useStylesWhite = makeStyles({
    headerBottomMain: {
        width: "100%",
        height: 70,
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: 'sticky',
        top: 42,
        borderBottom: `1px solid ${colors.mainPurple}`,
        zIndex: 3
    },
    servicesButton: {
        marginLeft: 25,
        color: colors.mainPurple
    },
    aboutButton: {
        marginLeft: 25,
        color: colors.mainPurple
    },
    blogButton: {
        marginLeft: 25,
        color: colors.mainPurple
    },
  });

export default function ClearHeader() {
    const classes = useStyles();
    const classesWhite = useStylesWhite();

    const [showWhiteHeader, setShowWhiteHeader] = useState(false);

    const handleDocumentScroll = () => {
        const { scrollTop: currentScrollTop } = document.documentElement || document.body;
        if (currentScrollTop > 100) {
            setShowWhiteHeader(true);
        }
        else {
            setShowWhiteHeader(false);
        }
    }

    const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

    useEffect(() => {
        window.addEventListener('scroll', handleDocumentScrollThrottled);
        
        return () =>
          window.removeEventListener('scroll', handleDocumentScrollThrottled);
      }, [handleDocumentScrollThrottled]);

    return (
        <div className={showWhiteHeader  ? classesWhite.headerBottomMain : classes.headerBottomMain}>
            <Link to="/" className={classes.mainLogo}>
                <Button disableFocusRipple={true} disableRipple={true}>
                    <img alt="Big Bud Bookkeeping Logo And Home Button" src={showWhiteHeader ? logo : whiteLogo} className={classes.image}></img>
                </Button>
            </Link>
            <div className={classes.headerLinks}>
                <Link to="/contact" className={classes.link}>
                    {
                        showWhiteHeader ?
                            <AppointmentButtonWhite aria-label="Visit Contact Us Page" variant="outlined" className={classes.scheduleAppointment}> Schedule Appointment </AppointmentButtonWhite>
                        :
                            null   
                    }
                </Link>
                <Link to="/about" className={classes.link}>
                    <HeaderButton aria-label="Visit About Us Page" disableFocusRipple={true} disableRipple={true} className={showWhiteHeader ?  classesWhite.aboutButton : classes.aboutButton}> About Us </HeaderButton>
                </Link>
                <Link to="/blog" className={classes.link}>
                    <HeaderButton aria-label="Read the blog" disableFocusRipple={true} disableRipple={true} className={showWhiteHeader ?  classesWhite.blogButton : classes.blogButton}> Blog </HeaderButton>
                </Link>
                {/* <Link to="/services" className={classes.link}>
                    <HeaderButton aria-label="Visit Services Page" disableFocusRipple={true} disableRipple={true} className={showWhiteHeader ? classes.servicesButton : classesWhite.servicesButton}> Services </HeaderButton>
                </Link> */}
            </div>
        </div>
    )
}