/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {InlineWidget} from 'react-calendly'

const useStyles = makeStyles({
    contactContainer: {
        paddingTop: 55
    },
    contactTitle: {
        color: colors.mainPurple,
        fontFamily: fonts.titleFont,
        fontSize: 18,
        fontWeight: 700
    },
    titleText: {
        fontFamily: fonts.titleFont,
        fontSize: 40,
        fontWeight: 700,
        marginBottom: 15
    },
    mainText: {
        fontFamily: fonts.textFont,
        fontSize: 18,
        fontWeight: 400,
        marginBottom: 20
    },
    tasksTitle: {
        fontFamily: fonts.textFont,
        fontSize: 18,
        fontWeight: 400,
        marginBottom: 10
    },
    tasks: {
        marginBottom: 20,
        paddingLeft: 20
    },
    task: {
        fontFamily: fonts.textFont,
        fontsize: 14,
        marginBottom: 15
    },
    otherOptions: {
        fontFamily: fonts.textFont,
        fontSize: 18,
        fontWeight: 400
    },
    check: {
        color: colors.mainPurple,
        marginRight: 5
    }
  });

export default function Contact() {
    const classes = useStyles();

    return(
        <Grid container direction="row" alignItems="center" justify="space-evenly" className={classes.contactContainer}>
            <Grid item sm={1}></Grid>
            <Grid alignItems="center" item xs={10} sm={5}>                    
                <InlineWidget 
                    styles={{
                        height: '1000px'
                    }}
                    pageSettings={{
                        primaryColor: "60258d"
                    }}
                    url="https://calendly.com/brettmfox33/15min"
                />
            </Grid>
            <Grid container direction="column" item xs={11} sm={3}>
                <Grid className={classes.contactTitle}>Contact Us</Grid>
                <Grid className={classes.titleText}>Let's see if we're a fit!</Grid>
                <Grid className={classes.mainText}>We’d love to answer your questions about Big Bud Bookkeeping and how we can save you time and money with your canibus business.</Grid>
                <Grid className={classes.tasksTitle}>Schedule time with us and we’ll:</Grid>
                <Grid className={classes.tasks}>
                    <Grid className={classes.task}>
                        <FontAwesomeIcon icon={faCheck}  className={classes.check}/>
                        Expand on the services you’re interested in</Grid>
                    <Grid className={classes.task}>
                        <FontAwesomeIcon icon={faCheck}  className={classes.check}/>
                        Answer all your questions about Big Bud Bookkeeping
                    </Grid>
                    <Grid className={classes.task}>
                        <FontAwesomeIcon icon={faCheck}  className={classes.check}/>
                        Begin an evaluation and cost estimation
                    </Grid>
                </Grid>
                <Grid className={classes.otherOptions}>You can also contact us directly by phone or email.  </Grid>
            </Grid>
            <Grid item sm={1}></Grid>
        </Grid>
    )
}