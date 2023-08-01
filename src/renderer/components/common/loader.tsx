import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './loaderStyles';

export default function Loader(props:any) {
    const classes = useStyles(props);

    const activeHTTPRequests = useSelector(
        (state: any) => state.App.activeHTTPRequests
    );

    return (
        <div>
            <Backdrop className={classes.backdrop} open={activeHTTPRequests > 0}>
                <CircularProgress color='inherit' />
            </Backdrop>
        </div>
    );
}
