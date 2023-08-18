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

export default function Dashboard(props: any) {
  const classes = useStyles(props);
  return (
    <React.Fragment>
      <div className={classes.mainContainer}>
        <Grid container>
          <Grid item xs={12} sm={5} md={5}>
            <Inventory />
          </Grid>
          <Grid item xs={12} sm={7} md={7}>
            <HistoricalDataChart />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={5} md={5}>
            <AverageBasketChart />
          </Grid>
          <Grid item xs={12} sm={7} md={7}>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
