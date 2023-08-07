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
    height:'50%',
    width:'80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  signinForm: {
    width:'50%',
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
  errorText: {
    padding: '4px',
    color: '#f44335',
    paddingLeft: 12,
    fontFamily: 'PTSans-Bold'
  },
  visibleHidden: {
    visibility: 'hidden'
  }
}));

export default useStyles;
