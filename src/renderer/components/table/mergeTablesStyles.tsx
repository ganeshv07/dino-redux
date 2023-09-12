import { createStyles, makeStyles } from '@material-ui/core';
import { Theme } from '@mui/material/styles/createTheme';

//Custom user styles
const genericStyles = makeStyles((appTheme: Theme) => createStyles({

    dialogContainer: {
        margin: '0px !important',
        borderRadius: '10px !important',
        boxShadow: '0 2px 20px 0 rgba(0, 0, 0, 0.1)',
        '& .MuiDialog-paper': {
            margin: '0px !important'
        },
        '& .MuiDialog-paperWidthSm': {
            maxWidth: '712px',
            // minHeight: '390px',
            // maxHeight: '588px',
            borderRadius: '24px',
            backgroundColor: '#fff',
            overflow: 'visible'
        },
        '& .MuiPaper-rounded': {
            borderRadius: '10px !important'
        },
        '& .react-datepicker-popper': {
            zIndex: '2'
        },
        '& .MuiInputLabel-filled': {
            color: '#7d7d7d',
            fontSize: '12px',
            fontFamily: 'PTSans-Bold'
        },
        '& .MuiTextField-root': {
            border: '1px solid #b5b5b5',
            borderRadius: '10px'
        },
        '& .MuiFilledInput-root': {
            borderRadius: '10px',
            border: 'none',
            background: '#fff',
            '& .MuiFilledInput-input': {
                color: '#3e3e45',
                fontSize: '16px',
                fontFamily: 'PTSans-Bold',
                background: '#fff',
                paddingLeft: '10px',
                borderRadius: '10px'
            }
        },
        '& .MuiFormHelperText-root': {
            color: '#f44335',
            // paddingLeft: 12,
            // marginTop: 0,
            fontFamily: 'PTSans-Bold'
        },
        '& .MuiFilledInput-adornedEnd': {
            paddingRight: 0
        }
    },
    popupHeader: {
        background: '#eceff4'
    },
    popupContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '15px'
    },
    popupFooter: {
        display: 'flex',
        justifyContent: 'center',
        padding: '15px',
        backgroundColor: '#fe3f3f'
    },
    saveButton: {
        color: '#fff',
        fontSize: '13px',
        fontWeight: 'bold',
        padding: '8px',
        minWidth: '100px',
        width: 'auto',
        backgroundColor: '#fe3f3f',
        border: '2px solid #0054a5',
        borderRadius: '18px',
        '&:hover': {
            boxShadow: '0 4px 6px 0 rgba(0, 72, 153, 0.2)',
            backgroundColor: '#004899'
        }
    },
    titleText: {
        textAlign: 'center',
        fontFamily: 'PTSans-Bold',
        fontSize: 18,
        color: '#0052a8'
    },
    margin: {
        width: '100%',
        margin: '0px !important',
        '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
            color: '#7d7d7d',
            fontSize: '14px',
            fontFamily: 'PTSans-Bold'
        },
        '& .MuiFilledInput-underline:before': {
            borderBottom: 'none !important'
        }
    },
    textFieldLabel: {
        color: '#3e3e45',
        fontSize: '14px',
        fontFamily: 'PTSans-Bold'
    },
   
  
}));

export default genericStyles;
