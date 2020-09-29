/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid, Divider } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import fonts from "../../styles/fonts";

const useStyles = makeStyles({
    infoContainer: {
        textAlign: "center"
    },
    divider: {
        width: 150,
        backgroundColor: 'white',
        marginBottom: 20,
        marginTop: 20
    },
    leftQuestion: {
        fontSize: 30,
        fontFamily: fonts.titleFont,
        width: 160
    },
    leftText: {
        fontSize: 18,
        fontFamily: fonts.textFont,
        width: 310
    },
    rightQuestion: {
        fontSize: 30,
        fontFamily: fonts.titleFont,
        width: 190
    },
    rightText: {
        fontSize: 18,
        fontFamily: fonts.textFont,
        width: 300
    },
    leftInfo: {
        marginBottom: 60
    },
    rightInfo: {
        marginBottom: 60
    }
  });

export default function MobileFooterInfo() {
    const classes = useStyles();

    return(
        <Grid container item direction="column" alignItems="center" justify="center" className={classes.infoContainer}>
            <Grid container item direction="column" alignItems="center" justify="center" xs={10} sm={4} wrap="nowrap" className={classes.leftInfo}>
                <Grid item className={classes.leftQuestion}>Who do we help?</Grid>
                <Divider className={classes.divider}></Divider>
                <Grid item className={classes.leftText}>
                    Our primary focus is the Oklahoma cannabis industry but we assist clients in multiple industries all across the US.
                </Grid>
            </Grid>
            <Grid container item direction="column" alignItems="center" justify="space-evenly" xs={10} sm={4} wrap="nowrap"  className={classes.rightInfo}>
                <Grid item className={classes.rightQuestion}>Ready to learn more?</Grid>
                <Divider className={classes.divider}></Divider>
                <Grid item container direction="column" alignItems="center" className={classes.rightText}>
                    <Grid>918-978-4853</Grid>
                    <Grid>sales@bigbudbookkeeping.com</Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}