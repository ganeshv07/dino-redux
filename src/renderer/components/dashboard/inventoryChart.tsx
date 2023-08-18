import { Box, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Cell,  Pie, PieChart } from 'recharts';
import useStyles from './inventoryChartStyles';

export default function Inventory(props:any) {
  const classes = useStyles(props);

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
  ];
  

  useEffect(() => {
    document.getElementsByClassName('recharts-surface')[0].setAttribute('viewBox', '100 25 440 240');
  }, []);

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
              <Grid item xs={4}>
                <Grid container className={classes.ChartAmount}>
                  <Grid item xs={3} sm={3}>
                    <Typography component='span' className={classes.ChartLabelText}>{'1'}</Typography>
                  </Grid>
                  <Grid item xs={9} sm={9}>
                    <Typography component='span' className={classes.yellowColor}>
                     {'Available'}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.ChartAmount}>
                <Grid item xs={3} sm={3}>
                    <Typography component='span' className={classes.ChartLabelText}>{'2'}</Typography>
                  </Grid>
                  <Grid item xs={9} sm={9}>
                    <Typography component='span' className={classes.yellowColor}>
                     {'Out of stock'}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.ChartAmount}>
                <Grid item xs={3} sm={3}>
                    <Typography component='span' className={classes.ChartLabelText}>{'3'}</Typography>
                  </Grid>
                  <Grid item xs={9} sm={9}>
                    <Typography component='span' className={classes.yellowColor}>
                     {'Low inventory'}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <PieChart height={250} width={500}>
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
                    <Cell fill='#F5B517' />
                    <Cell fill='#eaeaea' />
                    <Cell fill='#ddd' />
                  </Pie>
                </PieChart>
              </Grid>
            </Grid>
          </Box>
        </Grid>
    </React.Fragment>
  );
}
