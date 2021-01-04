/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button, Grid, makeStyles, withStyles } from '@material-ui/core';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const TagButton = withStyles((theme) => ({
    root: {
        color: "white",
        backgroundColor: colors.mainPurple,
        borderRadius: 15,
        width: 130,
        fontFamily: fonts.textFont,
        fontSize: 9,
        border: `1px solid ${colors.mainPurple}`,
        cursor: "default",
        marginRight: 10,
        "&:hover": {
            border: `1px solid ${colors.mainPurple}`,
            backgroundColor: colors.mainPurple,
        }
    }
  }))(Button);

export default function BlogTag({text}) {

    return (
        <Grid>
            <TagButton 
                disableRipple={true}
                disableFocusRipple={true}
            >
                {text.replace('_', ' ')}
            </TagButton>
        </Grid>
    )
}