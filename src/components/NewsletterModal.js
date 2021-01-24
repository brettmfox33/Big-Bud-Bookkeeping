/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button, Dialog, DialogContent, DialogTitle, Grid, IconButton, InputBase, makeStyles, withStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {faTimes} from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../redux/actionCreators';

const CustomTextField = withStyles({
    root: {
        width: "100%"
    },
    input: {
        borderLeft: '1px solid #cccccc',
        borderBottom: '1px solid #cccccc',
        borderTop: '1px solid #cccccc',
        padding: '10px 12px',
        borderRadius: "2px 0px 0px 2px",
        marginBottom: 50,
        width: 220
    }
  })(InputBase);

  const CustomDialogTitle = withStyles((theme) => ({
    root: {
      paddingBottom: 0
    },
    headerContent: {
        marginTop: 50
    }
  }))(DialogTitle);

  const CustomDialogContent = withStyles((theme) => ({
    root: {
      paddingLeft: 70,
      paddingRight: 70
    },
  }))(DialogContent);


  const useStyles = makeStyles({
    signUpButton: {
        backgroundColor: colors.softPurple,
        fontStyle: fonts.textFont,
        fontSize: 12,
        color: 'white',
        height: 41,
        width: 110,
        borderRadius: "0px 2px 2px 0px",
        '&:hover': {
            backgroundColor: '#77519c'
        },
        '&:disabled': {
            color: '#e6e6e6',
            backgroundColor: '#947bad'
        },
    },
    header: {
        fontFamily: fonts.titleFont,
        fontSize: 35,
        marginBottom: 10
    },
    image: {
        maxWidth: 100
    },
    text: {
        color: "#ababab",
        textAlign: "center",
        marginBottom: 30
    },
    closeButton: {
        float: "right",
        "&:hover": {
            backgroundColor: 'white'
        }
    }
  });

export default function NewsletterModal() {
    const classes = useStyles();
    const dispatch = useDispatch()

    const emailSignupStatus = useSelector(state => state.emailSignupStatus)

    const [modalOpen, setModalOpen] = useState(false)
    const [validEmail, setValidEmail] = useState(false);
    const [textInput, setTextInput] = useState("");

    const handleClose = () => {
        setModalOpen(false);
    }

    useEffect(() => {
        if (emailSignupStatus === 'success') {
            setTimeout(300);
            setModalOpen(false);
        }
    }, [emailSignupStatus])

    useEffect(() => {
        setTimeout(2000);
        setModalOpen(true);
    }, [])

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
        <Dialog 
            open={modalOpen}
            maxWidth="sm"
            fullWidth="sm"
            disableBackdropClick={false}
            onClose={handleClose}
        >
            <CustomDialogTitle onClose={handleClose}>
                <IconButton 
                    className={classes.closeButton}
                    onClick={handleClose}
                >
                    <FontAwesomeIcon icon={faTimes}/>
                </IconButton>
                <Grid container direction="column" justify="center" alignItems="center" className={classes.headerContent}>
                    <Grid className={classes.image}>
                        <img alt="Big Bud Bookkeeping Logo And Home Button" src={require('../images/XLogo.png')} className={classes.image}></img>
                    </Grid>
                    <Grid className={classes.header}>
                        Subscribe To Our Newsletter
                    </Grid>
                </Grid>
            </CustomDialogTitle>
            <CustomDialogContent>
                <Grid container direction="column">
                    <Grid className={classes.text}>
                        Join our subscribers to get the latest tips delivered directly to your inbox.
                    </Grid>
                    <Grid container direction="row" justify="center">
                        <Grid>
                            <CustomTextField 
                                placeholder="Email"
                                value={textInput} 
                                onChange={e => handleChange(e)} 
                            />
                        </Grid>
                        <Grid>
                            <Button 
                                className={classes.signUpButton}
                                disabled={!validEmail}
                                onClick={clickHandler}
                            >
                                Subscribe
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </CustomDialogContent>
        </Dialog>

    )
}