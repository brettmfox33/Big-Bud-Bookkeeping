/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from "react"
import WhiteHeader from "../headers/WhiteHeader"
import InfoHeader from '../headers/InfoHeader';
import { useMediaQuery } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import MobileHeader from '../headers/MobileHeader';
import AboutContent from './AboutContent';
import SmallBanner from '../SmallBanner';

const useStyles = makeStyles({
    
});

export default function AboutMain() {
    const classes = useStyles();
    const largeScreen = useMediaQuery('(min-width:1000px)');

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
                title="ABOUT US "
                text="We have walked in your shoes and lived in the shadow of 
                the paperwork mountain."
            />
            <AboutContent />
        </Fragment>
    );
}