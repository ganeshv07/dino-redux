import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chartContainer: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        chartBox: {
            // width: 700,
            // height: 400,
            paddingRight:10,
            width: '100%',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #f7f7f7',
            borderRadius: '11px',
            boxShadow: '4px 4px 5px 2px rgba(196, 190, 190, 0.5)',
            backgroundColor: '#fff',
            '& .recharts-wrapper': {
                position: 'unset',
                '& .recharts-surface': {
                    viewBox: '0 0 440 240 !important',
                    // position: 'absolute',
                    // right: '40%',
                    // top: '-15%'
                },
               
            }
        },
        ChartSubHeading: {
            padding: '8px',
            textAlign: 'center'
        },
        ChartLabelText: {
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'Gotham',
            color: '#fe5850'
        },
       
    })
);

export default useStyles;
