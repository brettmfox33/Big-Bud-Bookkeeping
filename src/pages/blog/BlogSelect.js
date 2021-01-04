/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from "react"
import { FormControl, Grid, InputBase, makeStyles, MenuItem, Select, withStyles} from "@material-ui/core";
import colors from '../../styles/colors';

const useStyles = makeStyles({
    selectFormControl: {
        marginRight: 20,
        width: 150,
        maxWidth: 200,
        height: 40
    }
});

  const ColorInput = withStyles((theme) => ({
    input: {
      borderRadius: 4,
      color: '#737373',
      position: 'relative',
      border: '1px solid #c0c0c0',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      '&:focus': {
        borderRadius: 4,
        backgroundColor: '#fafafa',
        border: `2px solid ${colors.mainPurple}`
      },
    },
  }))(InputBase);

export default function BlogSelect({selectedTags, setSelectedTags, tags}) {
    const classes = useStyles();

    const handleChange = (event) => {
        setSelectedTags(event.target.value);
      };

    return (
        <Grid>
            <FormControl className={classes.selectFormControl}>
                <Select
                    multiple
                    variant="outlined"
                    displayEmpty
                    onChange={handleChange}
                    value={selectedTags}
                    input={<ColorInput />}
                    MenuProps={{
                        getContentAnchorEl: () => null,
                    }}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return "Filter By Tag";
                        }
            
                        return selected.join(', ');
                        }} 
                >
                    <MenuItem disabled value="">
                        <em>Filter By Tag</em>
                    </MenuItem>
                    {tags.map((tag) => (
                        <MenuItem selected={true} key={tag} value={tag}>
                            {tag}
                        </MenuItem>
                    ))}
                </Select>
                </FormControl>
            </Grid>
    )
}