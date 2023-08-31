import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tableContainer: {
            padding: '10px 0px',
            width: '100%',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #f7f7f7',
            borderRadius: '11px',
            boxShadow: '4px 4px 5px 2px rgba(196, 190, 190, 0.5)',
            backgroundColor: '#fff'
        },
        tableSubHeading: {
            textAlign: 'center',
            padding: '8px'
        },
        tableLabelText: {
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'Gotham',
            color: '#fe5850'
        },
        tableItem: {
            padding: '4px 16px 4px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        tableItemLabelText : {
            fontSize: '1.1rem',
            fontFamily: 'Gotham',
            color:' #0e4061'
        },
        tableItemPriceText : {
            fontSize: '1.1rem',
            fontWeight: 'bold',
            fontFamily: 'Gotham',
            color: '#0e4061'

        },

        tableRupeeItem: {
            padding: '10px 10px 0px 0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end'
        },

        rupeeImage: {
        width: '50px'
        }
    })
);

export default useStyles;
