/** @jsx jsx */
import { jsx } from '@emotion/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { List, ListItem, ListItemText } from '@material-ui/core';
import colors from "../styles/colors";
import { Link, useLocation } from 'react-router-dom';
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
    listItemText: {
        fontFamily: fonts.textFont
    },
    listItemTextSelected: {
        fontFamily: fonts.textFont,
        fontWeight: 'bold',
        color: colors.main
    },
    linkContainer: {
        marginTop: 70
    }
  });

export default function MobileDrawer() {
    const classes = useStyles();
    const location = useLocation();

    return (
        <div className={classes.mobileDrawerContainer}>
            <List className={classes.linkContainer}>
                <Link to="/" className={classes.link}>
                    <ListItem button key="Home" aria-label="Visit Home page">
                        <ListItemText primary="Home" classes={location.pathname === '/' ? {primary: classes.listItemTextSelected} : {primary: classes.listItemText}}></ListItemText>
                    </ListItem>
                </Link>
                <Link to="/about" className={classes.link}>
                    <ListItem button key="About">
                        <ListItemText aria-label="Visit About Us page" primary="About Us" classes={location.pathname === '/about' ? {primary: classes.listItemTextSelected} : {primary: classes.listItemText}}></ListItemText>
                    </ListItem>
                </Link>
                {/* <Link to="/services" className={classes.link}>
                    <ListItem button key="Services">
                        <ListItemText aria-label="Visit Services page" primary="Services" classes={location.pathname === '/services' ? {primary: classes.listItemTextSelected} : {primary: classes.listItemText}}></ListItemText>
                    </ListItem>
                </Link> */}
                <Link to="/contact" className={classes.link}>
                    <ListItem button key="Contact">
                        <ListItemText aria-label="Visit Contact Us page" primary="Contact" classes={location.pathname === '/contact' ? {primary: classes.listItemTextSelected} : {primary: classes.listItemText}}></ListItemText>
                    </ListItem>
                </Link>
            </List>            
        </div>
    )
}