import { createStyles, fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_theme) => createStyles({
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

  footerContainer: {
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    paddingBottom: '40px'
  },

  footerTitle: {
    fontFamily: 'Gotham',
    fontSize: '22px',
    margin: '5px'
  },

  footerDescription: {
    fontFamily: 'Gotham',
    fontSize: '20px',
  }

}));

export default useStyles;
