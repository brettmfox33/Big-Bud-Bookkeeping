/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FormControl, Grid, TextField, withStyles } from "@material-ui/core";
import colors from '../../styles/colors';

  const ColorTextField = withStyles((theme) => ({
    root: {
        width: 150,
        marginRight: 20,
        '& label.Mui-focused': {
            color: colors.mainPurple,
          },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: colors.mainPurple,
            },
          },
    }
    }))(TextField);

export default function BlogText({setFilterText, filterText}) {

    return (
        <Grid>
        <FormControl>
            <ColorTextField 
                size="small" 
                label="Filter By Text" 
                variant="outlined"
                value={filterText}
                onChange={event => setFilterText(event.target.value)}
            />
        </FormControl>
    </Grid>
    )
}