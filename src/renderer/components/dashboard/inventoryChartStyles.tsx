import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chartContainer: {
            width:'100%',
            height: '92%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        chartBox: {
            width:'100%',
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
            textAlign: 'center',
            padding: '8px',
        },
        ChartLabelText: {
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'Gotham',
            color: '#fe5850'
        },
        ChartDineColor: {
            width:'16px',
            height: '16px',
            padding: '1px',
            background: '#930700',
            color: '#930700'
        },
        ChartTakeAwayColor: {
            width:'16px',
            height: '16px',
            padding: '1px',
            background: '#fe5850',
            color: '#fe5850'
        },
        ChartDeliveriyColor: {
            width:'16px',
            height: '16px',
            padding: '1px',
            background: '#fff4f4',
            color: '#fff4f4'
        },
       
        creditAmountText: {
            color: '#0054a5',
            fontSize: '20px',
            fontFamily: 'PTSans-Bold'
        },
        ChartTitles: {
            display: 'flex',
            alignItems: 'center',
            padding: '5px'
        },
        ChartTitle: {
            color: '#0e4061',
            paddingLeft: '8px',
            fontFamily: 'Gotham'

        },
    })
);

export default useStyles;
