import { Box, Collapse, Drawer, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import * as React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch, useSelector } from 'react-redux';
import app_actions from '../../actions';
import { AppConstants } from '../constants/appConstants';
import Strings from '../constants/strings';
import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';
import useStyles from './sidebarStyles';

// let Logo = require('../../../assets/images/profile.png');

export default function PermanentDrawerRight(props:any) {
    const classes = useStyles(props);
    const navigate = useNavigate();
    let location = useLocation();
    const [open, setOpen] = React.useState(false);
    const [openProfileMenu, setOpenProfileMenu] = React.useState(false);

    const dispatch = useDispatch();
    const storeData = useSelector(
        (store: any) => {
            return {
                loginUserDetails: store.App.loginUserDetails
            };
        }
    );

    let reqActiveSidebar = useSelector((state: any) => {
        return state.App.activeSideBar;
    });

    const userName = (storeData.loginUserDetails.ownername || "");
    // const employeeType = storeData.loginUserDetails.employee_type || '';

    const closeSideBar = () => {
        props.handleSideMenu();
    };

    // const handlePriceEnquiry = () => {
    //     props.setIsPriceEnquiry(true);
    //     closeSideBar();
    // };

    const handleMenuSelection = (menuType:any) => {
        console.log('menuType',menuType);
        switch (menuType) {
            case AppConstants.ACTIVE_MODULE.HOME:
                navigate('/dashboard');
                closeSideBar();
                break;
            case AppConstants.ACTIVE_MODULE.BILLING:
                navigate('/billing');
                closeSideBar();
                break;

            case AppConstants.ACTIVE_MODULE.INVENTORY_MANAGEMENT:
                navigate('/inventory');
                closeSideBar();
                break;

            case AppConstants.ACTIVE_MODULE.REPORTS:
                dispatch(app_actions.user_actions.activeSideBar(AppConstants.ACTIVE_MODULE.MIS_REPORTS));
                navigate('/reports');
                closeSideBar();
                break;

            case AppConstants.ACTIVE_MODULE.ACCOUNTS:
                dispatch(app_actions.user_actions.activeSideBar(AppConstants.ACTIVE_MODULE.ACCOUNTS));
                navigate('/accounts');
                closeSideBar();
                break;

            case AppConstants.ACTIVE_MODULE.PROMOTIONS:
                dispatch(app_actions.user_actions.activeSideBar(AppConstants.ACTIVE_MODULE.PROMOTIONS));
                navigate('/promotions');
                closeSideBar();
                break;

            case AppConstants.ACTIVE_MODULE.SETTINGS:
                dispatch(app_actions.user_actions.activeSideBar(AppConstants.ACTIVE_MODULE.SETTINGS));
                navigate('/settings');
                closeSideBar();
                break;
                
            default:
                break;
        }
    };

    const handleUrlNavigation = () => {
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
    };

    React.useEffect(() => {
        handleUrlNavigation();
    }, [reqActiveSidebar]);

    return (
        <div className={classes.root}>
            <OutsideClickHandler
                onOutsideClick={() => {
                    closeSideBar();
                }}
            >
                <Drawer
                    variant={'permanent'}
                    className={`${classes.drawer}`}
                    ModalProps={{
                        onBackdropClick: closeSideBar
                    }}
                    id='ui__sidebar'
                    // classes={classes.drawerPaper}
                    anchor='left'>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            p: 2,
                            paddingBottom: 0
                        }}
                    >
                        <AccountCircleIcon style={{ fontSize: '40px' }} />
                        <Typography color='textPrimary' variant='h2'>
                            {"Dino"}
                        </Typography>
                        
                    </Box>

                    <Box>
                        <List className={classes.navBar}>
                            
                           
                                <ListItem className={reqActiveSidebar === AppConstants.ACTIVE_MODULE.HOME ? classes.active : classes.transparent}
                                    button onClick={() => { handleMenuSelection(AppConstants.ACTIVE_MODULE.HOME); }}>
                                    <Typography component='span' className={`${classes.sideMenuIcon} ${'icon-dashboard'}`} />
                                    <ListItemText primary={Strings.HEADER.HOME} />
                                </ListItem>
                            
                        
                                <ListItem className={reqActiveSidebar === AppConstants.ACTIVE_MODULE.BILLING ? classes.active : classes.transparent}
                                    button onClick={() => { handleMenuSelection(AppConstants.ACTIVE_MODULE.BILLING); }}>
                                    <Typography component='span' className={`${classes.sideMenuIcon} ${'icon-batch'}`}></Typography>
                                    <ListItemText primary={Strings.HEADER.BILLING} />
                                </ListItem>
                          
                                <ListItem className={reqActiveSidebar === AppConstants.ACTIVE_MODULE.INVENTORY_MANAGEMENT ? classes.active : classes.transparent}
                                    button onClick={() => { handleMenuSelection(AppConstants.ACTIVE_MODULE.INVENTORY_MANAGEMENT); }}>
                                    <Typography component='span' className={`${classes.sideMenuIcon} ${'icon-history'}`}></Typography>
                                    <ListItemText primary={Strings.HEADER.INVENTORY_MANAGEMENT} />
                                </ListItem>

                                <ListItem className={reqActiveSidebar === AppConstants.ACTIVE_MODULE.REPORTS ? classes.active : classes.transparent}
                                    button onClick={() => { handleMenuSelection(AppConstants.ACTIVE_MODULE.REPORTS); }}>
                                    <Typography component='span' className={`${classes.sideMenuIcon} ${'icon-history'}`}></Typography>
                                    <ListItemText primary={Strings.HEADER.REPORTS} />
                                </ListItem>

                                <ListItem className={reqActiveSidebar === AppConstants.ACTIVE_MODULE.ACCOUNTS ? classes.active : classes.transparent}
                                    button onClick={() => { handleMenuSelection(AppConstants.ACTIVE_MODULE.ACCOUNTS); }}>
                                    <Typography component='span' className={`${classes.sideMenuIcon} ${'icon-history'}`}></Typography>
                                    <ListItemText primary={Strings.HEADER.ACCOUNTS} />
                                </ListItem>

                                <ListItem className={reqActiveSidebar === AppConstants.ACTIVE_MODULE.PROMOTIONS ? classes.active : classes.transparent}
                                    button onClick={() => { handleMenuSelection(AppConstants.ACTIVE_MODULE.PROMOTIONS); }}>
                                    <Typography component='span' className={`${classes.sideMenuIcon} ${'icon-rupee'}`}></Typography>
                                    <ListItemText primary={Strings.HEADER.PROMOTIONS} />
                                </ListItem>

                                <ListItem className={reqActiveSidebar === AppConstants.ACTIVE_MODULE.SETTINGS ? classes.active : classes.transparent}
                                    button onClick={() => { handleMenuSelection(AppConstants.ACTIVE_MODULE.SETTINGS); }}>
                                    <Typography component='span' className={`${classes.sideMenuIcon} ${'icon-history'}`}></Typography>
                                    <ListItemText primary={Strings.HEADER.SETTINGS} />
                                </ListItem>

                               <ListItem className={`${classes.transparent}`} button onClick={props.logout} style={{ paddingTop: 0, paddingBottom: 0 }}>
                                <Typography component='span' className={`${classes.sideMenuIcon} ${'icon-logout'}`}></Typography>
                                <ListItemText primary='Logout' />
                            </ListItem>
                            <ListItem style={{ paddingTop: 0, paddingBottom: 0 }}>
                                <Typography className={classes.default}> app version {process.env.VERSION}</Typography>
                            </ListItem>
                        </List>
                    </Box>
                   
                </Drawer>
            </OutsideClickHandler>
          
        </div>
    );
}