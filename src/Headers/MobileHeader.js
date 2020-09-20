/** @jsx jsx */
import { jsx } from '@emotion/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Button, withStyles } from '@material-ui/core'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import colors from "../styles/colors";
import { IconButton} from '@material-ui/core';

const LogoButton = withStyles((theme) => ({
    root: {
        width: 200
    }
  }))(Button);

const useStyles = makeStyles({
    mobileHeader: {
        height: 70,
        width: '100%',
        borderBottom: `1px ${colors.mainPurple} solid`
    },
    mobileLogo: {
        float: "left"
    },
    mobileHeaderMenu: {
        display: "flex",
        alignItems: "center",
        float: "right",
        height: 70,
        marginRight: 30,
        fontSize: 20
    }
  });

export default function MobileHeader() {
    const classes = useStyles();

    return (
        <div className={classes.mobileHeader}>
            <div className={classes.mobileLogo}>
                <LogoButton disableFocusRipple={true} disableRipple={true}>
                    <img alt="Colored Logo" src={require('../images/coloredLogo.png')}></img>
                </LogoButton>
            </div>
            <div className={classes.mobileHeaderMenu}>
                <IconButton 
                    disableFocusRipple={true} 
                    disableRipple={true}
                >
                    <FontAwesomeIcon icon={faBars}/>
                </IconButton>
            </div>
        </div>
    )
}