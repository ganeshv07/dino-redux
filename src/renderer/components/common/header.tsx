import { AppBar, Box, ClickAwayListener, Divider, Grid, Grow, IconButton, Menu, MenuItem, MenuList, Paper, Popper, Toolbar, Typography } from '@material-ui/core';   //MenuList, Paper, Popper,Grow, ClickAwayListener,
import AccountCircle from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import app_actions from '../../actions';
import UserActions from '../../actions/userActions';
import Strings from '../constants/strings';
import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';
import { AppConstants } from '../constants/appConstants';
import { appContext } from '../../providers/index';
import useStyles from './headerStyles';
import Sidebar from './sidebar';
const DinoLogo = require('../../assets/images/Dino.png');
const NotificationIcon = require('../../assets/images/shape.svg');


interface IChangePatientTypeAttribute {
  attributes?: IChangePatientTypeBody;
}

interface IChangePatientTypeBody {
  order_id?: string;
  patient_type?: any;
  invoice_account?: string;
}

export default function Header(props:any) {

  const classes = useStyles(props);
  const navigate = useNavigate();
  let location = useLocation();

  const storeData = useSelector(
    (store: any) => {
      return {
        activeRoute: store.App.activeSideBar,
        loginUserDetails: store.App.loginUserDetails,
      };
    }
  );

  const isSideMenuOpenValue = useSelector((state: any) => {
    return state.App.isSideMenuOpen;
  });

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isPriceEnquiry, setIsPriceEnquiry] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const [responseData, setResponseData] = React.useState({});

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerMenu = () => {
    props.handleSideMenu();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleDashboard = () => {
    dispatch(app_actions.user_actions.activeSideBar(AppConstants.ACTIVE_MODULE.HOME));
    navigate('/dashboard');
  };

  const handleBilling = () => {
    dispatch(app_actions.user_actions.activeSideBar(AppConstants.ACTIVE_MODULE.BILLING));
    navigate('/billing');
  };

  const handleClosePriceEnquiry = () => {
    setIsPriceEnquiry(false);
  };

  const handleSideMenu = () => {
    dispatch(app_actions.user_actions.isSideMenuOpen(!isSideMenuOpenValue));
  };

  const gotoHome = () => {
    handleDashboard();
  };

  const logoutUser = () => {
        dispatch(UserActions.signOut());
        localStorage.clear();
        return navigate('/');
  };

  const onViewProfile = () => {
    setAnchorEl(null);
    navigate('/profile');
  };

  

  const onChangePassword = () => {
    setAnchorEl(null);
    navigate('/change_password');
  };

  

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      style={{ top: 50, right: 0 }}
      onClose={handleMenuClose}
      PaperProps={{
        className: classes.dropdownMenu
      }}
    >
      <MenuItem onClick={onViewProfile} className={classes.dropdownLabel}>
        <Typography component='p' id='profile'>
          {Strings.HEADER.VIEW_PROFILE}
        </Typography>
      </MenuItem>

      {
       
        <MenuItem onClick={onChangePassword} className={classes.dropdownLabel}>
          <Typography component='p' id='change_password'>
            {Strings.HEADER.CHANGE_PASSWORD}
          </Typography>
        </MenuItem>
      }


      <MenuItem onClick={() => { logoutUser(); }} className={classes.dropdownLabel}>
        <Typography component='p' id='logout'>
          {Strings.HEADER.LOGOUT}
        </Typography>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>{Strings.HEADER.PROFILE}</p>
      </MenuItem>
    </Menu>
  );

  function handleUrlNavigation() {
    switch (location.pathname) {
      case '/dashboard':
        dispatch(app_actions.user_actions.activeSideBar(AppConstants.ACTIVE_MODULE.HOME));
        break;
      case '/billing':
        dispatch(app_actions.user_actions.activeSideBar(AppConstants.ACTIVE_MODULE.BILLING));
        break;
      case '/inventory':
        dispatch(app_actions.user_actions.activeSideBar(AppConstants.ACTIVE_MODULE.INVENTORY_MANAGEMENT));
        break;
      case '/reports':
        dispatch(app_actions.user_actions.activeSideBar(AppConstants.ACTIVE_MODULE.REPORTS));
        break;
      case '/accounts':
        dispatch(app_actions.user_actions.activeSideBar(AppConstants.ACTIVE_MODULE.ACCOUNTS));
        break;
      case '/promotions':
        dispatch(app_actions.user_actions.activeSideBar(AppConstants.ACTIVE_MODULE.PROMOTIONS));
        break;
      case '/settings':
        dispatch(app_actions.user_actions.activeSideBar(AppConstants.ACTIVE_MODULE.SETTINGS));
        break;

      default:
        break;
    }
  }

  const isShowHeader = () => {
    const headerModules = [1, 2, 3, 4, 5, 13, 14, 15, 16, 18, 19, 20, 21, 22];
    return headerModules.includes(storeData.activeRoute);
  };

  const isShowAccordian = () => {
    const headerModules = [1, 2, 3, 4, 5, 13, 14, 15, 16, 18, 19, 20, 21, 22];
    return headerModules.includes(storeData.activeRoute);
  };

  React.useEffect(() => {
    handleUrlNavigation();
  }, [storeData.activeRoute]);

 
  const userName = (storeData.loginUserDetails.ownername || "");





  // const setActiveMenuBackground = (menuValue:any) => {
  //   if (isPriceEnquiry) {
  //     return menuValue === AppConstants.ACTIVE_MODULE.PRICE_ENQUIRY ? classes.activeLinkName : classes.linkName;
  //   }
  //   return (menuValue === storeData.activeRoute && !isPriceEnquiry) ? classes.activeLinkName : classes.linkName;
  // };





  // const moreMenuOptionsRender = () => {
  //   return (
  //     <div>
  //       <div>
  //         <IconButton
  //           disableRipple
  //           color='inherit'
  //           ref={anchorRef}
  //           aria-haspopup='true'
  //           aria-controls={open ? 'menu-list-grow' : undefined}
  //           className={classes.linkName}
  //           onClick={handleToggle}>
  //           {'More...'}
  //         </IconButton>
  //       </div>
  //       <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
  //         {({ TransitionProps, placement }) => (
  //           <Grow
  //             {...TransitionProps}
  //             style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
  //           >
  //             <Paper>
  //               <ClickAwayListener onClickAway={handleClose}>
  //                 <MenuList
  //                   id='menu-list-grow'
  //                   autoFocusItem={open}
  //                   className={classes.dropdownMenu}
  //                   onKeyDown={handleListKeyDown}>
  //                   {<MenuItem className={classes.menuItemLabel} onClick={(e) => { handleClose(e); }}>{'1'}</MenuItem>}
  //                   { <MenuItem className={classes.menuItemLabel} onClick={(e) => { handleClose(e);  }}>{'2'}</MenuItem>}
  //                   { <MenuItem className={classes.menuItemLabel} onClick={(e) => { handleClose(e); }}>{'3'}</MenuItem>}
  //                 </MenuList>
  //               </ClickAwayListener>
  //             </Paper>
  //           </Grow>
  //         )}
  //       </Popper>
  //     </div>
  //   );
  // };

  return (
    <React.Fragment>
      <div className={classes.grow}>
        <AppBar position='static' className={classes.menuBar}>
          {
            isSideMenuOpenValue &&
            <Sidebar
              handleSideMenu={handleSideMenu}
              isPriceEnquiry={isPriceEnquiry}
              logout={logoutUser}
              setIsPriceEnquiry={setIsPriceEnquiry}
              handleClosePriceEnquiry={handleClosePriceEnquiry} />
          }
          <Toolbar className={classes.navBar}>
           
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='open drawer'
              disableFocusRipple={true}
              disableRipple={true}
              id='ui__btn__menu'
              onClick={handleDrawerMenu}
            >
              {isSideMenuOpenValue ? <CloseIcon /> : <DehazeIcon />}

            </IconButton>
            <div className={`${classes.search} ${classes.centerItems}`}>
              <img className={`${classes.logo}`} alt='logo' src={DinoLogo} onClick={gotoHome} />
              <Typography className={classes.default}>
                {process.env.VERSION}
              </Typography>
            </div>

            <div className={classes.grow} />
           
            <div className={classes.sectionDesktop}>
              <img src={NotificationIcon} className={classes.notificationIcon} />
              <IconButton
                edge='end'
                aria-label='account of current user'
                disableRipple
                aria-controls={menuId}
                aria-haspopup='true'
                onClick={handleProfileMenuOpen}
                color='inherit'
                className={classes.Profile}
              >
              <AccountCircle className={classes.profileIcon}/>
              </IconButton>
            </div>
          </Toolbar>
         

          {/* {isShowHeader() ?
            <div>
              <Grid className={classes.downMenu}>
                <Grid item xs={12} sm={6} md={4} lg={4} className={classes.titleMain}>
                  <Box className={classes.headerBox} >
                    <Typography className={classes.headerTitle}>{"Title"}</Typography>
                  </Box>
                </Grid>
                <Grid item className={classes.headerMenu}>
                  {
                   
                    <div>
                      <IconButton
                        disableRipple
                        color='inherit'
                        aria-label='registration_trends'
                        className={setActiveMenuBackground(AppConstants.ACTIVE_MODULE.HOME)}
                        onClick={handleDashboard}
                      >
                        {Strings.HEADER.HOME}
                      </IconButton>
                      {storeData.activeRoute === AppConstants.ACTIVE_MODULE.HOME  && (
                        <Divider className={classes.underLine} />
                      )}
                    </div>
                  }
                 
                  {
                   
                    <div>
                      <IconButton
                        aria-label='registration'
                        disableRipple
                        color='inherit'
                        className={setActiveMenuBackground(AppConstants.ACTIVE_MODULE.BILLING)}
                        onClick={handleBilling}
                      >
                        {Strings.HEADER.BILLING}
                      </IconButton>
                      {storeData.activeRoute === AppConstants.ACTIVE_MODULE.BILLING  && (
                        <Divider className={classes.underLine} />
                      )}
                    </div>
                  }

                  {moreMenuOptionsRender()}
                </Grid>
              </Grid>
            </div>
            :
            null
          } */}

        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </React.Fragment >
  );
}
