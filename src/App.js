import React, { Fragment } from 'react';
import './App.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import InfoHeader from './Headers/InfoHeader';
import ClearHeader from './Headers/ClearHeader';
import MobileHeader from './Headers/MobileHeader';

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
         </div>
     );
}

export default App;
