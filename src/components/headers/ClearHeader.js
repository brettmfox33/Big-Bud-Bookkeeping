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
            fontWeight: 'bold'
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
        borderColor: "white",
        '&:hover': {
            backgroundColor: colors.mainPurple,
            borderColor: colors.mainPurple
          }
    }
})(HeaderButton);

const useStyles = makeStyles({
    headerBottomMain: {
        width: "100%",
        height: 70,
        backgroundColor: 'transparent',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: 'sticky',
        top: 42
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
        color: "white"
    },
    servicesButton: {
        marginLeft: 25,
        color: "white"
    },
    aboutButton: {
        color: "white"
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

export default function ClearHeader() {
    const classes = useStyles();

    return (
        <div className={classes.headerBottomMain}>
            <Link to="/" className={classes.mainLogo}>
                <Button disableFocusRipple={true} disableRipple={true}>
                    <img alt="Colored Logo" src={require('../../images/BigBudBookkeeping_Logo_White.png')} className={classes.image}></img>
                </Button>
            </Link>
            <div className={classes.headerLinks}>
                <Link to="/about" className={classes.link}>
                    <HeaderButton disableFocusRipple={true} disableRipple={true} className={classes.aboutButton}> About Us </HeaderButton>
                </Link>
                <Link to="/services" className={classes.link}>
                    <HeaderButton disableFocusRipple={true} disableRipple={true} className={classes.servicesButton}> Services </HeaderButton>
                </Link>
                <Link to="/contact" className={classes.link}>
                    <AppointmentButton variant="outlined" className={classes.scheduleAppointment}> Schedule Appointment </AppointmentButton>
                </Link>
            </div>
        </div>
    )
}