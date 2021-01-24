import { makeStyles } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import colors from '../styles/colors';


const useStyles = makeStyles(theme => ({
    success: {
      backgroundColor: colors.softPurple,
      color: 'white'
    },
    failure: {
      backgroundColor: '#DD412D',
      color: 'white'
    }
  }));

export default function SnackBar() {
    const classes = useStyles();

    const emailSignupStatus = useSelector(state => state.emailSignupStatus)
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("")

    useEffect(() => {
        if (emailSignupStatus === 'success') {
            setOpenSnackbar(true)
            setSnackbarMessage("Email Successfully Subscribed!")
        }
        else if (emailSignupStatus === 'failure') {
            setOpenSnackbar(true)
            setSnackbarMessage("Failed To Subscribe Email.")
        }
        else {
            setOpenSnackbar(false)
            setSnackbarMessage("")
        }
    }, [emailSignupStatus])

    return (
        <Snackbar
            ContentProps={{
                classes: {
                root: emailSignupStatus === 'success' ? classes.success : classes.failure
                }
            }}
            open={openSnackbar}
            message={snackbarMessage}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            onClose={() => {setOpenSnackbar(false)}}
            autoHideDuration={5000}
        />
    )
}