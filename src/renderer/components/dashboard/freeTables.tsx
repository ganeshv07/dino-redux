import * as React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./freeTablesStyles";

export default function FreeTables(props: any) {
  const classes = useStyles(props);

  return (
        <Box className={classes.tableContainer}>
          <div className={classes.tableSubHeading}>
            <span className={classes.tableLabelText}>{"Free Tables"}</span>
          </div>
          <div className={classes.tableItem}>
          <span className={classes.tableItemLabelText}>{"Table 4 (t4)"}</span>
          <span className={classes.tableItemPriceText}>{"110.00"}</span>
          </div>
          <div className={classes.tableItem}>
          <span className={classes.tableItemLabelText}>{"Up Stairs (A3)"}</span>
          <span className={classes.tableItemPriceText}>{"646.00"}</span>
          </div>
          <div className={classes.tableItem}>
          <span className={classes.tableItemLabelText}>{"Down stair (A0)"}</span>
          <span className={classes.tableItemPriceText}>{"39.00"}</span>
          </div>
        </Box>
  );
}
