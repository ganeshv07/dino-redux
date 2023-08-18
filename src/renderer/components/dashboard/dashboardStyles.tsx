import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainContainer: {
            marginTop: 70,
            height: 'calc(100vh - 90px)',
            overflow: 'auto'
        },
    })
);

export default useStyles;
