import { red } from '@material-ui/core/colors';
import { createStyles, fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_theme) => createStyles({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '7px'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#0054a5 !important',
      borderRadius: '2px'
    }
  },
  defaultinput: {
    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 1000px white inset!important'
    }
  },
  typography: {
    fontFamily: "'PTSans-Regular', 'sans-serif'"
  },
  root: {
    height: '100vh',
    position: 'relative',
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
  logo: {
    height: 73,
    width: 280
  },
  dinoLogo: {
    width: '120px',
    height: '45px',
    position: 'absolute',
    top: '50px',
    left: '60px'
  },
  
  login_bg: {
    height: '50%',
    width: '90%'
  },
  disableButton: {
    backgroundColor: 'rgba(0,72,153,0.6)',
    '&:hover': {
      background: 'rgba(0,72,153,0.6)'
    }
  },
  TileConnect: {
    color: '#0054a5',
    marginTop: _theme.spacing(3),
    fontSize: 14,
    fontFamily: 'PTSans-Bold'
  },
  TitleWelcome: {
    color: '#7f7f7f',
    marginTop: _theme.spacing(3),
    fontSize: 14,
    textAlign: 'center',
    fontFamily: "'PTSans-Regular', 'sans-serif'",
    marginBottom: 10
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
  signinContainer: {
    padding: '30px',
    minHeight:'40%',
    width:'80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  TitleContainer: {
    paddingTop: '20px',
    '& h2':{
      margin: 0
    }
  },
  signinForm: {
    width:'60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },
  TextInput: {
    '&.MuiTextField-root': {
      width: '100%',
      margin: '10px',
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-input': {
      height: '1em',
    },
    '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
       color: '#000000',
    },
    '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fe5850'
    },
    '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fe5850'
    }
  },
  PasswordInput: {
    '&.MuiTextField-root': {
      width: '100%',
      margin: '10px',
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-input': {
      height: '1em',
    },
    '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
      color: '#000000',
   },
  },
  passwordIcon: {
    color: '#fe5850',
    fontSize: '22px',
    cursor: 'pointer'
  },
  customInputLabel: {
    "& legend": {
      visibility: "visible"
    }
  },

  Input: {
    color: '#3e3e45',
    height: 30,
    fontSize: 14,
    fontFamily: "'PTSans-Regular', 'sans-serif'",
    border: '1px solid #0054a5',
    width: '100%',
    borderRadius: 4,
    padding: 5,
    margin: '10px auto'
  },
  errorText: {
    padding: '4px',
    color: '#f44335',
    paddingLeft: 12,
    fontFamily: 'PTSans-Bold'
  },
  footerText: {
    margin : '4px !important'
  },
  submit: {
    width: '-webkit-fill-available',
    backgroundColor: '#fe5850',
    marginTop: '20px',
    marginBottom: '20px',
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
    marginTop: '8%'
  },
  visibleHidden: {
    visibility: 'hidden'
  }
}));

export default useStyles;
