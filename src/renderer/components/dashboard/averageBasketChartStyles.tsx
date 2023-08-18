import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chartContainer: {
            height: '92%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        chartBox: {
            // width: 700,
            // height: 400,
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid #0054a5',
            borderRadius: '5px',
            '& .recharts-wrapper': {
                position: 'unset',
                '& .recharts-surface': {
                    // viewBox:'0 0 450 190',
                    // position: 'absolute',
                    // right: '40%',
                    // top: '-15%'
                },
                '& div.recharts-legend-wrapper': {
                    right: '10%'
                    // display: 'flex',
                    // flexDirection: 'column',
                    // alignItems: 'end',
                    // justifyContent: 'end',
                    // right: '10%',
                    // bottom: '50%'
                }
            }
        },
        ChartSubHeading: {
            padding: '15px'
        },
        ChartLabelText: {
            fontSize: '18px',
            fontFamily: 'PTSans-Bold'
        },
        creditAmountText: {
            color: '#0054a5',
            fontSize: '20px',
            fontFamily: 'PTSans-Bold'
        },
        ChartAmount: {
            display: 'flex',
            padding: '5px'
        },
   
        yellowColor: {
            color: '#F5B517'
        },
    })
);

export default useStyles;
