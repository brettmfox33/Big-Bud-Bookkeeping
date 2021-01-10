/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, makeStyles, withStyles } from "@material-ui/core";
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import { Link } from 'react-router-dom';
import BlogTag from './BlogTag';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 420,
        height: 500,
        marginBottom: 50
    },
    cardMedia: {
        height: 200,
        backgroundSize: "fit"
    },
    cardContent: {
        fontFamily: fonts.textFont,
        height: 130,
        overflowY: "hidden"
    },
    cardHeaderTitle: {
        fontFamily: fonts.titleFont,
        maxHeight: 32,
        overflow: "hidden",
        fontSize: 20
    },
    cardSubheader: {
        color: colors.softPurple,
        height: 25
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

export default function BlogCardSmall({title, subheader, content, image, id, tag1, tag2, tag3}) {
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
                image={image}
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