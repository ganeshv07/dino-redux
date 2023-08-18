import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainContainer: {
            marginTop: 124,
            height: 'calc(100vh - 124px)',
            overflow: 'auto'
        },
    })
);

export default useStyles;
