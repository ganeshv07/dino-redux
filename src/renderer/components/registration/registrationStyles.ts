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
  dinoLogo: {
    width: '120px',
    height: '45px',
    position: 'absolute',
    top: '50px',
    left: '60px'
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
  TitleContainer: {
    paddingBottom: '15px',
    '& h2':{
      margin: 0
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
  registrationContainer: {
    display:'flex',
    minHeight: '40%',
    width:'80%'
  },
  registrationRightContainer: {
    textAlign: 'center',
    padding: '20px',
    height:'100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'

  },
  Input: {
    height:40,
    color: '#3e3e45',
    fontSize: 14,
    fontFamily: "Gotham",
    border: '1px solid #959595',
    width: '100%',
    borderRadius: 4,
    padding: 5,
    marginBottom: '10px'
  },
  errorText: {
    fontSize: 12,
    margin: '0px',
    color: '#f44335',
    fontFamily: 'PTSans-Bold'
  },
  CustomStepLabel: {
  '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active': {
    color: '#fe5850',
  },
  '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
    color: '#fe5850',
  },
  '& .css-1hv8oq8-MuiStepLabel-label.Mui-active': {
    color: '#fe5850',
  },
  '& .css-1hv8oq8-MuiStepLabel-label.Mui-completed': {
    color: '#fe5850',
  }
  },
  verticalLines: {
    borderWidth: '2px',
    borderRight: '1px dashed #959595'
  },
  registrationForms: {
    width: '70%',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection:'column'
  },
  formFooter: {
    padding: '10px',
  },
  visibleHidden: {
    visibility: 'hidden'
  }
}));

export default useStyles;
