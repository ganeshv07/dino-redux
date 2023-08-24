import * as React from "react";
import {
  CssBaseline,
  FormHelperText,
  Grid,
  Paper,
  Button,
  Typography,
} from "@material-ui/core";
import Inventory from "./inventoryChart";
import useStyles from "./dashboardStyles";
import HistoricalDataChart from "./historicalDataChart";
import AverageBasketChart from "./averageBasketChart";
import HotDeals from "./hotDeals";
import RunningTables from "./runningTables";
import FreeTables from "./freeTables";
import MediaSales from "./mediaSales";

export default function Dashboard(props: any) {
  const classes = useStyles(props);
  return (
    <React.Fragment>
      <div className={classes.mainContainer}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
        <AverageBasketChart />
        </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Inventory />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <HotDeals />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <RunningTables />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <FreeTables />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <MediaSales />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
