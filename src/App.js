import React, { Fragment } from 'react';
import './App.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import InfoHeader from './components/headers/InfoHeader';
import MobileHeader from './components/headers/MobileHeader';
import ClearHeader from './components/headers/ClearHeader';
import Banner from './components/Banner';

function App() {
    const matches = useMediaQuery('(min-width:1000px)');

    return (
        <div>
            {
                matches 
                ? 
                <Fragment>
                    <InfoHeader />
                    <ClearHeader />
                </Fragment>
                : <div>
                    <MobileHeader />
                </div>
            }
            <Banner />
         </div>
     );
}

export default App;
