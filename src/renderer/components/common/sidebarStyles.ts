import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({

    root: {
        display: 'flex'
    },
    active: {
        '& button': {
            color: '#0052a8'
        },
        '& .MuiTypography-body1': {
            color: '#0052a8 !important'
        },
        '&.sidemenuIcon': {
            color: '#0052a8 !important'
        },
        '&.MuiListItem-root': {
            borderLeft: '4px solid #0052a8'
        }
    },
    transparent: {
        backgroundColor: 'transparent'
    },
    cPointer: {
        cursor: 'pointer'
    },

    navBar: {
        height: 'calc(100vh - 83px)',
        overflow: 'auto',
        maxHeight: '700px',
        margin: '10px 0px',
        padding: '0px',
        '@media screen and (min-height: 844px)': {
            maxHeight: '600px !important'
        },
        '& .MuiTypography-body1': {
            fontFamily: 'PTSans-Regular',
            color: '#686868',
            fontWeight: 'bold'
        },
        '& .MuiListItem-root': {
            padding: '9px 25px',
            borderLeft: '4px solid #f3f7ff',
            '&:hover': {
                borderLeft: '4px solid #0052a8',
                '& .sidemenuIcon': {
                    color: '#0052a8'
                },
                '&.MuiTypography-body1': {
                    color: '#0052a8'
                }
            }
        }
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        // zIndex: 2,
        background: '#f3f7ff',
        // marginTop: 64,
        // height: 'calc(100vh - 64px)',
        border: 0
    },
    // drawerPaper: {
    // },
    sideMenuIcon: {
        fontSize: '20px',
        color: '#686868',
        paddingRight: '10px'
    },
    default: {
        color: '#0054a5',
        fontSize: '10px',
        fontFamily: 'PTSans-Bold',
        textAlign: 'center'

    },
    logoutVersion: {
        // position: 'absolute',
        // bottom: '20px',
        // left: '0px'
    },
    pl30: {
        paddingLeft: '30px'
    }
})
);

export default useStyles;
