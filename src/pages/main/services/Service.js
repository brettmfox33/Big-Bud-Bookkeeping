/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Grid } from '@material-ui/core'
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    title: {
        color: colors.mainPurple,
        fontStyle: fonts.titleFont,
        fontSize: 24,
        fontWeight: 500,
        marginBottom: 10
    },
    text: {
        fontStyle: fonts.textFont,
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 1.8
    },
    icon: {
        fontSize: 35,
        color: colors.mainPurple,
        marginBottom: 10
    },
    link: {
        textDecoration: "none"
    },
});

export default function Service({title, text, icon}) {
    const classes = useStyles();

    return (
        <Grid container direction="column">
            <Grid className={classes.icon}>
                {icon}
            </Grid>
            <Link to="/services" className={classes.link}>
                <Grid className={classes.title}>
                    {title}
                </Grid>
            </Link>
            <Grid className={classes.text}>
                {text}
            </Grid>
        </Grid>
    )
}