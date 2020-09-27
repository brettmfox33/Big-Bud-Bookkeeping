/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid } from '@material-ui/core'
import {InlineWidget} from 'react-calendly'

export default function ContactCalendly() {

 return (
    <Grid alignItems="center" item xs={12} sm={5}>                    
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
 )
}