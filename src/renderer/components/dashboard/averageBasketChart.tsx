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
} from "recharts";
import useStyles from "./averageBasketChartStyles";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
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
              {"Historical Data Chart"}
            </Typography>
          </Box>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <BarChart width={500} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </Grid>
        </Box>
      </Grid>
    </React.Fragment>
  );
}
