/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useState } from "react"
import { Button, Grid, Input, makeStyles, TextField, useMediaQuery, withStyles } from "@material-ui/core";
import InfoHeader from "../../components/headers/InfoHeader";
import WhiteHeader from "../../components/headers/WhiteHeader";
import SmallBanner from '../../components/SmallBanner';
import MobileHeader from '../../components/headers/MobileHeader';
import image from '../../images/card1.png'
import BlogCard from './BlogCard';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import BlogFilterButton from './BlogFilterButton';

const useStyles = makeStyles({
    gridContainer: {
        marginTop: 10,
        marginBottom: 50
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 5
    },
    buttonTitle: {
        marginTop: 50,
        fontFamily: fonts.titleFont,
        color: colors.mainPurple,
        fontSize: 20,
        marginRight: 72
    },
    button: {

    }
});

const ColorTextField = withStyles((theme) => ({
root: {
  width: 200,
  marginRight: 72
}
}))(TextField);

export default function BlogMain() { 
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
            {/* <SmallBanner
                title="Blog"
                text="Get the latest info from my dope ass blog."
            /> */}
            <Grid container direction="column">
                {/* FILTERS  */}
                {/* <Grid container direction="row" justify="flex-end">
                    <Grid item xs={4} container direction="column" alignItems="flex-end">
                        <Grid className={classes.buttonTitle}>
                            Filter Blogs
                        </Grid>
                        <Grid className={classes.buttonContainer} container direction="row" justify="flex-end">
                            <BlogFilterButton value="Finance" />
                            <BlogFilterButton value="Bookkeeping" />
                            <BlogFilterButton value="Random" />
                            <BlogFilterButton value="Accounting" />
                        </Grid>
                        <Grid className={classes.buttonContainer}>
                            <ColorTextField  size="small" label="Filter For Text" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid> */}

                {/* POSTS */}
                <Grid container direction="row" justify="space-evenly" className={classes.gridContainer}>
                    <BlogCard 
                        title={"My Blog Post!"}
                        subheader={"September 14, 2016"}
                        content={"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}
                        image={image}
                    />
                    <BlogCard 
                        title={"My Blog Post!"}
                        subheader={"September 14, 2016"}
                        content={"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}
                        image={image}
                    />
                    <BlogCard 
                        title={"My Blog Post!"}
                        subheader={"September 14, 2016"}
                        content={"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}
                        image={image}
                    />
                </Grid>
                <Grid container direction="row" justify="space-evenly" className={classes.gridContainer}>
                    <BlogCard 
                        title={"My Blog Post!"}
                        subheader={"September 14, 2016"}
                        content={"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}
                        image={image}
                    />
                    <BlogCard 
                        title={"My Blog Post!"}
                        subheader={"September 14, 2016"}
                        content={"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}
                        image={image}
                    />
                    <BlogCard 
                        title={"My Blog Post!"}
                        subheader={"September 14, 2016"}
                        content={"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}
                        image={image}
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
}