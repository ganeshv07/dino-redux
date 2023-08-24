import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      
        hotDealsBox: {
            width: '100%',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #f7f7f7',
            borderRadius: '11px',
            boxShadow: '4px 4px 5px 2px rgba(196, 190, 190, 0.5)',
            backgroundColor: '#fff'
    
        },
        hotDealsSubHeading: {
            textAlign: 'center',
            padding: '1px'
        },
        ChartLabelText: {
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'Gotham',
            color: '#fe5850'
        },
      
        itemImage: {
            width: '50px',
            height: '50px',
            borderRadius: '4px',
            margin: '5px'

        }
       
    })
);

export default useStyles;
