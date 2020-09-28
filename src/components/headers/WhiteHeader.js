/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button, withStyles } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { Link } from "react-router-dom";

const HeaderButton = withStyles ({
    root: {
        fontFamily: fonts.textFont,
        '&:hover': {
            backgroundColor: "white"
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
        '&:hover': {
            backgroundColor: colors.mainPurple,
            borderColor: colors.mainPurple,
            color: "white"
        }
    }
})(HeaderButton);

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
        marginRight: 200,
        display: "flex"
    },
    mainLogo: {
        marginLeft: 250,
        display: "flex"
    },
    scheduleAppointment: {
        marginLeft: 25,
        color: colors
    },
    servicesButton: {
        marginLeft: 25
    },
    appointmentButtonContainer: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none"
    },
    link: {
        display: "flex",
        textDecoration: "none"
    },
    image: {
        width: 200
    }
  });

export default function ClearHeader() {
    const classes = useStyles();

    return (
        <div className={classes.headerBottomMain}>
            <Link to="/" className={classes.mainLogo}>                        
                <LogoButton disableFocusRipple={true} disableRipple={true}>
                    <img alt="Colored Logo" src={require('../../images/BigBudBookkeeping_Logo.png')} className={classes.image}></img>
                </LogoButton>
            </Link>
            <div className={classes.headerLinks}>
                <Link to="/about" className={classes.link}>
                    <HeaderButton disableFocusRipple={true} disableRipple={true}> About Us </HeaderButton>
                </Link>
                <Link to="/services" className={classes.link}>
                    <HeaderButton disableFocusRipple={true} disableRipple={true} className={classes.servicesButton}> Services </HeaderButton>
                </Link>
                <Link to="/appointment" className={classes.appointmentButtonContainer}>
                    <AppointmentButton variant="outlined" className={classes.scheduleAppointment}> Schedule Appointment </AppointmentButton>
                </Link>
            </div>
        </div>
    )
}