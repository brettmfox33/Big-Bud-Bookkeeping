/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, makeStyles, withStyles } from "@material-ui/core";
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    card: {
        width: 300,
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

const ColorButton = withStyles(() => ({
    root: {
        color: colors.softPurple,
    }
  }))(Button);

export default function BlogCardSmall({title, subheader, content, image, id}) {
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            <CardHeader 
                title={title}
                subheader={
                    <Grid>
                        {subheader}
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