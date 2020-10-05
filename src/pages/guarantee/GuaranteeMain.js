/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from "react"
import SmallBanner from '../../components/SmallBanner';
import InfoHeader from '../../components/headers/InfoHeader';
import { useMediaQuery, makeStyles, Grid } from '@material-ui/core';
import WhiteHeader from "../../components/headers/WhiteHeader"
import MobileHeader from '../../components/headers/MobileHeader';
import image from '../../images/Under-Construction.png'

const useStyles = makeStyles({
    image: {
        width: '100%'
    }
});

export default function GuaranteeMain() {
    const classes = useStyles();
    const largeScreen = useMediaQuery('(min-width:1000px)', {defaultMatches: true});

    return (
        <Fragment>
            {
                largeScreen 
                ?
                    <Fragment>
                        <InfoHeader />
                        <WhiteHeader />
                    </Fragment>
                :
                    <div>
                        <MobileHeader/>
                    </div>
            }
            <SmallBanner 
                title="Our Guarantee"
                text="The Big Bud Bookkeeping team values your business."
            />
            <Grid container direction="row" justify="center">
                <img alt="Under Construction" src={image} className={classes.image}/>
            </Grid>
        </Fragment>
    )
}