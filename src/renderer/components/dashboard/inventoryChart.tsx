import { Box, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Cell,  Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import useStyles from './inventoryChartStyles';

export default function Inventory(props:any) {
  const classes = useStyles(props);

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
  ];
  

  // useEffect(() => {
  //   document.getElementsByClassName('recharts-surface')[0].setAttribute('viewBox', '100 25 440 240');
  // }, []);

  return (
    <React.Fragment>
        <Grid container className={classes.chartContainer}>
          <Box className={classes.chartBox}>
            <Box className={classes.ChartSubHeading} >
                <Typography component='span' className={classes.ChartLabelText} >{'Inventory'}</Typography>
            </Box>
            <Grid
              container
              direction='row'
              justifyContent='center'
              alignItems='center'
            >
        
              <Grid item xs={7}>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart >
                <Tooltip />
                  <Pie
                    startAngle={360}
                    endAngle={0}
                    innerRadius='50%'
                    data={data}
                    dataKey='value'
                    labelLine={false}
                    blendStroke
                    isAnimationActive={true}
                  >
                    <Cell fill='#930700' />
                    <Cell fill='#fe5850' />
                    <Cell fill='#fff4f4' />
                  </Pie>
                </PieChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={5}>
                <Grid container >
                  <Grid item xs={12} sm={12} className={classes.ChartTitles}>
                    <Box className={classes.ChartDineColor}>{'.'}</Box>
                    <Typography component='span' className={classes.ChartTitle}>
                     {'Dine in Sales'}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.ChartTitles}>
                    <Box className={classes.ChartTakeAwayColor}>{'.'}</Box>
                    <Typography component='span' className={classes.ChartTitle}>
                     {'Take away Sales'}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.ChartTitles}>
                    <Box className={classes.ChartDeliveriyColor}>{'.'}</Box>
                    <Typography component='span' className={classes.ChartTitle}>
                     {'Deliveriy in Sales'}
                    </Typography>
                  </Grid>
                </Grid>
                </Grid>
            </Grid>
          </Box>
        </Grid>
    </React.Fragment>
  );
}
