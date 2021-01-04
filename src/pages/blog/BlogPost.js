/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Divider, Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import { Fragment, useEffect } from "react"
import WhiteHeader from "../../components/headers/WhiteHeader";
import SmallBanner from '../../components/SmallBanner';
import MobileHeader from '../../components/headers/MobileHeader';
import InfoHeader from "../../components/headers/InfoHeader";
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import BlogCard from './BlogCard';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../redux/actionCreators';
const ReactMarkdown = require('react-markdown')

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
        marginBottom: 10,
        textAlign: "center"
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
        height: 2,
        marginBottom: 40
    },
    postImage: {
        width: 400,
        float: 'right'
    },
    xLogo: {
        width: 100
    },
    relatedPostsHeader: {
        color: colors.softPurple,
        fontSize: 38,
        marginTop: 20,
        marginBottom: 20
    }
});

export default function BlogPost() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const largeScreen = useMediaQuery('(min-width:1000px)', {defaultMatches: true});
    const { id } = useParams();
    const blogPost = useSelector(state => state.blogPost);
    const similarBlogPosts = useSelector(state => state.similarBlogPosts)

    const getImage = (image) => {
        if (image.formats.small) {
            return image.formats.small.url
        }
        return image.formats.thumbnail.url
    }

    useEffect(() => {
        dispatch(actionCreators.getBlogPost(id))
      }, [dispatch, id]);

    useEffect(() => {
        if (blogPost && blogPost.Tag1) {
            dispatch(actionCreators.getSimilarBlogPosts(blogPost.Tag1, blogPost.Title))
        }
    }, [blogPost, dispatch])

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
            {
                blogPost &&
                <Fragment>
                    <Grid className={classes.postContainer} container direction="row" justify="center">
                        <Grid item xs={7} container direction="column" alignItems="center">
                            <Grid className={classes.postTitle}>
                                {blogPost.Title}
                            </Grid>
                            <Grid>
                                <img className={classes.xLogo} alt="XLogo" src={require('../../images/XLogo.png')}/>
                            </Grid>
                            <Grid className={classes.postAuthor}>
                                By: Raelyn Yoder <span className={classes.postDate}> {blogPost.Created} </span>
                            </Grid>
                            <Grid>
                            </Grid>
                            <Grid className={classes.postContent}> 
                                <div className={classes.postContentText}>
                                    <img className={classes.postImage} alt="Post" src={`http://localhost:1337${getImage(blogPost.Image)}`}></img>
                                    <ReactMarkdown children={blogPost.Content} />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* RELATED POSTS */}
                    {
                        similarBlogPosts.length > 0 && 
                            <Grid container direction="row"  justify="center">
                                <Grid container direction="column" alignItems="center">
                                    <Grid className={classes.relatedPostsHeader}>
                                        Related Posts
                                    </Grid>
                                    <Grid className={classes.divider}>
                                    <Divider />
                                    </Grid>
                                    <Grid container direction="row" justify="space-evenly">
                                        {similarBlogPosts.slice(0,3).map(post => (
                                            <BlogCard 
                                                key={post.id}
                                                title={post.Title}
                                                subheader={post.Created}
                                                content={post.Content}
                                                image={getImage(post.Image)}
                                                id={post.id}
                                                tag1={post.Tag1}
                                                tag2={post.Tag2}
                                                tag3={post.Tag3}
                                            />
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                    }
                </Fragment>
            }
        </Fragment>
    )
}
