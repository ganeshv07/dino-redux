import * as React from 'react';
import { useDispatch } from 'react-redux';
import app_actions from '../../actions';
import { appContext } from './../../providers/index';
import { useNavigate } from 'react-router';

export default function Logout(props:any) {

    const dispatch = useDispatch();
    const contextType = React.useContext(appContext);
    const navigate = useNavigate();


    const clearLocalStorage = () => {
        dispatch(app_actions.user_actions.loginUserDetails(undefined));
        dispatch(app_actions.user_actions.signOut());
        contextType.updateAuthStatus(false);
        navigate('/');
    };

    React.useEffect(() => {
        clearLocalStorage();
    }, []);

    return null;
}
