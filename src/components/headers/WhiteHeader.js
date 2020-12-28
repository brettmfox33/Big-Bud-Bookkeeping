/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button, withStyles } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { Link, useLocation } from "react-router-dom";

const HeaderButton = withStyles ({
    root: {
        fontFamily: fonts.textFont,
        color: colors.mainPurple,
        '&:hover': {
            backgroundColor: "white",
            fontWeight: 'bold',
            fontSize: 15
        }
    }
})(Button);

const AppointmentButton = withStyles({
    root: {
        borderRadius: 50,
        height: 50,
        width: 215,
        padding: 0,
        fontSize: 15,
        borderColor: colors.mainPurple,
        color: colors.mainPurple,
        fontFamily: fonts.textFont,
        '&:hover': {
            backgroundColor: colors.mainPurple,
            borderColor: colors.mainPurple,
            color: "white"
        }
    }
})(Button);

const LogoButton = withStyles({
    root: {
        '&:hover': {
            backgroundColor: "white"
        }
    }
})(Button);

const useStyles = makeStyles({
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
        zIndex: 9999
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
        marginLeft: 25
    },
    selectedScheduleAppointment: {
        backgroundColor: colors.mainPurple,
        color: 'white'
    },
    appointmentButtonContainer: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none"
    },
    aboutLink: {
        display: "flex",
        textDecoration: "none",
        marginLeft: 25
    },
    servicesLink: {
        display: "flex",
        textDecoration: "none",
        marginLeft: 25
    },
    image: {
        width: 200
    },
    selectedLink: {
        color: colors.mainPurple,
        fontWeight: 'bolder',
        fontSize: 15
    }
  });

export default function ClearHeader() {
    const classes = useStyles();
    const location = useLocation();

    return (
        <div className={classes.headerBottomMain}>
            <Link to="/" className={classes.mainLogo}>                        
                <LogoButton disableFocusRipple={true} disableRipple={true}>
                    <img alt="Big Bud Bookkeeping Logo And Home Button" src={require('../../images/BigBudBookkeeping_Logo.png')} className={classes.image}></img>
                </LogoButton>
            </Link>
            <div className={classes.headerLinks}>
                <Link to="/contact" className={classes.appointmentButtonContainer}>
                    <AppointmentButton aria-label="Visit Contact Us Page"  variant="outlined" className={location.pathname === '/contact' ? classes.selectedScheduleAppointment : classes.scheduleAppointment}> Schedule Appointment </AppointmentButton>
                </Link>
                <Link to="/about" className={classes.aboutLink}>
                    <HeaderButton aria-label="Visit About Us Page" disableFocusRipple={true} disableRipple={true} className={location.pathname === '/about' ? classes.selectedLink : null}> About Us </HeaderButton>
                </Link>
                {/* <Link to="/services" className={classes.servicesLink}>
                    <HeaderButton aria-label="Visit Services Page" disableFocusRipple={true} disableRipple={true}  className={location.pathname === '/services' ? classes.selectedLink : null}> Services </HeaderButton>
                </Link> */}
            </div>
        </div>
    )
}