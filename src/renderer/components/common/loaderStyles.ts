import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        '@global': {
            '*::-webkit-scrollbar': {
              width: '7px'
            },
            '*::-webkit-scrollbar-track': {
              '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '*::-webkit-scrollbar-thumb': {
              backgroundColor: '#0054a5 !important',
              borderRadius: '2px'
            }
          },
        backdrop: {
            zIndex: 99999,
            color: '#fece43',
            opacity: 1
        },
        button: {
            marginTop: 100
        }
    })
);

export default useStyles;
