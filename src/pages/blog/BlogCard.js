/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, makeStyles, withStyles } from "@material-ui/core";
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import { Link } from 'react-router-dom';
import BlogTag from './BlogTag';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 500,
        minWidth: 500,
        height: 500,
        marginBottom: 50
    },
    cardSmall: {
        maxWidth: 300,
        height: 300,
        marginBottom: 50
    },
    cardMedia: {
        height: 200,
        backgroundSize: "fit"
    },
    cardContent: {
        fontFamily: fonts.textFont,
        height: 100,
        overflowY: "hidden"
    },
    cardHeaderTitle: {
        fontFamily: fonts.titleFont,
        maxHeight: 32,
        overflow: "hidden"
    },
    cardSubheader: {
        color: colors.softPurple,
        height: 50
    },
    cardHeaderContent: {
        width: 200
    }
}));

const ColorButton = withStyles((theme) => ({
    root: {
        color: colors.softPurple,
    }
  }))(Button);

export default function BlogCard({title, subheader, content, image, id, tag1, tag2, tag3}) {
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            <CardHeader 
                title={title}
                subheader={
                    <Grid container direction="column">
                        <Grid>
                            {subheader}
                        </Grid>
                        <Grid container direction="row">
                            {tag1 &&<BlogTag text={tag1}/>}
                            {tag2 && <BlogTag text={tag2}/>}
                            {tag3 && <BlogTag text={tag3}/>}
                        </Grid>
                    </Grid>
                }
                classes={{
                    title: classes.cardHeaderTitle,
                    subheader: classes.cardSubheader,
                    content: classes.cardHeaderContent
                    }}
            />
            <CardMedia
                className={classes.cardMedia}
                image={`http://localhost:1337${image}`}
            />
            <CardContent className={classes.cardContent}>
                {content}
            </CardContent>
            <CardActions>
                <Grid container direction="row" justify="flex-end">
                    <Link className={classes.link} to={`/blog/${id}`}>
                        <ColorButton size="small" color="primary">
                            Learn More
                        </ColorButton>
                    </Link>
                </Grid>
            </CardActions>
        </Card>
    )
}