const Constants = {
    SHOW_LOADER: 'SHOW_LOADER',
    HIDE_LOADER: 'HIDE_LOADER',
    LOGIN_DETAILS: 'LOGIN_DETAILS',
    CONFIG_DETAILS: 'CONFIG_DETAILS',
    SIGN_OUT: 'SIGN_OUT',
    UPDATE_AUTH_TOKEN: 'UPDATE_AUTH_TOKEN',
    IS_SIDE_MENU_OPEN: 'IS_SIDE_MENU_OPEN',
    IS_OPEN_ALERT_MODEL: 'IS_OPEN_ALERT_MODEL',
    ACTIVE_SIDEBAR: 'ACTIVE_SIDEBAR',
    IS_OPEN_SUCCESS_MODEL: 'IS_OPEN_SUCCESS_MODEL',
  };
  
  const loginUserDetails = (data: any) => ({
    type: Constants.LOGIN_DETAILS,
    payload: data
  });
  
  const showLoader = () => ({
    type: Constants.SHOW_LOADER
  });
  const hideLoader = () => ({
    type: Constants.HIDE_LOADER
  });
  
  const configDetails = (data: any) => ({
    type: Constants.CONFIG_DETAILS,
    payload: data
  });
  

  const updateAuthToken = (data: any) => ({
    type: Constants.UPDATE_AUTH_TOKEN,
    payload: data
  });
  
  const signOut = () => ({
    type: Constants.SIGN_OUT
  });
  
  const isSideMenuOpen = (data: any) => ({
    type: Constants.IS_SIDE_MENU_OPEN,
    payload: data
  });
  
  const handleAlertModel = (data: any) => ({
    type: Constants.IS_OPEN_ALERT_MODEL,
    payload: data
  });
  
  const activeSideBar = (data: any) => ({
    type: Constants.ACTIVE_SIDEBAR,
    payload: data
  });
  
  const handleSuccessModel = (data: boolean) => ({
    type: Constants.IS_OPEN_SUCCESS_MODEL,
    payload: data
  });
  
 
  
  export default {
    Constants,
    showLoader,
    hideLoader,
    loginUserDetails,
    configDetails,
    updateAuthToken,
    signOut,
    isSideMenuOpen,
    handleAlertModel,
    activeSideBar,
    handleSuccessModel,
  };
  