/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid, Divider, Button, withStyles, InputBase } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";
import '@firebase/storage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../redux/actionCreators';

const useStyles = makeStyles({
    divider: {
        height: 115,
        backgroundColor: 'white'
    },
    whoQuestion: {
        fontSize: 30,
        fontFamily: fonts.titleFont,
        width: 130
    },
    whoText: {
        fontSize: 18,
        fontFamily: fonts.textFont,
        width: 310
    },
    newsletterQuestion: {
        fontSize: 30,
        fontFamily: fonts.titleFont,
        width: 180
    },
    newsletterText: {
        fontSize: 18,
        fontFamily: fonts.textFont,
        width: 300
    },
    whoInfo: {
        marginBottom: 60
    },
    newsletterInfo: {
        marginBottom: 60
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
    inputContainer: {
        marginTop: 5
    }
  });

  const CustomTextField = withStyles({
    input: {
        borderRadius: 4,
        backgroundColor: 'white',
        padding: '10px 12px',
    }
  })(InputBase);

export default function WebFooterInfo({ebookURL}) {
    const classes = useStyles();
    const dispatch = useDispatch()

    const emailSignupStatus = useSelector(state => state.emailSignupStatus)

    const [validEmail, setValidEmail] = useState(false);
    const [textInput, setTextInput] = useState("");

    
    useEffect(() => {
        if (emailSignupStatus === 'success') {
            setTextInput("")
        }
    }, [emailSignupStatus])

    const clickHandler = () => {
        dispatch(actionCreators.postNewsletterEmail(textInput))
        // firebase.initializeApp({
        //     storageBucket: "gs://big-bud-bookkeeping.appspot.com",
        // });
        // const storage = firebase.storage();
        // storage.ref('Close_Year_End_Like_a_Pro_2020.pdf').getDownloadURL().then(url => {
        //     var xhr = new XMLHttpRequest();
        //     xhr.responseType = 'blob';
        //     xhr.onload = function(event) {
        //         var blob = xhr.response;
        //         saveAs(blob, 'thefile.csv')
        //     };
        //     xhr.open('GET', url);
        //     xhr.send();
        // })
    }

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
    return(
        <Grid container item direction="row" justify="space-around">
        <Grid container item direction="row" alignItems="center" justify="space-evenly" xs={10} sm={4} wrap="nowrap" className={classes.newsletterInfo}>
        <Grid item className={classes.newsletterQuestion}>Want to stay in the loop?</Grid>
            <Divider orientation="vertical" className={classes.divider}></Divider>
            <Grid item container direction="column" className={classes.newsletterText}>
                <Grid>Sign up for our Tuesday Top Tips email newsletter!</Grid>
                <Grid className={classes.inputContainer}>
                    <CustomTextField placeholder="Email" value={textInput} onChange={e => handleChange(e)} className={classes.input} label="" variant="filled" />
                    <Button disabled={!validEmail} className={classes.signUpButton} onClick={clickHandler}>Subscribe</Button>
                </Grid>
            </Grid>
        </Grid>
        <Grid container item direction="row" alignItems="center" justify="space-evenly" xs={10} sm={4} wrap="nowrap"  className={classes.whoInfo}>
            <Grid item className={classes.whoQuestion}>Who do we help?</Grid>
            <Divider orientation="vertical" className={classes.divider}></Divider>
            <Grid item className={classes.whoText}>
                Our primary focus is the Oklahoma cannabis industry but we assist clients in multiple industries all across the US.
            </Grid>
        </Grid>
    </Grid>
    )
}