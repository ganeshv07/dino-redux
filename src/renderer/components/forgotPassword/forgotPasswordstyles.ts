import { createStyles, fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_theme) => createStyles({
  root: {
    height: '100vh',
    fontFamily: "'PTSans-Regular', 'sans-serif'",
    overflow: 'hidden'
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#fff4f4',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: _theme.spacing(0, 8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    justifyContent: 'center'
  },
  dinoLogo: {
    position: 'absolute',
    top: '50px',
    left: '70px'
  },
  logo: {
    height: 73,
    width: 280
  },
  login_bg: {
    height: '50%',
    width: '90%'
  },

  flexLines: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#7f7f7f'
  },
 
  rightContainer: {
    backgroundColor:'#fff4f4'
  },
  forgotPasswordContainer: {
    padding: '20px',
    minHeight:'30%',
    width:'80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  TitleContainer: {
    paddingBottom: '20px',
    '& h2':{
      margin: 0
    }
  },
 
  errorText: {
    padding: '4px',
    color: '#f44335',
    paddingLeft: 12,
    fontFamily: 'PTSans-Bold'
  },
  submit: {
    width: '-webkit-fill-available',
    marginTop: '20px',
    marginBottom: '20px',
    backgroundColor: '#fe5850',
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 900,
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontFamily: "'PTSans-Bold', 'sans-serif'",
    padding: '10px',
    '&:hover': {
      background: '#004899'
    }
  },
  loginBack: {
    fontFamily: "'PTSans-Regular', 'sans-serif'",
    fontSize: '14px',
    color: '#7f7f7f',
    cursor: 'pointer',
    marginTop: '20%'
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
otpFooter: {
    borderTop: '1px solid #f0f0f0',
    paddingTop: 10,
    gap: 15,
    marginLeft: '0 !important',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 0,
    width: '100%',
    bottom: 10
},
uploadButton: {
    width: 90,
    height: 36,
    borderRadius: 10,
    border: 'solid 2px #49a461',
    backgroundColor: '#edf7f0',
    color: '#49a461',
    fontSize: 12,
    marginRight: 10,
    fontFamily: 'PTSans-Bold, sans-serif',
    '&:hover': {
      backgroundColor: '#edf7f0',
      color: '#49a461',
      outline: 'none'
    }
  },
  blueButton: {
    height: '36px',
    borderRadius: '10px',
    border: 'solid 2px #0054a5',
    backgroundColor: '#e7f4fe',
    fontSize: 12,
    fontFamily: 'PTSans-Bold, sans-serif',
    color: '#0054a5',
    '&:hover': {
      backgroundColor: '#e7f4fe',
      color: '#0054a5',
      outline: 'none'
    }
  },
  cancelButton: {
    background: 'transparent',
    boxShadow: 'none',
    color: '#242424',
    fontSize: 12,
    fontFamily: 'PTSans-Bold, sans-serif',
    marginRight: 10,
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#242424',
      outline: 'none'
    }
  },

  changePasswordcontainer: {
    width: '60%',
  },

  changePasswordForm: {
    width:'100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },
  Input: {
    color: '#3e3e45',
    fontSize: 14,
    fontFamily: "'PTSans-Regular', 'sans-serif'",
    border: '1px solid #0054a5',
    width: '100%',
    borderRadius: 4,
    padding: 5,
    margin: '10px auto'
  },
 
  visibleHidden: {
    visibility: 'hidden'
  }
}));

export default useStyles;
