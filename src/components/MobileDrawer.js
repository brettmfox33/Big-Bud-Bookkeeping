/** @jsx jsx */
import { jsx } from '@emotion/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { List, ListItem, ListItemText, Divider, Grid } from '@material-ui/core';
import colors from "../styles/colors";
import { Link, useLocation } from 'react-router-dom';
import image from '../images/BigBudBookkeeping_Logo_Text.png'
import fonts from '../styles/fonts';

const useStyles = makeStyles({
    mobileDrawerContainer: {
        width: 300
    },
    icon: {
        color: colors.mainPurple
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    },
    image: {
        width: 150,
    },
    divider: {
        backgroundColor: colors.mainPurple
    },
    imageContainer: {
        height: 70
    },
    listItemText: {
        fontFamily: fonts.textFont
    },
    listItemTextSelected: {
        fontFamily: fonts.textFont,
        fontWeight: 'bold',
        color: colors.mainPurple
    }
  });

export default function MobileDrawer() {
    const classes = useStyles();
    const location = useLocation();

    return (
        <div className={classes.mobileDrawerContainer}>
            <Grid container direction="row" justify="center" alignItems="center" className={classes.imageContainer}>
                <img alt="Under Construction" src={image} className={classes.image}/>
            </Grid>
            <Divider className={classes.divider} />
            <List>
                <Link to="/" className={classes.link}>
                    <ListItem button key="Home">
                        <ListItemText primary="Home" classes={location.pathname === '/' ? {primary: classes.listItemTextSelected} : {primary: classes.listItemText}}></ListItemText>
                    </ListItem>
                </Link>
                <Link to="/about" className={classes.link}>
                    <ListItem button key="About">
                        <ListItemText primary="About Us" classes={location.pathname === '/about' ? {primary: classes.listItemTextSelected} : {primary: classes.listItemText}}></ListItemText>
                    </ListItem>
                </Link>
                <Link to="/services" className={classes.link}>
                    <ListItem button key="Services">
                        <ListItemText primary="Services" classes={location.pathname === '/services' ? {primary: classes.listItemTextSelected} : {primary: classes.listItemText}}></ListItemText>
                    </ListItem>
                </Link>
                <Link to="/contact" className={classes.link}>
                    <ListItem button key="Contact">
                        <ListItemText primary="Contact" classes={location.pathname === '/contact' ? {primary: classes.listItemTextSelected} : {primary: classes.listItemText}}></ListItemText>
                    </ListItem>
                </Link>
            </List>            
        </div>
    )
}