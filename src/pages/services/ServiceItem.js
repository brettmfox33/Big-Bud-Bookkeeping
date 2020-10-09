/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useState } from "react";
import { Divider, Grid, makeStyles, IconButton, withStyles, Slide, Collapse, useMediaQuery } from '@material-ui/core';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const CustomIconButton = withStyles ({
    root: {
        '&:hover': {
            backgroundColor: 'white'
        }
    }
})(IconButton);

const useStyles = makeStyles({
    serviceContainer: {
        marginBottom:75
    },
    divider: {
        backgroundColor: colors.mainPurple,
        marginBottom: 50,
        width: '100%'
    },
    mainTitle: {
        fontFamily: fonts.titleFont,
        color: colors.mainPurple,
        fontSize: 30,
        marginBottom: 30
    },
    icon: {
        fontFamily: fonts.titleFont,
        color: colors.mainPurple,
        fontSize: 30
    },
    arrowIcon: {
        color: colors.mainPurple,
        fontSize: 30
    },
    top: {
        marginBottom: 5
    },
    mobileText: {
        textAlign: "center"
    }
});

export default function ServiceItem({icon, title, subTitle, text}) {
    const classes = useStyles();
    const largeScreen = useMediaQuery('(min-width:1000px)', {defaultMatches: true});

    // const [open, setOpen] = useState(false)

    return (
        <Grid item className={classes.serviceContainer}>
            <Divider className={classes.divider} />
            <Grid container direction="row" className={classes.top}>
                <Grid container justify={largeScreen ? null : "center"} item xs={12} sm={1} className={classes.icon}> {icon} </Grid>
                <Grid container justify={largeScreen ? null : "center"} item xs={12} sm={11} className={classes.mainTitle}> {title} </Grid>
                {/* <Grid item xs={1} className={classes.arrowIcon}>  */}
                    {/* <CustomIconButton
                        disableFocusRipple={true} 
                        disableRipple={true} 
                        size="small" 
                        target="_blanke"
                        className={classes.arrowIcon}
                        onClick={() => setOpen(!open)}
                    >    
                        {open ? <FontAwesomeIcon icon={faAngleUp}/> : <FontAwesomeIcon icon={faAngleDown}/>}
                    </CustomIconButton> */}
                {/* </Grid> */}
            </Grid>
            {/* <Grid container direction="row" className={classes.subTitle}>
                <Grid item xs={1}></Grid>
                <Grid item xs={6}>{subTitle}</Grid>
            </Grid> */}
            <Grid container direction="row">
                <Grid item xs={1}></Grid>
                <Grid item xs={11}>
                    {/* <Collapse in={open} disableStrictModeCompat> */}
                        <div className={largeScreen ? null : classes.mobileText}>
                            {text}
                        </div>
                    {/* </Collapse> */}
                </Grid>
            </Grid>
        </Grid>
        
    )
}