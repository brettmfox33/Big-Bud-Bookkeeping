/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid, useMediaQuery, ListItem, ListItemText, List } from '@material-ui/core';
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/pro-solid-svg-icons'

const useStyles = makeStyles({
    motivationContainer: {
        padding: 30,
        marginTop: 50
    },
    motivationHeader: {
        color: colors.mainPurple,
        fontSize: 38,
        fontFamily: fonts.titleFont,
        fontWeight: 700
    },
    motivationText: {
        fontSize: 18,
        fontFamily: fonts.textFont,
        lineHeight: 1.8
    },
    mobileMotivationText: {
        fontSize: 18,
        fontFamily: fonts.textFont,
        lineHeight: 1.8,
        textAlign: "center"
    },
    motivationTextTop: {
        marginBottom: 50
    },
    motivationBottomText: {
        fontWeight: 700
    },
    whyContainer: {
        padding: 30
    },
    whyHeader: {
        color: colors.mainPurple,
        fontSize: 38,
        fontFamily: fonts.titleFont,
        fontWeight: 700,
        textAlign: "right"
    },
    mobileWhyHeader: {
        color: colors.mainPurple,
        fontSize: 38,
        fontFamily: fonts.titleFont,
        fontWeight: 700,
        textAlign: "center"
    },
    whyText: {
        fontSize: 18,
        fontFamily: fonts.textFont,
        lineHeight: 1.8
    },
    mobileWhyText: {
        fontSize: 18,
        fontFamily: fonts.textFont,
        lineHeight: 1.8,
        textAlign: "center"
    },
    whyTextTop: {
        marginBottom: 50
    },
    whyBottomText: {
        fontWeight: 700
    },
    guaranteeContainer: {
        marginBottom: 50,
        padding: 30
    },
    guaranteeHeader: {
        color: colors.mainPurple,
        fontSize: 38,
        fontFamily: fonts.titleFont,
        fontWeight: 700,
        textAlign: "right"
    },
    mobileGuaranteeHeader: {
        color: colors.mainPurple,
        fontSize: 38,
        fontFamily: fonts.titleFont,
        fontWeight: 700,
        textAlign: "center"
    },
    guaranteeText: {
        fontSize: 18,
        fontFamily: fonts.textFont,
        lineHeight: 1.8
    },
    mobileGuaranteeText: {
        fontSize: 18,
        fontFamily: fonts.textFont,
        lineHeight: 1.8,
        textAlign: "center"
    },
    guaranteeTextTop: {
        marginBottom: 30
    },
    circle: {
        fontSize: 20,
        color: colors.mainPurple,
        marginRight: 15
    },
    listItemText: {
        fontFamily: fonts.textFont,
        fontWeight: 700,
        fontSize: 18
    }
});

export default function AboutContent() {
    const classes = useStyles();
    const largeScreen = useMediaQuery('(min-width:1000px)', {defaultMatches: true});

    return (
        <Grid container direction="column">
                {/****** MOTIVATION TEXT ******/}
                <Grid item container direction="row" spacing={largeScreen ? 8 : 2} className={classes.motivationContainer}>
                    <Grid item xs sm={1}></Grid>
                    <Grid item xs={12} sm={4} container justify={largeScreen ? "flex-end" : "center"} className={classes.motivationHeader}>
                        <Grid>Our Motivation</Grid>
                    </Grid>
                    <Grid item xs={12} sm={5} container direction="column" className={largeScreen ? classes.motivationText : classes.mobileMotivationText}>
                        <Grid className={classes.motivationTextTop}>
                        When we speak with business owners in the cannabis industry they all ask similar questions…Where did all the money go?  
                        How can they possibly stay on top of the mountain of paperwork?  
                        How can they be sure they are staying in compliance with an entity that doesn’t state the rules clearly?  
                        It’s all about internal processes and understanding the rules of the industry.

                        </Grid>
                        <Grid className={classes.motivationBottomText}>
                            Many dispensary owners are too busy running the day-to-day business and live in fear of the paperwork mountain turning into a landslide.                         </Grid>
                    </Grid>
                    <Grid item xs sm={2}></Grid>
                </Grid>

                {/****** WHY TEXT ******/}
                <Grid item container direction="row" spacing={largeScreen ? 8 : 2} className={classes.whyContainer}>
                    <Grid item xs={false} sm={1}></Grid>
                    <Grid item xs={12} sm={4} container justify={largeScreen ? "flex-end" : "center"} className={largeScreen ? classes.whyHeader : classes.mobileWhyHeader}>
                        Why Big Bud Bookkeeping
                    </Grid>
                    <Grid item xs={12} sm={5} container direction="column" className={largeScreen ? classes.whyText: classes.mobileWhyText}>
                        <Grid className={classes.whyTextTop}>
                            How do I know?  Well, I have walked miles in your shoes.  
                            My husband and I started a retail business from scratch and lived in the shadow of the mountain.  
                            My team and I have helped other business owners to climb that mountain, totally transforming our lives and businesses along the way.   
                        </Grid>
                        <Grid className={classes.whyBottomText}>
                            Now we are on a mission to help small businesses in the cannabis industry escape from the shadow of the mountain so they 
                            can climb to the top and take in the view of success. 
                        </Grid>
                    </Grid>
                    <Grid item xs sm={2}></Grid>
                </Grid>

                {/****** OUT GUARANTEE TEXT ******/}
                <Grid item container direction="row" spacing={largeScreen ? 8 : 2} className={classes.guaranteeContainer}>
                    <Grid item xs={false} sm={1}></Grid>
                    <Grid item xs={12} sm={4} container justify={largeScreen ? "flex-end" : "center"} className={largeScreen ? classes.guaranteeHeader : classes.mobileGuaranteeHeader}>
                        Our Guarantee
                    </Grid>
                    <Grid item xs={12} sm={5} container direction="column" className={largeScreen ? classes.guaranteeText: classes.mobileGuaranteeText}>
                        <Grid className={classes.guaranteeTextTop}>
                            The Big Bud Bookkeeping team values your business and their work, to ensure our service to your business is of the highest standard we guarantee all the following:
                        </Grid>
                        <Grid>
                            <List>
                                <ListItem key={1}>
                                    <FontAwesomeIcon icon={faCheck} className={classes.circle}/>
                                    <ListItemText primary="Timely responses to emails, calls or requests for assistance or information." classes={{primary: classes.listItemText}}></ListItemText>
                                </ListItem>
                                <ListItem key={2}>
                                    <FontAwesomeIcon icon={faCheck} className={classes.circle}/>
                                    <ListItemText primary="Dedicate time to listen and understand you and your business to help you grow and reach your business or financial goals." classes={{primary: classes.listItemText}}></ListItemText>
                                </ListItem>
                                <ListItem key={3}>
                                    <FontAwesomeIcon icon={faCheck} className={classes.circle}/>
                                    <ListItemText primary="Continue to assess the needs of your business and present any relevant procedures or software changes that would increase the efficiency of your staff and processes." classes={{primary: classes.listItemText}}></ListItemText>
                                </ListItem>
                                <ListItem key={4}>
                                    <FontAwesomeIcon icon={faCheck} className={classes.circle}/>
                                    <ListItemText primary="Be professional and respect confidentiality within our business relationship." classes={{primary: classes.listItemText}}></ListItemText>
                                </ListItem>
                                <ListItem key={5}>
                                    <FontAwesomeIcon icon={faCheck} className={classes.circle}/>
                                    <ListItemText primary="Define and implement a schedule of services that is tailored to your operational needs." classes={{primary: classes.listItemText}}></ListItemText>
                                </ListItem>
                                <ListItem key={6}>
                                    <FontAwesomeIcon icon={faCheck} className={classes.circle}/>
                                    <ListItemText primary="Offer you a quote prior to completing services outside the scope of our agreed ongoing engagement." classes={{primary: classes.listItemText}}></ListItemText>
                                </ListItem>
                                <ListItem key={7}>
                                    <FontAwesomeIcon icon={faCheck} className={classes.circle}/>
                                    <ListItemText primary="Suggest outside services or industry experts when in best interest to your overall business success." classes={{primary: classes.listItemText}}></ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    <Grid item xs sm={2}></Grid>
                </Grid>
            </Grid>
    )
}