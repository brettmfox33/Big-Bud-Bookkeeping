/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Button, withStyles } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const AppointmentButton = withStyles((theme) => ({
    root: {
        borderRadius: 50,
        height: 50,
        width: 215,
        padding: 0,
        fontFamily: fonts.textFont,
        fontSize: 15,
        '&:hover': {
            backgroundColor: colors.mainPurple,
            borderColor: colors.mainPurple,
            color: "white"
          }
    }
  }))(Button);

  const HeaderButton = withStyles((theme) => ({
    root: {
        '&:hover': {
            backgroundColor: '#ffffff'
          }
    }
  }))(Button);

  const LogoButton = withStyles((theme) => ({
    root: {
        width: 200
    }
  }))(HeaderButton);


const useStyles = makeStyles((theme) => ({
    headerLinksContainer: {
        width: "100%",
        height: 70,
        borderBottom: `2px solid ${colors.mainPurple}`,
    },
    headerLinks: {
        float: "right",
        marginRight: 145,
        height: 70,
        display: "flex",
        alignItems: "center"
    },
    mainLogo: {
        marginLeft: 100,
        float: "left"
    },
    scheduleAppointment: {
        marginLeft: 25
    },
    servicesButton: {
        marginLeft: 25
    }
  }));

export default function ClearHeader () {
    const classes = useStyles();

    return (
        <div className={classes.headerLinksContainer}>
            <div className={classes.mainLogo}>
                <LogoButton disableFocusRipple={true} disableRipple={true}>
                    <img alt="Colored Logo" src={require('../images/coloredLogo.png')}></img>
                </LogoButton>
            </div>
            <div className={classes.headerLinks}>
                <HeaderButton disableFocusRipple={true} disableRipple={true} className={classes.aboutButton}> About Us </HeaderButton>
                <HeaderButton disableFocusRipple={true} disableRipple={true} className={classes.servicesButton}> Services </HeaderButton>
                <AppointmentButton variant="outlined" className={classes.scheduleAppointment}> Schedule Appointment </AppointmentButton> 
            </div>
        </div>
    )
}