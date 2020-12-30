/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, makeStyles, withStyles } from "@material-ui/core";
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 500,
        height: 400
    },
    cardMedia: {
        height: 140
    },
    cardContent: {
        fontFamily: fonts.textFont
    },
    cardHeaderTitle: {
        fontFamily: fonts.titleFont
    },
    cardSubheader: {
        color: colors.softPurple
    }
}));

const ColorButton = withStyles((theme) => ({
    root: {
        color: colors.softPurple,
    }
  }))(Button);

export default function BlogCard({title, subheader, content, image}) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader 
                title={title}
                subheader={subheader}
                classes={{
                    title: classes.cardHeaderTitle,
                    subheader: classes.cardSubheader
                    }}
            />
            <CardMedia
                className={classes.cardMedia}
                image={image}
                title={title}
            />
            <CardContent className={classes.cardContent}>
                {content}
            </CardContent>
            <CardActions>
                <Grid container direction="row" justify="flex-end">
                    <Link className={classes.link} to="/blog_post">
                        <ColorButton size="small" color="primary">
                            Learn More
                        </ColorButton>
                    </Link>
                </Grid>
        </CardActions>
        </Card>
    )
}