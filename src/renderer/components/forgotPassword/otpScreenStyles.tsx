import { createStyles, makeStyles, Theme } from '@material-ui/core';

//Custom user styles
const useStyles = makeStyles((appTheme: Theme) => createStyles({
    otpContent: {
        textAlign: 'center'
    },
    lplPopupMain: {
        width: '432px',
        // height: '312px',
        '&.MuiTab-textColorPrimary.Mui-selected': {
            background: '#ffcb4e',
            minHeight: '38px',
            color: '#242424'
        },
        '&.MuiAppBar-colorDefault': {
            boxShadow: 'none',
            background: '#fff'
        },
        '& .MuiFormHelperText-root': {
            color: '#f44335',
            paddingLeft: 12,
            marginTop: 0,
            fontFamily: 'PTSans-Bold'
        }
    },
    headerBg: {
        background: '#0052a8'
    },
    headerSubTitle: {
        color: '#fff',
        fontFamily: 'PTSans-Regular',
        fontSize: '12px'
    },
    headerTitle: {
        color: '#fff',
        fontFamily: 'PTSans-Bold',
        fontSize: '16px'
    },
    contentContainer: {
        padding: '5px'
    },
    otpMain: {
        display: 'flex',
        margin: '16px 0px',
        '& input': {
            height: '60px',
            borderRadius: '10px',
            border: 'solid 1px #0054a5',
            backgroundColor: '#ffffff',
            textAlign: 'center',
            width: '60px',
            margin: '0px 10px',
            fontSize: '20px',
            fontFamily: 'PTSans-regular',
            boxShadow: '0px 1px 12px 0px rgba(0, 84, 165, 0.53)',
            '&:focus': {
                outline: 'none'
            }
        }
    },
    otpContainer: {
        width: '100%',
        justifyContent: 'space-evenly'
    },
    otpInput: {
        height: 54,
        fontSize: 24,
        color: '#0052a8',
        borderRadius: '5px',
        width: '54px !important',
        fontFamily: 'PTSans-Bold',
        border: 'solid 1px #7f7f7f',
        '&:focus': {
            outline: 'none'
        }
    },
    cancelBtn: {
        color: '#242424',
        fontSize: '12px',
        fontFamily: 'PTSans-Bold',
        background: 'transparent',
        boxShadow: 'none',
        '&:hover': {
            background: 'transparent',
            color: '#242424',
            boxShadow: 'none'
        }
    },
    addBtn: {
        color: '#49a461',
        fontSize: '12px',
        fontFamily: 'PTSans-Bold',
        borderRadius: '18px',
        marginLeft: '15px',
        width: '90px',
        height: '35px',
        background: '#edf7f0',
        border: '2px solid #49a461',
        '&:hover': {
            background: '#e7f4fe',
            color: '#49a461',
            boxShadow: 'none'
        }
    },
    otpResend: {
        height: '24px'
    }
}));

export default useStyles;
