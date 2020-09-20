/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Grid } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import colors from "../styles/colors";

const useStyles = makeStyles({
    ClearHeader: {
      height: 95,
      borderBottom: `2px solid ${colors.mainPurple}`
    }
  });

export default function ClearHeader () {
    const classes = useStyles();

    return (
        <Grid id="clearHeader" className={classes.ClearHeader} xs={12}></Grid>
    )
}