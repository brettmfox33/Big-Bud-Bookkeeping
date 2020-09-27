/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid, Divider } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import fonts from "../../styles/fonts";

const useStyles = makeStyles({
    divider: {
        height: 115,
        backgroundColor: 'white'
    },
    leftQuestion: {
        fontSize: 30,
        fontFamily: fonts.titleFont,
        width: 130
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

export default function WebFooterInfo() {
    const classes = useStyles();

    return(
        <Grid container item direction="row" justify="space-around">
        <Grid container item direction="row" alignItems="center" justify="space-evenly" xs={10} sm={4} wrap="nowrap" className={classes.leftInfo}>
            <Grid item className={classes.leftQuestion}>Who do we help?</Grid>
            <Divider orientation="vertical" className={classes.divider}></Divider>
            <Grid item className={classes.leftText}>
                Our primary focus is on Oklahoma dispensaries but we are happy to help our friends from anywhere
            </Grid>
        </Grid>
        <Grid container item direction="row" alignItems="center" justify="space-evenly" xs={10} sm={4} wrap="nowrap"  className={classes.rightInfo}>
            <Grid item className={classes.rightQuestion}>Ready to get organized?</Grid>
            <Divider orientation="vertical" className={classes.divider}></Divider>
            <Grid item container direction="column" alignItems="center" className={classes.rightText}>
                <Grid>918-978-4853</Grid>
                <Grid>sales@bigbudbookkeeping.com</Grid>
            </Grid>
        </Grid>
    </Grid>
    )
}