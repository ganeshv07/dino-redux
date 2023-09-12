import * as React from "react";
import {Grid} from '@material-ui/core';
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useStyles from "./mergeTablesStyles";

export default function MergeTabels(props: any) {
  const classes = useStyles(props);

  const { handleOpenAddEditModel } = props;

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        // maxWidth='md'
        open={true}
        onClose={(event, closeReason) => {
          if (closeReason !== "backdropClick") {
            handleClose();
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
            {"Merge Tables "}
          </Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => handleOpenAddEditModel(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers className={classes.popupContent}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Main Tables" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Sub Tables" />
            )}
          />
        </DialogContent>
        <Grid container className={classes.popupFooter}>
          <Button className={classes.saveButton} onClick={handleClose}>
            Save
          </Button>
        </Grid>
      </Dialog>
    </div>
  );
}

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];
