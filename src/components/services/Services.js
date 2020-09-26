/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import Service from './Service';

const useStyles = makeStyles({
    servicesContainer: {
        paddingTop: 100,
        paddingLeft: 50,
        marginBottom: 10
    },
    title: {
        color: colors.mainPurple,
        fontFamily: fonts.titleFont,
        fontSize: 18,
        fontWeight: 700
    },
    titleText: {
        fontFamily: fonts.titleFont,
        fontSize: 40,
        fontWeight: 700,
        marginBottom: 38
    },
    service: {
        borderBottom: `1px solid ${colors.mainPurple}`,
        paddingBottom: 23,
        marginBottom: 100
    }
});

export default function Services() {
    const classes = useStyles();

    return (
        <Grid 
            container
            direction="row"
            className={classes.servicesContainer}
        >
            <Grid item sm={1}></Grid>
            <Grid sm={10} item container direction="column" >
                <Grid className={classes.title}>Services</Grid>
                <Grid className={classes.titleText}>What we can help with.</Grid>
                <Grid container direction="row" justify="space-between">
                    <Grid item xs={10} sm={3} className={classes.service}>
                        <Service 
                            title="Bookkeeping"
                            text="Bring us your pile or receipts or shoe box filing system. Let us help you gain control of  your finances."
                        />
                    </Grid>
                    <Grid item xs={10} sm={3} className={classes.service}>
                        <Service 
                            title="Advisory"
                            text="Gain confidence in your numbers and take control of state and federal compliance."
                        />
                    </Grid>
                    <Grid item xs={10} sm={3} className={classes.service}>
                        <Service 
                            title="Budgeting"
                            text="Tighten up that ever expanding budget and be confident that you where all your money goes."
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={1}></Grid>
        </Grid>
    )
}