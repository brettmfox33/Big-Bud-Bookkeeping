import React, { Fragment, useState, useEffect } from 'react';
import { throttle } from 'lodash';
import ClearHeader from './ClearHeader';
import WhiteHeader from './WhiteHeader';

export default function HeaderMain() {
    const [showClearHeader, setShowClearHeader] = useState(true);

    const handleDocumentScroll = () => {
        const { scrollTop: currentScrollTop } = document.documentElement || document.body;
        if (currentScrollTop > 100) {
            setShowClearHeader(false);
        }
        else {
            setShowClearHeader(true);
        }
    }

    const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

    useEffect(() => {
        window.addEventListener('scroll', handleDocumentScrollThrottled);
        
        return () =>
          window.removeEventListener('scroll', handleDocumentScrollThrottled);
      }, [handleDocumentScrollThrottled]);
    
      return (
          <Fragment>
               {
                    showClearHeader
                    ? <ClearHeader />
                    : <WhiteHeader />
                } 
          </Fragment>
    )
}
