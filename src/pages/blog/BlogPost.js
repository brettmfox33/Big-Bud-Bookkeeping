/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Divider, Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import { Fragment } from "react"
import WhiteHeader from "../../components/headers/WhiteHeader";
import SmallBanner from '../../components/SmallBanner';
import MobileHeader from '../../components/headers/MobileHeader';
import InfoHeader from "../../components/headers/InfoHeader";
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import BlogCard from './BlogCard';
import image from '../../images/card1.png'

const useStyles = makeStyles({
    postContainer: {
        marginTop: 50,
        marginBottom: 70
    },
    postTitle: {
        color: colors.mainPurple,
        fontSize: 38,
        fontFamily: fonts.titleFont,
        fontWeight: 700,
        marginBottom: 10
    },
    postAuthor: {
        color: colors.mainPurple,
        fontFamily: fonts.textFont,
        marginBottom: 30,
        fontWeight: 600,
    },
    postDate: {
        color: "grey",
        fontFamily: fonts.textFont,
        marginLeft: 5
    },
    postContent: {
        fontSize: 18,
        fontFamily: fonts.textFont,
        lineHeight: 1.8
    },
    similarPosts: {
        marginBottom: 50
    },
    similarPostsTitle: {
        color: colors.softPurple,
        fontSize: 30,
        fontFamily: fonts.titleFont,
        fontWeight: 700,
        marginBottom: 20
    },
    divider: {
        width: 200,
        backgroundColor: colors.softPurple,
        height: 3,
        marginBottom: 40
    }
});

export default function BlogPost() {
    const classes = useStyles();
    const largeScreen = useMediaQuery('(min-width:1000px)', {defaultMatches: true});

    return (
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
                title="My Blog Post!"
                text="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
            /> */}
            <Grid className={classes.postContainer} container direction="row" justify="center">
                <Grid item xs={8} container direction="column" alignItems="center">
                    <Grid className={classes.postTitle}>
                        How To Make Yummy Food 
                    </Grid>
                    <Grid className={classes.postAuthor}>
                        By: Raelyn Yoder <span className={classes.postDate}> 10-10-2020</span>
                    </Grid>
                    <Grid className={classes.postContent}> 
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                        <br></br><br></br>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                        <br></br><br></br>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.similarPosts} container direction="column" alignItems="center">
                <Grid className={classes.similarPostsTitle}>
                    Similar Blog Posts
                </Grid>
                <Grid>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid container direction="row" justify="space-evenly">
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
    )
}