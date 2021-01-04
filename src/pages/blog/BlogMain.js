/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useEffect, useState } from "react"
import { Button, FormControl, Grid, Input, InputBase, InputLabel, makeStyles, MenuItem, Select, TextField, useMediaQuery, withStyles } from "@material-ui/core";
import InfoHeader from "../../components/headers/InfoHeader";
import WhiteHeader from "../../components/headers/WhiteHeader";
import MobileHeader from '../../components/headers/MobileHeader';
import BlogCard from './BlogCard';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import {useDispatch, useSelector} from "react-redux";
import { actionCreators } from '../../redux/actionCreators';
import BlogSelect from './BlogSelect';
import BlogText from './BlogText';


const useStyles = makeStyles({
    gridContainer: {
        marginTop: 10,
        marginBottom: 50
    },
    blogHeader: {
        color: colors.mainPurple,
        fontFamily: fonts.titleFont,
        fontSize: 50,
        marginTop: 30
    },
    blogSubHeader: {
        color: colors.softPurple,
        fontFamily: fonts.titleFont,
        fontSize: 25
    },
    buttonContainer: {
    },
    buttonTitle: {
        fontFamily: fonts.titleFont,
        color: colors.mainPurple,
        fontSize: 20,
    },
    xLogo: {
        width: 100
    },
    button: {
        backgroundColor: colors.softPurple,
        color: "white",
        marginRight: 72,
        width: 100,
        '&:hover': {
            backgroundColor: colors.mainPurple
        }
    }
});

const tags = [
    'Workflows',
    'Taxes',
    'Inventory',
    'Payroll',
    'Holiday',
    'Current Events',
    'Business Management',
    'Compliance',
    'Bookkeeping',
  ];

export default function BlogMain() { 
    const classes = useStyles();
    const dispatch = useDispatch();
    const largeScreen = useMediaQuery('(min-width:1000px)', {defaultMatches: true});
    const blogPosts = useSelector(state => state.blogPosts)
    
    const [selectedTags, setSelectedTags] = useState([])   
    const [filterText, setFilterText] = useState("")

    useEffect(() => {
        dispatch(actionCreators.getBlogPosts())
      }, [dispatch]);

    const getImage = (image) => {
        if (image.formats.small) {
            return image.formats.small.url
        }
        return image.formats.thumbnail.url
    }

    const filterPosts = () => {
        dispatch(actionCreators.getBlogPostsFiltered(selectedTags, filterText))
    }

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
            <Grid container direction="column">
                {/* HEADER */}
                <Grid className={classes.blogHeader} container direction="row" justify="center">
                    Big Bud Blog
                </Grid>
                <Grid container direction="row" justify="center">
                    <img className={classes.xLogo} alt="XLogo" src={require('../../images/XLogo.png')}/>
                </Grid>
                <Grid className={classes.blogSubHeader} container direction="row" justify="center">
                    Nuggets Of Wisdom
                </Grid>

                {/* FILTERS  */}
                <Grid container direction="row" justify="flex-end">
                    <BlogSelect 
                        setSelectedTags={setSelectedTags}
                        selectedTags={selectedTags}
                        tags={tags}
                    />
                    <BlogText 
                        setFilterText={setFilterText}
                        filterText={filterText}
                    />
                    <Button 
                        className={classes.button}
                        onClick={filterPosts}
                    >
                        Filter
                    </Button>
                </Grid>

                {/* POSTS */}
                <Grid container direction="row"  justify="space-evenly" className={classes.gridContainer}>
                    {
                        blogPosts.map(post => (
                            <BlogCard 
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
                        ))
                    }
                </Grid>
            </Grid>
        </Fragment>
    );
}