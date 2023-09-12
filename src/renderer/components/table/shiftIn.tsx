import {Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography,} from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";
import _ from "../../utils/lodash";
import useStyles from "./shiftInStyles";
import React from "react";

export default function ShiftIn(props: any) {
  const classes = useStyles(props);

  const { handleOpenShiftInModel } = props;
  const [isAddDenominations, setIsAddDenominations] = useState(false);

  const handleModelClose = () => {
    handleOpenShiftInModel(false);
  };

  const shiftInDetailsRender = () => {
    return (
      <Grid className={classes.titleMain} container>
        <Grid
          container
          spacing={2}
          className={`${classes.shiftInEditContainer}`}
        >
          <Grid item xs={4} sm={4} md={4}>
            <Typography className={classes.shiftTextHeading}>
              {"Business Date"}
            </Typography>
            <Typography className={classes.shiftEditText}>
              {"25-12-2023"}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Typography className={classes.shiftTextHeading}>
              {"Shift In"}
            </Typography>
            <Typography className={classes.shiftEditText}>{"02"}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Typography className={classes.shiftTextHeading}>
              {"Opening Balance"}
            </Typography>
            <Typography className={classes.shiftEditText}>{"0.00"}</Typography>
          </Grid>
        </Grid>
        <div className={classes.flexEnd}>
          <Button
            variant="outlined"
            color="error"
            onClick={() => setIsAddDenominations(!isAddDenominations)}
          >
            {" "}
            Add Denominations
          </Button>
        </div>
      </Grid>
    );
  };

  const denominationsDetailsRender = () => {
    return (
      <>
        <Grid
          container
          spacing={2}
          className={`${classes.denominationsEditContainer}`}
        >
          <Grid item xs={4} sm={4} md={4}>
            <label className={classes.inputLabel}>Cash Value</label>
            <input type="text" name="lastname" className={classes.Input} />
          </Grid>
          <Grid item xs={1} sm={1} md={1}>
            <CloseIcon fontSize="small" />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <label className={classes.inputLabel}>Cash Count</label>
            <input type="text" name="lastname" className={classes.Input} />
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button className={classes.addBtn}>Add</Button>
          </Grid>
        </Grid>
        <table className={classes.tableContainer}>
          <thead>
            <tr>
              <th>Cash Value</th>
              <th>Count</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Apple</td>
              <td>2</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mango</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Orange</td>
              <td>1</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Grand Total</td>
              <td></td>
              <td>0</td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  };

  return (
    <div>
      <Dialog
        // maxWidth='md'
        open={true}
        onClose={(event, closeReason) => {
          if (closeReason !== "backdropClick") {
            handleModelClose();
          }
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-success"
        className={classes.dialogContainer}
      >
        <DialogTitle className={classes.popupHeader} id="add-edit-patient">
          <Typography
            component="div"
            variant="h6"
            className={classes.titleText}
          >
            {"Shift In"}
          </Typography>
          <IconButton
          aria-label="close"
          onClick={handleModelClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        </DialogTitle>
        <DialogContent className={classes.contentContainer}>
          {!isAddDenominations && shiftInDetailsRender()}
          {isAddDenominations && denominationsDetailsRender()}
        </DialogContent>
        <Grid container className={classes.popupFooter}>
          <Button className={classes.uploadButton}>
            {isAddDenominations ? "Save" : "Shift-In"}
          </Button>
        </Grid>
      </Dialog>
    </div>
  );
}
