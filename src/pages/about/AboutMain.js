/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from "react"
import WhiteHeader from "../../components/headers/WhiteHeader"
import InfoHeader from '../../components/headers/InfoHeader';
import { useMediaQuery } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import MobileHeader from '../../components/headers/MobileHeader';
import AboutContent from './AboutContent';
import SmallBanner from '../../components/SmallBanner';
import image from '../../images/Under-Construction.png'

const useStyles = makeStyles({
    image: {
        width: '100%'
    }
});

export default function AboutMain() {
    const classes = useStyles();
    const largeScreen = useMediaQuery('(min-width:1000px)', {defaultMatches: true});

    return(
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
                title="About Us"
                text="Our mission is to provide small business owners the tools and systems necessary to balance their books and their lives. To empower our employees with the skills and tools they need to provide exceptional care and guidance to our clients."
            />
            {/* <Grid container direction="row" justify="center">
                <img alt="Under Construction" src={image} className={classes.image}/>
            </Grid> */}
            <AboutContent />
        </Fragment>
    );
}