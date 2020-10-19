/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from "react"
import WhiteHeader from "../../components/headers/WhiteHeader"
import InfoHeader from '../../components/headers/InfoHeader';
import { useMediaQuery } from '@material-ui/core'
import MobileHeader from '../../components/headers/MobileHeader';
import AboutContent from './AboutContent';
import SmallBanner from '../../components/SmallBanner';

export default function AboutMain() {
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
            <AboutContent />
        </Fragment>
    );
}