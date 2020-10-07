/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from "react"
import WhiteHeader from "../../components/headers/WhiteHeader"
import InfoHeader from '../../components/headers/InfoHeader';
import image from '../../images/Under-Construction.png'
import { Grid, useMediaQuery } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import MobileHeader from '../../components/headers/MobileHeader';
import SmallBanner from '../../components/SmallBanner';
import ServiceItem from './ServiceItem';
import { faCommentAltDollar, faFileSpreadsheet } from '@fortawesome/pro-light-svg-icons';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
    image: {
        width: '100%'
    },
    servicesContainer: {
        margin: 50
    }
});

export default function ServicesMain() {
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
                        <MobileHeader />
                    </div>
            }
            <SmallBanner 
                title="Services"
                text="Our step by step process helps implement a solid foundation for your business."
            />
            <Grid container direction="row" justify="center">
                <Grid item container direction="column" xs={6}  className={classes.servicesContainer}>
                    <ServiceItem 
                        icon={<FontAwesomeIcon icon={faFileSpreadsheet} />}
                        title="Bookkeeping"
                        subTitle="This is a subtile"
                        text="With technology we transform a pile of receipts into an organized system so your tax preparer can take full advantage of the 280E tax code."
                    />
                    <ServiceItem 
                        icon={<FontAwesomeIcon icon={faCommentAltDollar} />}
                        title="Advisory"
                        subTitle="This is a subtile"
                        text="Provide assistance with financial planning, understanding financial reports, and developing efficient and complaint workflows with strong internal controls."
                    />
                    <ServiceItem 
                        icon={<FontAwesomeIcon icon={faHandHoldingUsd} />}
                        title="Budgeting"
                        subTitle="This is a subtile"
                        text="Help you understand where the money went and to project your cash flow for the future"
                    />
                </Grid>
            </Grid>
            {/* <Grid container direction="row" justify="center">
                <img alt="Under Construction" src={image} className={classes.image}/>
            </Grid> */}
        </Fragment>
    );
}