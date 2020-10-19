/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from "react"
import WhiteHeader from "../../components/headers/WhiteHeader"
import InfoHeader from '../../components/headers/InfoHeader';
import { Divider, Grid, useMediaQuery } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import MobileHeader from '../../components/headers/MobileHeader';
import SmallBanner from '../../components/SmallBanner';
import ServiceItem from './ServiceItem';
import { faCommentAltDollar, faFileSpreadsheet } from '@fortawesome/pro-light-svg-icons';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '../../styles/colors';

const useStyles = makeStyles({
    servicesContainer: {
        margin: 50
    },
    divider: {
        backgroundColor: colors.mainPurple,
        marginBottom: 50,
        width: '100%'
    },
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
                text=" Our flexible step by step process helps implement a solid foundation for your business."
            />
            <Grid container direction="row" justify="center">
                <Grid item container direction="column" xs={10} sm={6} className={classes.servicesContainer}>
                    <ServiceItem 
                        icon={<FontAwesomeIcon icon={faFileSpreadsheet} />}
                        title="Bookkeeping"
                        text="Transform a pile of receipts into an organized system so your tax preparer can take full advantage of the 280E tax code."
                    />
                    <ServiceItem 
                        icon={<FontAwesomeIcon icon={faCommentAltDollar} />}
                        title="Advisory"
                        text="Provide general assistance with financial planning and financial reports. Develop efficient and complaint workflows with strong internal controls."
                    />
                    <ServiceItem 
                        icon={<FontAwesomeIcon icon={faHandHoldingUsd} />}
                        title="Budgeting"
                        text="Help you understand where the money went and to project your cash flow for the future. Furnish you with the skills you need to plan the next big thing for your company."
                    />
                    <Divider className={classes.divider} />
                </Grid>
            </Grid>
        </Fragment>
    );
}