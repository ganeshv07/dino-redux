import { Box, Typography } from '@material-ui/core';
import * as React from 'react';

interface ITabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

export default function TabPanel(props: ITabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component='div'
            role='tabpanel'
            style={{ width: '100%' }}
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </Typography>
    );
}
