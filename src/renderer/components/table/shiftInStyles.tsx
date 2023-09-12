import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) => createStyles({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '6px'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#0054a5 !important',
            borderRadius: '2px'
        }
    },
    root: {
        padding: 0,
        '& .MuiTextField-root': {
            marginBottom: '20px',
            margin: theme.spacing(1),
            width: '100%'
        },
        '& .react-datepicker__input-container': {
            '& input': {
                width: '80%',
                '&:focus': {
                    outline: 'none'
                }
            }
        },
        '& .MuiFilledInput-root': {
            border: '1px solid #e2e2e1',
            overflow: 'hidden',
            borderRadius: 4,
            backgroundColor: '#fcfcfb',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            '&:hover': {
                backgroundColor: '#fff'
            },
            '&$focused': {
                backgroundColor: '#fff',
                boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
                borderColor: theme.palette.primary.main
            }
        },
        '& .MuiFilledInput-underline:before': {
            borderBottom: 'none !important'
        },
        '& .MuiFilledInput-underline:after': {
            borderBottom: 'none !important'
        },
        '& .MuiFormHelperText-root': {
            color: '#f44335',
            // paddingLeft: 12,
            // marginTop: 0,
            fontFamily: "'PTSans-Regular', 'sans-serif'"
        },
        '& .MuiFab-label': {
            color: '#242424  !important',
            fontFamily: 'PTSans-Bold'
        },
        '& .react-datepicker-wrapper': {
            width: '100%'
        },
        '& .MuiFilledInput-adornedEnd': {
            paddingRight: 0
        }
    },
    dialogContainer: {
        margin: '0px !important',
        borderRadius: '10px !important',
        boxShadow: '0 2px 20px 0 rgba(0, 0, 0, 0.1)',
        '& .MuiDialog-paper': {
            margin: '0px !important'
        },
        '& .MuiDialog-paperWidthSm': {
            maxWidth: '500px',
            borderRadius: '24px',
            backgroundColor: '#fff',
            overflow: 'visible'
        },
        '& .MuiPaper-rounded': {
            borderRadius: '10px !important'
        },
    },
    inputLabel: {
        display: 'block',
        padding: '5px',
        fontFamily: 'PTSans-Bold',
        color: '#3e3e45',
        fontSize: 16
    },
    popupFooter: {
        background: '#fe3f3f',
        display: 'flex',
        justifyContent: 'center',
        padding: '4px'
    },

    uploadButton: {
        color: '#fff !important',
        fontSize: '13px',
        fontWeight: 'bold',
        width: 'auto',
        backgroundColor: '#fe3f3f',
    },
    closeButton: {
        position: 'absolute',
        right: 8,
        top: 7,
        color: '#000'
    },
   
    popupHeader: {
        background: '#fff'
    },


    contentContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'auto'
    },
    titleText: {
        textAlign: 'center',
        fontFamily: 'PTSans-Bold',
        fontSize: 18,
        color: '#0052a8'
    },
    shiftTextHeading: {
        fontWeight: 'bold',
        fontSize: 'smaller'
    },
    shiftEditText: {
        fontSize: 'smaller'
    },
    flexStart: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    flexEnd: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    iconButton: {
        padding: 10,
        color: '#0054a5'
    },
    shiftInEditContainer: {
        marginBottom: '10px',
        display: 'flex',
        textAlign: 'left',
        paddingTop: 10,
        fontFamily: "'PTSans-Regular', 'sans-serif'",
        '& .react-datepicker-popper': {
            zIndex: '2'
        }
    },

    denominationsEditContainer: {
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingTop: 10,
        fontFamily: "'PTSans-Regular', 'sans-serif'",
        '& .react-datepicker-popper': {
            zIndex: '2'
        }
    },
   
    titleMain: {
        display: 'flex',
        background: '#fff',
        color: '#242424'
    },
    addBtn: {
        color: '#fff !important',
        fontSize: '12px',
        marginLeft: '15px',
        width: '90px',
        background: '#fe3f3f !important',
        border: '2px solid #49a461',
        
    },
   
    errText: {
        color: '#e20714',
        fontSize: '12px',
        padding: '5px 0px',
        fontFamily: "'PTSans-Regular', 'sans-serif'"
    },
    close: {
        color: '#e20714',
        fontSize: 15,
        padding: 6,
        cursor: 'pointer'
    },
 
 
    Input: {
        height: 24,
        color: '#3e3e45',
        fontSize: 14,
        fontFamily: "Gotham",
        border: '1px solid #959595',
        width: '90%',
        borderRadius: 4,
        padding: 5,
      },

      tableContainer: {
        margin: '20px 0px',
        width: '100%',
        border: 'solid 1px #0e4061',
        '& thead': {
            height: '30px',
            padding: '8px',
            background: '#f0f0f0'
        },
        '& tbody': {
            background: '#fff',
            '& tr td': {
                textAlign: 'center'
            }
        },
        '& tfoot': {
            background: '#fff',
            '& tr td': {
                textAlign: 'center'
            }
        }
      }
})
);

export default useStyles;
