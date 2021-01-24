/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid, Divider, InputBase, withStyles, Button } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../redux/actionCreators';
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

const useStyles = makeStyles({
    infoContainer: {
        textAlign: "center"
    },
    divider: {
        width: 150,
        backgroundColor: 'white',
        marginBottom: 20,
        marginTop: 20
    },
    rightQuestion: {
        fontSize: 30,
        fontFamily: fonts.titleFont,
        width: 190
    },
    rightText: {
        fontSize: 18,
        fontFamily: fonts.textFont,
        width: 300
    },
    leftInfo: {
        marginBottom: 60
    },
    rightInfo: {
        marginBottom: 60
    },
    newsletterQuestion: {
        fontSize: 30,
        fontFamily: fonts.titleFont,
        width: 180
    },
    signUpButton: {
        backgroundColor: colors.softPurple,
        color: 'white',
        height: 40,
        marginTop: 1,
        marginLeft: 10,
        borderRadius: 4,
        '&:hover': {
            backgroundColor: '#77519c'
        },
        '&:disabled': {
            color: '#e6e6e6',
            backgroundColor: '#947bad'
        },
        fontStyle: fonts.textFont
    },
  });

const CustomTextField = withStyles({
    input: {
        borderRadius: 4,
        backgroundColor: 'white',
        padding: '10px 12px',
        marginTop: 10,
        marginBottom: 10
    }
})(InputBase);

export default function MobileFooterInfo() {
    const classes = useStyles();
    const dispatch = useDispatch()

    const [validEmail, setValidEmail] = useState(false);
    const [textInput, setTextInput] = useState("");

    const handleChange = (e) => {
        setTextInput(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if  (re.test(String(e.target.value).toLowerCase())) {
            setValidEmail(true)
        }
        else {
            setValidEmail(false)
        }
    }

    const clickHandler = () => {
        dispatch(actionCreators.postNewsletterEmail(textInput))
    }

    return(
        <Grid container item direction="column" alignItems="center" justify="center" className={classes.infoContainer}>
            <Grid container item direction="column" alignItems="center" justify="center" xs={10} sm={4} wrap="nowrap" className={classes.leftInfo}>
                <Grid item className={classes.newsletterQuestion}>
                    Want to stay in the loop?
                </Grid>
                <Divider className={classes.divider}></Divider>
                <Grid>
                    Sign up for our Tuesday Top Tips email newsletter!
                </Grid>
                <Grid direction="column" className={classes.inputContainer}>
                    <Grid>
                        <CustomTextField placeholder="Email" value={textInput} onChange={e => handleChange(e)} className={classes.input} label="" variant="filled" />
                    </Grid>
                    <Grid>
                        <Button disabled={!validEmail} className={classes.signUpButton} onClick={clickHandler}>Subscribe</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item direction="column" alignItems="center" justify="space-evenly" xs={10} sm={4} wrap="nowrap"  className={classes.rightInfo}>
                <Grid item className={classes.rightQuestion}>
                    Who do we help?
                </Grid>
                <Divider className={classes.divider}></Divider>
                <Grid item className={classes.rightText}>
                    Our primary focus is the Oklahoma cannabis industry but we assist clients in multiple industries all across the US.
                </Grid>
            </Grid>
        </Grid>
    )
}