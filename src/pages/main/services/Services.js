/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Service from './Service';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandHoldingUsd} from '@fortawesome/pro-light-svg-icons';
import {faFileSpreadsheet} from '@fortawesome/pro-light-svg-icons';
import {faCommentAltDollar} from '@fortawesome/pro-light-svg-icons';

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
        borderBottom: `3px solid ${colors.mainPurple}`,
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
            justify="space-evenly"
            className={classes.servicesContainer}
        >
            <Grid item sm={1}></Grid>
            <Grid sm={8} item container direction="column">
                <Grid className={classes.title}>Services</Grid>
                <Grid className={classes.titleText}>What we can help with.</Grid>
                <Grid container direction="row" justify="space-between">
                    <Grid item xs={10} sm={3} className={classes.service}>
                        <Service 
                            title="Bookkeeping"
                            text="We offer a range of bookkeeping services depending on client needs."
                            icon={<FontAwesomeIcon icon={faFileSpreadsheet} />}
                        />
                    </Grid>
                    <Grid item xs={10} sm={3} className={classes.service}>
                        <Service 
                            title="Advisory"
                            text="Our advisory services ensure your business is running smoothly in full compliance with all current regulations."
                            icon={<FontAwesomeIcon icon={faCommentAltDollar} />}
                        />
                    </Grid>
                    <Grid item xs={10} sm={3} className={classes.service}>
                        <Service 
                            title="Budgeting"
                            text="Cash flow management is not just tracking money as it goes in and out."
                            icon={<FontAwesomeIcon icon={faHandHoldingUsd} />}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={1}></Grid>
        </Grid>
    )
}