/** @jsx jsx */
import { jsx } from '@emotion/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Button } from '@material-ui/core'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import colors from "../../styles/colors";
import { IconButton} from '@material-ui/core';

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
    }
  });

export default function MobileHeader() {
    const classes = useStyles();

    return (
        <div className={classes.mobileHeader}>
            <div className={classes.mobileLogo}>
                <Button disableFocusRipple={true} disableRipple={true}>
                    <img alt="Colored Logo" src={require('../../images/BigBudBookkeeping_Logo.png')} className={classes.image}></img>
                </Button>
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