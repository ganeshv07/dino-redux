import { createStyles, makeStyles } from '@material-ui/core';
import { Theme } from '@mui/material/styles/createTheme';

//Custom user styles
const genericStyles = makeStyles((appTheme: Theme) => createStyles({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '7px',
            height: '7px'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#0054a5 !important',
            borderRadius: '2px'
        }
    },
    cursorNotAllowed: {
        cursor: 'not-allowed !important'
    },
    whiteBg: {
        '& select': {
            backgroundColor: '#fff'
        }
    },
    titleText: {
        fontSize: 20,
        fontFamily: "'PTSans-Regular', 'sans-serif'",
        fontWeight: 'bold'
    },
    flexProps: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    },
    datepickerAlignment: {
        position: 'relative',
        '& .react-datepicker-popper[data-placement^="bottom"]': {
            left: '-35px !important'
        }
    },
    multidatepicker: {
        position: 'relative',
        '& input': {
            width: '-webkit-fill-available',
            height: '22px',
            padding: '8px 10px',
            borderRadius: '5px',
            outline: 'none',
            fontFamily: "'PTSans-Regular', 'sans-serif'",
            boxShadow: 'none',
            border: 'solid 1px #7f7f7f !important',
            fontSize: '14px',
            borderStyle: 'initial'
        },
        '& .DateRangePicker': {
            position: 'absolute',
            left: '10px',
            right: 10,
            top: '51px',
            background: '#fff',
            zIndex: 3,
            fontFamily: "'PTSans-Regular', 'sans-serif'",
            margin: '0px',
            border: 'solid 1px #aeaeae',
            borderEadius: '0.3em',
            '& .DateRangePicker__Month': {
                margin: '0px',
                width: '100%'
                // maxWidth: 275,
                // minWidth: 220
            },
            '& .DateRangePicker__MonthHeader': {
                backgroundColor: '#f0f0f0',
                borderBottom: 'solid 1px #aeaeae'
            },
            '& .DateRangePicker__CalendarSelection': {
                backgroundColor: '#194899',
                border: 'solid 1px #194899'
            },
            '& .DateRangePicker__CalendarSelection--start': {
                borderTopLeftRadius: '0px',
                borderBottomLeftRadius: '0px'
            },
            '& .DateRangePicker__CalendarSelection--end': {
                borderTopRightRadius: '0px',
                borderBottomRightRadius: '0px'
            }
        }
    },
    daterangeicon: {
        position: 'absolute',
        right: '20px',
        top: '5px',
        fontSize: '20px',
        cursor: 'pointer'
    },
    datepickercloser: {
        position: 'absolute',
        top: '7px',
        right: '15px',
        color: '#3e3e45',
        fontSize: '19px',
        marginLeft: '5px'
    },
    pl20: {
        paddingLeft: '20px',
        '& .react-datepicker__close-icon': {
            right: '10px !important'
        }
    },

    ml20: {
        marginLeft: '20px'
    },
    flexendProps: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    nobottom: {
        bottom: '70px!important',
        padding: '10px 0px!important'
    },
    container: {
        flexGrow: 1,
        marginTop: 10,
        borderRadius: 10
    },
    mainContainer: {
        flexGrow: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    maindiv: {
        padding: 20,
        marginTop: 64,
        transition: 'all 0.25s ease',
        background: '#efefef',
        height: 'calc(100vh - 104px)'
    },
    contain: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    pageTitle: {
        color: '#242424',
        fontSize: '20px',
        fontFamily: 'PTSans-Bold'

    },

    tabBG: {
        backgroundColor: '#fff',
        zIndex: 0,
        boxShadow: 'none',
        '& .MuiTab-wrapper': {
            textTransform: 'capitalize',
            fontSize: 14,
            fontFamily: "'PTSans-Bold', 'sans-serif'"
        },
        '& .MuiTab-textColorPrimary.Mui-selected': {
            fontFamily: 'PTSans-Bold',
            color: '#242424!important'
        },
        '& .MuiButtonBase-root.Mui-disabled': {
            pointerEvents: 'initial'
        }
    },

    flexEnd: {
        display: 'flex',
        justifyContent: 'flex-end'
    },

    mt20: {
        marginTop: '20px'
    },

    metric: {
        display: 'grid',
        gridTemplateColumns: 'repeat(13, minmax(50px, 1fr))',
        gridGap: '20px 20px',
        justifyContent: 'center',
        width: '100%',
        ['@media (max-width:1440px)']: {
            gridTemplateColumns: 'repeat(9, minmax(70px, 1fr))'
        }
    },

    tableManagementItem: {
        width: 150,
        height: 100,
        background: 'white',
        borderLeft: '12px solid red',
        borderRadius: 5,
        boxShadow: '4px 4px 5px 2px rgba(196, 190, 190, 0.5)'
    },
    firstrow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50%',
        paddingLeft: 12
    },

    // table right container

    tableContainer: {
        padding: '10px 0px',
        marginTop: '20px',
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
        padding: '4px 16px 4px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    addContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    
        padding: '8px',
        '& :hover': {
          backgroundColor: '#fe5850 !important',
          color: '#FFF',
          fontWeight: 'bold'
        }
      },

      mergeBtn: {
        border: 'solid 3px #fe5850',
        backgroundColor: ' #f6f6f6',
        color: '#0f293a',
        minWidth: '150px',
        paddingLeft: '12px'
      },
      displayFlex: {
        '& .MuiIconButton-root:hover': {
          backgroundColor: 'transparent !important'
        },
        '& .MuiFormHelperText-root': {
          color: '#f44336'
        }
      },
}));

export default genericStyles;
