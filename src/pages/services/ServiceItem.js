/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useState } from "react";
import { Divider, Grid, makeStyles, IconButton, withStyles, Slide, Collapse } from '@material-ui/core';
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
        fontSize: 30
    },
    stepNumber: {
        fontFamily: fonts.titleFont,
        color: colors.mainPurple,
        fontSize: 30
    },
    arrowIcon: {
        color: colors.mainPurple,
        fontSize: 30
    },
    subTitle: {
        marginBottom: 30
    },
    top: {
        marginBottom: 5
    },
    mainText: {
    }
});

export default function ServiceItem({icon, title, subTitle, text}) {
    const classes = useStyles();

    const [open, setOpen] = useState(false)

    return (
        <Grid item className={classes.serviceContainer}>
            <Divider className={classes.divider} />
            <Grid container direction="row" className={classes.top}>
                <Grid item xs={1} className={classes.stepNumber}> {icon} </Grid>
                <Grid item xs={10} className={classes.mainTitle}> {title} </Grid>
                <Grid item xs={1} className={classes.arrowIcon}> 
                    <CustomIconButton
                        disableFocusRipple={true} 
                        disableRipple={true} 
                        size="small" 
                        target="_blanke"
                        className={classes.arrowIcon}
                        onClick={() => setOpen(!open)}
                    >    
                        {open ? <FontAwesomeIcon icon={faAngleUp}/> : <FontAwesomeIcon icon={faAngleDown}/>}
                    </CustomIconButton>
                </Grid>
            </Grid>
            <Grid container direction="row" className={classes.subTitle}>
                <Grid item xs={1}></Grid>
                <Grid item xs={6}>{subTitle}</Grid>
            </Grid>
            <Grid container direction="row">
                <Grid item xs={1}></Grid>
                <Grid item xs={10} className={classes.mainText}>
                    <Collapse in={open} disableStrictModeCompat>
                        <div>
                            {text}
                        </div>
                    </Collapse>
                </Grid>
            </Grid>
        </Grid>
        
    )
}