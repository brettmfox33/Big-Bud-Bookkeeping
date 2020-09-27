/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button, withStyles } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

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
        width: 200,
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
    AppointmentButtonContainer: {
        display: "flex",
        alignItems: "center"
    }
  });

export default function ClearHeader() {
    const classes = useStyles();

    return (
        <div className={classes.headerBottomMain}>
            <div className={classes.mainLogo}>
                <LogoButton disableFocusRipple={true} disableRipple={true}>
                    <img alt="Colored Logo" src={require('../../images/BigBudBookkeeping_Logo.png')}></img>
                </LogoButton>
            </div>
            <div className={classes.headerLinks}>
                <HeaderButton disableFocusRipple={true} disableRipple={true}> About Us </HeaderButton>
                <HeaderButton disableFocusRipple={true} disableRipple={true} className={classes.servicesButton}> Services </HeaderButton>
                <div className={classes.AppointmentButtonContainer}>
                    <AppointmentButton variant="outlined" className={classes.scheduleAppointment}> Schedule Appointment </AppointmentButton>
                </div>
            </div>
        </div>
    )
}