import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({

  grow: {
    flexGrow: 1,
    zIndex: 3,
    position: 'relative',
    '@media screen and (max-width: 376px)': {
      '& .MuiAccordionDetails-root': {
        padding: '0'
      }
    },
    '& .MuiSelect-select': {
      color: '#fff',
      fontFamily: 'PTSans-Bold',
      fontSize: '14px'
    },
    '& .MuiSelect-icon': {
      color: '#fff'
    },
    '& .MuiInput-underline:before': {
      borderBottom: 'none'
    },
    '& .MuiList-padding': {
      padding: '0px important'
    },
    '& .MuiPopover-paper': {
      backgroundColor: 'purple !important'
    },
    '& .MuiMenu-paper': {
      backgroundColor: 'purple !important'
    }
  },

  headerDropdown: {
    '& .MuiMenu-paper': {
      top: '14px !important'
    }
  },
  dropdownLabel: {
    fontFamily: 'PTSans-Bold',
    fontSize: '14px',
    padding: '10px',
    borderTop: 'solid 1px #979797',
    '& p': {
      color: '#fff',
      fontSize: '14px',
      fontFamily: 'PTSans-Bold'
    }
  },
  menuItemLabel: {
    fontFamily: 'PTSans-Bold',
    fontSize: '14px',
    padding: '10px',
    borderBottom: 'solid 1px #979797'
  },
  menuItemLastLabel: {
    fontFamily: 'PTSans-Bold',
    fontSize: '14px',
    padding: '10px'
  },
  dropdownMain: {
    width: '200px'
  },
  flexStart: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  flexColumn: {
    flexDirection: 'column'
  },
  notificationIcon: {
    color: '#0e4061',
    marginRight: '15px',
  },

  logoutIcon: {
    color: '#fff',
    fontSize: '18px',
    marginLeft: '10px'
  },
  dropdownMenu: {
    color: '#fff',
    backgroundColor: '#0052a8',
    fontFamily: 'PTSans-Bold',
    fontSize: '14px',
    '& .MuiMenu-list': {
      padding: '0px',
      minWidth: '182px',
      maxWidth: '250px'
    }
  },
  flexEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  labName: {
    fontFamily: 'PTSans-Bold',
    fontSize: '14px',
    color: '#fff',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },
  labCode: {
    fontFamily: 'PTSans-Bold',
    fontSize: '12px',
    color: '#fff',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },

  menuBar: {
    background: '#fff',
    position: 'fixed',
    top: 0,
    boxShadow: 'none'
  },
  navBar: {
    paddingRight: 0,
    background: '#f7f7f7',
    '& .MuiIconButton-root': {
      padding: '3px 6px !important',
      color: '#0e4061',
    }
  },
  logo: {
    height: 50,
    width: 157,
    cursor: 'pointer'
  },
  menuButton: {
    padding: 0,
    minHeight: 64,
    borderRadius: 0,
    minWidth: 60
  },
  register: {
    fontSize: 16,
    fontFamily: 'PTSans-Regular',
    fontWeight: 'bold',
    position: 'relative'
  },
  linkName: {
    color: '#242424',
    fontFamily: 'PTSans-Bold',
    padding: '20px 15px',
    position: 'relative',
    fontSize: 16,
    fontWeight: 'bold',
    '&:hover': {
      background: 'transparent'
    },
    '&:after': {
      content: '',
      position: 'absolute',
      width: 60,
      borderRadius: 2,
      height: 2,
      background: '#ffcb4e'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 14
    }
  },
  activeLinkName: {
    color: '#004899',
    fontFamily: 'PTSans-Bold',
    padding: '20px 15px',
    position: 'relative',
    fontSize: 16,
    fontWeight: 'bold',
    '&:hover': {
      background: 'transparent'
    },
    '&:after': {
      content: '',
      position: 'absolute',
      width: 60,
      borderRadius: 2,
      height: 2,
      background: '#ffcb4e'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 14
    }
  },
  name: {
    fontSize: 14,
    lineHeight: 'normal',
    paddingLeft: 5,
    fontWeight: 'bold',
    width: '100%',
    '@media (max-width: 600px)': {
      display: 'none !important'
    }
  },
  caption: {
    fontSize: 10,
    display: 'block'
  },
  batchDropdown: {
    width: '152px',
    margin: '0px 10px',
    textAlign: 'left',
    borderRadius: '0 !important'
  },
  Profile: {
    margin: '0px 10px',
    textAlign: 'left',
    justifyContent: 'flex-start',
    maxWidth: 250,
    // minWidth: '200px',
    '&:hover': {
      background: 'transparent'
    },
    '@media (max-width: 600px)': {
      maxWidth: 100,
      minWidth: '55px',
      margin: 'auto'
    }

  },
  centerDetailsDropDown: {
    margin: '0px 10px',
    textAlign: 'left',
    justifyContent: 'flex-start',
    maxWidth: '210px',
    minWidth: '200px',
    borderRadius: '0 !important',
    '&:hover': {
      background: 'transparent'
    }
  },
  etrf: {
    fontSize: 16,
    // opacity: .5,
    fontFamily: 'PTSans-Regular',
    fontWeight: 'bold'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  noHover: {
    opacity: 0.5,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  search: {
    position: 'absolute',
    left: '46%',
    width: 'auto',
    display: 'flex',
    '@media (max-width: 600px)': {
      width: '300px',
      display: 'flex',
      justifyContent: 'center'
    }

  },
  centerItems: {
    alignItems: 'center'
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    // display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    '@media (max-width: 768px)': {
      display: 'none !important'
    }
  },
  notification: {
    padding: '12px'
  },
  isShowAccordian: {
    backgroundColor: '#e9f4ff !important',
    '@media (min-width: 700px)': {
      display: 'none !important'
    }
  },
  isShowAccordianBody: {
    backgroundColor: '#e9f4ff !important'
  },
  headerMenu: {
    display: 'flex',
    justifyContent: 'flex-end',
    '@media (max-width: 699px)': {
      display: 'none !important'
    }
  },
  titleMain: {
    color: '#242424',
    fontSize: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'PTSans-Bold'
  },
  headerBox: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    p: 2,
    '@media (max-width: 399px)': {
      flexDirection: 'column'
    }
  },
  headerTitle: {
    padding: 5,
    textAlign: 'center',
    fontSize: '19px',
    fontFamily: 'PTSans-Bold',
    margin: '0px',
    '@media (min-width: 200px) and (max-width: 350px)': {
      padding: 5
    }
  },
  headerCardLimit: {
    padding: 5,
    fontSize: '16px',
    color: '#004899',
    '@media (min-width: 200px) and (max-width: 350px)': {
      padding: 5
    }
  },
  downMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#fff',
    padding: '0px 8px'
    // '& button': {
    //   color: '#242424',
    //   fontSize: '16px',
    //   fontFamily: 'PTSans-Bold',
    //   padding: '20px 15px'
    // }
    // [theme.breakpoints.up('md')]: {
    //     display: 'flex',
    //     justifyContent: 'flex-end'
    //   }

  },

  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  underLine: {
    height: 4,
    backgroundColor: '#0052a8',
    margin: '-10px 4px',
    borderRadius: '4px'
  },
  userDropdown: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  default: {
    color: '#ffcb4e',
    fontSize: '10px',
    fontFamily: 'PTSans-Bold',
    textAlign: 'right',
    '@media (min-width: 200px) and (max-width: 350px)': {
      display: 'none'
    }
  },
  downArrow: {
    // position: 'absolute',
    top: '24px',
    right: '0px',
    fontSize: '8px'
  },
  logoutArrow: {
    top: '18px',
    fontSize: '8px'
  },
  logoutArrowPa: {
    paddingLeft: '10px'
  },

  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  cplLogo: {
    height: 50,
    marginRight: '8px'
  },
  inputFont: {
    fontSize: 14
  },
  input: {
    flex: 1,
    fontSize: 14,
    padding: 6,
    marginLeft: theme.spacing(1)
  },
  iconButton: {
    padding: 10,
    float: 'right'
  },
  dropdownContainer: {
    minWidth: '250px',
    width: 'auto',
    padding: '5px',
    maxHeight: '100%',
    '& ::-webkit-scrollbar-thumb': {
      backgroundColor: '#fff !important'
    },
    '& ::-webkit-scrollbar': {
      width: '4px'
    }
  },
  listcontainer: {
    marginTop: '5px',
    maxHeight: '340px',
    overflow: 'auto'
  },
  listpadding: {
    padding: '5px'
  }
})
);

export default useStyles;
