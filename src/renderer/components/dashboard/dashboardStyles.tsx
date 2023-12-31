import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainContainer: {
            marginTop: 60,
            height: 'calc(100vh - 90px)',
            overflow: 'auto',
            padding: '20px 10px',
            background: '#f6f6f6'
        },
    })
);

export default useStyles;
