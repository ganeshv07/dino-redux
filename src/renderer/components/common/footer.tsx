import React from 'react';
import useStyles from './footerstyles';


export default function footer(props:any) {
    const classes = useStyles(props);

  return (
    <div className={classes.footerContainer}>
    <h3 className={classes.footerTitle} >CONTACT US</h3>
    <span className={classes.footerDescription}>Call: +91 9971452453  E-mail: support@nukkadshops.com</span> 
    </div>
  )
}



// import * as React from 'react';
// import useStyles from './loaderStyles';

// export default Greetings(): JSX.Element {
//     // const classes = useStyles(props);
//     return (
//        
//     );
// }
