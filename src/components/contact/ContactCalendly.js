/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid, makeStyles } from '@material-ui/core'
import {InlineWidget} from 'react-calendly'

const useStyles = makeStyles({
    iFrame: {
        width: 420,
        height: 1880,
        scrolling: 'yes',
        border: 0,
    },
    iFrameContainer: {
        height: 2000,
        marginTop: 50
    }
  });


export default function ContactCalendly() {
    const classes = useStyles();

 return (
    <Grid item container justify="center" xs={12} sm={5} className={classes.iFrameContainer}>                    
    {/* <InlineWidget 
        styles={{
            height: '1300px'
        }}
        pageSettings={{
            primaryColor: "60258d"
        }}
        url="https://calendly.com/bigbudbookkeeping/15min"
    /> */}
        <iframe 
            src='https://outlook.office365.com/owa/calendar/BigBudBookkeeping1@bigbudbookkeeping.com/bookings/' 
            title="booking_iframe"
            className={classes.iFrame}
            allowtransparency="true"
        >
            </iframe>
</Grid>
 )
}