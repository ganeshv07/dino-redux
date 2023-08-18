import * as React from 'react';
import useStyles from './billingStyles';


export default function Billing(props:any) {
    const classes = useStyles(props);
    return (
        <React.Fragment>
            <div className={classes.mainContainer}>
                <h1>Billing Module</h1>
            </div>
        </React.Fragment>
    );
}
