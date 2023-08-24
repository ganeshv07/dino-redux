import { Box, Grid, Typography } from "@material-ui/core";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  CartesianGrid,
  BarChart,
  ResponsiveContainer,
} from "recharts";
import useStyles from "./averageBasketChartStyles";

const data = [
  {
    name: "Mon",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Tue",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Thu",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Fri",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Sat",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Sun",
    uv: 3490,
    pv: 4300,
  },
];

export default function AverageBasketChart(props: any) {
  const classes = useStyles(props);

 

  return (
    <React.Fragment>
      <Grid container className={classes.chartContainer}>
        <Box className={classes.chartBox}>
          <Box className={classes.ChartSubHeading}>
            <Typography component="span" className={classes.ChartLabelText}>
              {"Total Sales"}
            </Typography>
          </Box>
          
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip cursor={{fill: '#fff'}} />
              <Bar dataKey="pv" fill="#ebebeb" radius={[10, 10, 0, 0]} />
            </BarChart>
            </ResponsiveContainer>
        </Box>
      </Grid>
    </React.Fragment>
  );
}
