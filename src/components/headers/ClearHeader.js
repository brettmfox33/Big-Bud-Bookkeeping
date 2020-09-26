/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button, withStyles } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const HeaderButton = withStyles ({
    root: {
        fontFamily: fonts.textFont
    }
})(Button);

const AppointmentButton = withStyles({
    root: {
        borderRadius: 50,
        height: 50,
        width: 215,
        padding: 0,
        fontSize: 15,
        borderColor: "white",
        '&:hover': {
            backgroundColor: colors.mainPurple,
            borderColor: colors.mainPurple
          }
    }
})(HeaderButton);

const LogoButton = withStyles({
    root: {
        width: 200
    }
})(Button);

const useStyles = makeStyles({
    headerBottomMain: {
        width: "100%",
        height: 70,
        borderBottom: `2px solid ${colors.mainPurple}`,
        backgroundColor: 'transparent',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerLinks: {
        marginRight: 145,
        display: "flex"
    },
    mainLogo: {
        marginLeft: 100,
        display: "flex"
    },
    scheduleAppointment: {
        marginLeft: 25,
        color: "white"
    },
    servicesButton: {
        marginLeft: 25,
        color: "white"
    },
    aboutButton: {
        color: "white"
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
                    <img alt="Colored Logo" src={require('../../images/BigBudBookkeeping_Logo_White.png')}></img>
                </LogoButton>
            </div>
            <div className={classes.headerLinks}>
                <HeaderButton disableFocusRipple={true} disableRipple={true} className={classes.aboutButton}> About Us </HeaderButton>
                <HeaderButton disableFocusRipple={true} disableRipple={true} className={classes.servicesButton}> Services </HeaderButton>
                <div className={classes.AppointmentButtonContainer}>
                    <AppointmentButton variant="outlined" className={classes.scheduleAppointment}> Schedule Appointment </AppointmentButton>
                </div>
            </div>
        </div>
    )
}