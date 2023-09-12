import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles';
import { FullscreenExit } from '@mui/icons-material';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: 62,
            height: 'calc(100vh - 62px)',
            overflow: 'auto',
            '& .MuiTextField-root': {
                // margin: theme.spacing(1),
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
                paddingLeft: 12,
                marginTop: 0,
                fontFamily: "'PTSans-Regular', 'sans-serif'"
            },
            '& .react-datepicker-wrapper': {
                width: '100%'
            }
        },
    
        paddingMain: {
            padding: '10px 20px',
            background: '#f6f8fa'
        },
        mainContainer: {
            marginTop: 124,
            height: 'calc(100vh - 124px)',
            overflow: 'auto'
        },
        orderContainer: {
            padding: 8,
            background: '#f6f8fa'
        },
        container: {
            flexGrow: 1,
            marginTop: 10,
            borderRadius: 10
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
        tab: {
            padding: '0.5rem',
            fontFamily: 'Open Sans',
            fontSize: '2rem',
            color: '#0f293a',
        },
        flexCenter: {
            display: 'flex',
            alignItems: 'center'
        },
        searchBorder: {
            margin: '10px 0px',
            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                border: 'transparent'
            },
            '& .MuiOutlinedInput-notchedOutline': {
                border: 'transparent'
            }
        },
        blackText: {
            color: '#3e3e45'
        },
        itemBorder: {
            padding: '5px 0px',
            borderBottom: '1px solid #004899'
        },
        searchField: {
            '& .MuiAutocomplete-inputRoot': {
                padding: '3px !important',
            },
            '& .MuiInputLabel-outlined': {
                transform: 'translate(14px, 15px) scale(1)'
            },
            '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
                transform: 'translate(14px, -6px) scale(0.75)'
            },
            '& .MuiAutocomplete-popupIndicator': {
                visibility: 'hidden !important'
            },
            '& .MuiTextField-root': {
                margin: '0px'
            },
            '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
                paddingLeft: 20
            },
            '& .MuiInputAdornment-positionStart': {
                marginLeft: 8,
                color: 'red'
            },
            '& .MuiInputBase-adornedStart.MuiOutlinedInput-adornedStart.MuiInputBase-adornedEnd.MuiOutlinedInput-adornedEnd': {
                background: '#fff',
                padding: '2px !important',
                border: '1.5px solid #f7f7f7'
    
            },
            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                border: 'transparent'
            },
          
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderWidth: '0px',
                '&:hover': { border: '0' }
            },
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent', '&:hover': { borderWidth: '0' }
            }
        },

        searchLoader: {
            marginRight: 12
        },
        disableInputAutoComplete: {
            maxHeight: 100,
            minHeight: 50,
            height: 'auto',
            borderRadius: 25,
            boxShadow: 'none',
            backgroundColor: '#ececec',
            display: 'flex',
            overflowY: 'auto',
            border: '1px solid #ececec',
            cursor: 'not-allowed',
            '& .MuiInputBase-root': {
                border: 0,
                // width: '90%',
                '& .MuiOutlinedInput-notchedOutline': {
                    borderWidth: 0
                }
            },
            '& .MuiAutocomplete-popupIndicator': {
                visibility: 'hidden !important'
            },
            '& .PrivateNotchedOutline-root-357': {
                borderWidth: 0
            },
            '& .MuiInputBase-input': {
                // padding: '0px 12px'
            },
            '& .MuiInputAdornment-positionStart': {
                marginLeft: 22,
                marginRight: 18,
                color: '#0054A5'
            },
            '& .MuiInputAdornment-positionEnd': {
                marginLeft: 22,
                marginRight: 18,
                color: '#0054A5',
                cursor: 'pointer'
            }
        },

        menuListContainer: {
            marginTop: '10px'
        },

        cardContent: {
            padding: '8px !important'

        },
        secondaryLabelText: {
            margin: '0px'
        },
        cartNoOfItem: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            paddingRight: '10px',
            marginBottom: '10px',
            gap: '8px'
        },
        selectedItemscontainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '10px',
            width: '90%',
            margin: 'auto',

        },
        selectedItem: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#fff',
            boxShadow:'4px 4px 5px 2px rgba(196, 190, 190, 0.5)'
        },

        orderSummaryContainer: {
            padding:'16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '90%',
            margin: 'auto',
            background: '#fff',
            boxShadow:'4px 4px 5px 2px rgba(196, 190, 190, 0.5)'
        },
        orderSummaryItem: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 0px'
        },
        orderSummaryItemLabelText : {
            fontSize: '1.1rem',
            fontFamily: 'Gotham',
            color:' #0e4061'
        },
        orderSummaryItemPriceText : {
            fontSize: '1.1rem',
            fontWeight: 'bold',
            fontFamily: 'Gotham',
            color: '#0e4061'

        },
        saveButton: {
            color: '#fff',
            fontSize: '13px',
            fontWeight: 'bold',
            padding: '8px',
            minWidth: '100px',
            width: 'auto',
            backgroundColor: '#fe3f3f',
          
        },
        orderSummaryFooter: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginTop: '50px !important',
            backgroundColor: '#fe3f3f'
        },

        menuFilterImage: {
            width: '40px',
            marginLeft: '10px',
            objectFit: 'contain'
        }

    })
);

export default useStyles;
