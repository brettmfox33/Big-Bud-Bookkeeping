/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button, Grid, makeStyles, withStyles } from "@material-ui/core";
import { useState } from 'react';
import colors from "../../styles/colors";
import fonts from '../../styles/fonts';

const SelectedButton = withStyles((theme) => ({
    root: {
        color: "white",
        backgroundColor: colors.mainPurple,
        borderRadius: 15,
        width: 100,
        fontFamily: fonts.textFont,
        fontSize: 10,
        border: `1px solid ${colors.mainPurple}`,
        '&:hover': {
            border: "1px solid gray",
            color: "gray",
            fontSize: 10
        }
    }
  }))(Button);

  const UnSelectedButton = withStyles((theme) => ({
    root: {
        color: "gray",
        borderRadius: 15,
        width: 120,
        fontSize: 13,
        fontFamily: fonts.textFont, 
        border: "1px solid gray",
        '&:hover': {
            border: `1px solid ${colors.mainPurple}`,
            color: "white",
            backgroundColor: colors.mainPurple,
            fontSize: 13
        }
    }
  }))(Button);

const useStyles = makeStyles({
    button: {
        // marginRight: 20
    }
});

export default function BlogFilterButton({value}) {
    const classes = useStyles();
    const [selected, setSelected] = useState(true)

    return (
        <Grid className={classes.button}>
            {
                selected
                ?
                    <SelectedButton 
                        onClick={() => setSelected(!selected)}
                    >
                        {value}
                    </SelectedButton>
                :
                    <UnSelectedButton 
                        onClick={() => setSelected(!selected)}
                    >
                        {value}
                    </UnSelectedButton>

            }

        </Grid>
    )
}