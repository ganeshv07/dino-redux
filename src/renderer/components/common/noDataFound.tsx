import * as React from 'react';
import useStyles from './noDataFoundstyles';


export default function NoDataFound(props:any) {
    const classes = useStyles(props);
    return (
        <React.Fragment>
            <div className={classes.mainContainer}>
                <h1>No Data Found</h1>
            </div>
        </React.Fragment>
    );
}
