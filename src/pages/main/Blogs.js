/** @jsx jsx */
import { jsx } from '@emotion/core';
import { faLongArrowRight } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../../redux/actionCreators';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import BlogCardSmall from '../blog/BlogCardSmall';

const useStyles = makeStyles({
    blogContainer: {
        marginTop: 50
    },
    blogTitle: {
        color: colors.mainPurple,
        fontFamily: fonts.titleFont,
        fontSize: 18,
        fontWeight: 700
    },
    blogTitleText: {
        fontFamily: fonts.titleFont,
        fontSize: 40,
        fontWeight: 700,
    },
    seeAllText: {
        color: colors.mainPurple,
        fontFamily: fonts.textFont,
        marginBottom: 20
    },
    arrow: {
        marginLeft: 5
    },
    link: {
        textDecoration: "none"
    }
});

export default function Blogs() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const highlightedBlogPosts = useSelector(state => state.highlightedBlogPosts)
    const largeScreen = useMediaQuery('(min-width:1000px)', {defaultMatches: true});

    useEffect(() => {
        dispatch(actionCreators.getHighlightedBlogPosts())
      }, [dispatch]);

    const getImage = (image) => {
        if (image.formats.small) {
            return image.formats.small.url
        }
        return image.formats.thumbnail.url
    }

    return (
        <Grid className={classes.blogContainer} container direction="column" alignItems="center">
            <Grid item xs={10} sm={3}>
                <Grid className={classes.blogTitle}>
                    Blog
                </Grid>
                <Grid className={classes.blogTitleText}>
                    Big Bud Blogs
                </Grid>
                <Grid container direction="row" justify="center" className={classes.seeAllText}>
                    <Grid>
                        <Link to="/blog" className={classes.link}>
                            See all
                        </Link>
                    </Grid>
                    <Grid> 
                        <Link to="/blog" className={classes.link}>           
                            <FontAwesomeIcon className={classes.arrow} icon={faLongArrowRight}/>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
             <Grid container xs={12} sm={8}item direction="row" justify={largeScreen ? "space-between" : "center"}>
             {
                highlightedBlogPosts &&
                highlightedBlogPosts.map(post => {
                    return (
                            <Grid item xs={10} sm={3}>
                                <BlogCardSmall
                                    key={post.id}
                                    title={post.Title}
                                    content={post.Preview_Text}
                                    image={getImage(post.Image)}
                                    subheader={post.Created}
                                    id={post.id}
                                    tag1={post.Tag1}
                                    tag2={post.Tag2}
                                    tag3={post.Tag3}
                                />
                            </Grid>
                    )
                })
            }
             </Grid>
        </Grid>
    )

}