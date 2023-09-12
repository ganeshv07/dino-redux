import * as React from "react";
import { AppBar, Box, Button, Grid, InputAdornment, TextField, } from "@material-ui/core";
import { Stack, Tabs, Tab, Typography, IconButton, Checkbox, Card, CardContent, CardMedia, CardActionArea, CardActions,} from "@mui/material";
import CircularProgress from "@material-ui/core/CircularProgress";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@mui/icons-material/Close";
import Autocomplete from "@material-ui/lab/Autocomplete";
import _ from "../../utils/lodash";
import useStyles from "./billingStyles";
import { Diversity1Outlined } from "@mui/icons-material";
const Noodels = require("../../assets/images/noodels.jpeg");
const veg = require("../../assets/images/veg.png");
const nonVeg = require("../../assets/images/nonVeg.png");
const liquor = require("../../assets/images/liquor.png");
const beverages = require("../../assets/images/beverages.png");


export default function Billing(props: any) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState("one");

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handelInputChange = (addedTest: any) => {
    props.addTest(addedTest);
    setTimeout(() => {
      // document.getElementById('customAutocomplete').focus();
    }, 500);
  };

  const noOptionTest = () => {
    return "Items not found";
  };

  const searchTest = (searchString: any) => {};

  const delayedQuery = _.debounce((searchString: any) => {
    searchTest(searchString);
  }, 1200);

  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Grid container className={classes.orderContainer}>
          <Grid container>
            <Grid item sm={8} md={8}>
              <Stack
                direction="row"
                padding={1}
                alignItems={"center"}
                justifyContent={"end"}
                spacing={2}
              >
                <Button variant="outlined" size="small">
                  Add customer
                </Button>
                <Button variant="outlined" size="small">
                  Add Waiter
                </Button>
                <Button variant="outlined" size="small">
                  Change Table
                </Button>
              </Stack>
              <Grid container className={classes.container}>
                <AppBar position="static" className={classes.tabBG}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    className={classes.tab}
                    TabIndicatorProps={{ sx: { backgroundColor: "red" } }}
                    aria-label="secondary tabs example"
                  >
                    <Tab value="one" label="All" />
                    <Tab value="two" label="Breakfast" />
                    <Tab value="three" label="Chinese" />
                    <Tab value="four" label="Momos" />
                    <Tab value="five" label="Beverages" />
                  </Tabs>
                </AppBar>
              </Grid>
              <Grid
                container
                spacing={1}
                className={`${classes.flexCenter} ${classes.searchBorder}`}
              >
                <Grid item xs={8} md={8}>
                  <Autocomplete
                    noOptionsText={noOptionTest()}
                    open={open}
                    value={null}
                    clearOnEscape={true}
                    onOpen={() => {
                      setOpen(true);
                    }}
                    onClose={() => {
                      setOptions([]);
                      setOpen(false);
                    }}
                    style={{ width: "100%" }}
                    id="customAutocomplete"
                    className={`${
                      props.disabled
                        ? classes.disableInputAutoComplete
                        : classes.searchField
                    }`}
                    onChange={(e, value) => handelInputChange(value)}
                    getOptionLabel={(option) =>
                      typeof option === "string" ? option : option.label
                    }
                    filterOptions={(x) => x}
                    options={top100Films}
                    autoComplete
                    includeInputInList
                    blurOnSelect={true}
                    disabled={props.disabled}
                    // disabled={(!storeData.patientInfo || storeData.labCode) ? true : false}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        autoComplete="off"
                        placeholder={"Search by name/code"}
                        onChange={(e) => delayedQuery(e.target.value)}
                        InputProps={{
                          ...params.InputProps,
                          endAdornment: (
                            <React.Fragment>
                              {loading ? (
                                <CircularProgress
                                  color="inherit"
                                  size={20}
                                  className={classes.searchLoader}
                                />
                              ) : null}
                              {params.InputProps.endAdornment}
                            </React.Fragment>
                          ),
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                    renderOption={(option) => {
                      return (
                        <Grid
                          container
                          alignItems="center"
                          className={classes.itemBorder}
                        >
                          <Grid item xs>
                            <Typography
                              variant="body2"
                              className={classes.blackText}
                            >
                              {`${option.label}`}
                            </Typography>
                          </Grid>
                        </Grid>
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={1} md={1}>
                 <img src={veg} className={classes.menuFilterImage}/> 
                </Grid>
                <Grid item xs={1} md={1}>
                <img src={nonVeg} className={classes.menuFilterImage}/> 
                </Grid>
                <Grid item xs={1} md={1}>
                <img src={liquor} className={classes.menuFilterImage}/> 
                </Grid>
                <Grid item xs={1} md={1}>
                <img src={beverages} className={classes.menuFilterImage}/> 
                </Grid>
              </Grid>
              <Grid container className={classes.menuListContainer}>
                <Card sx={{ maxWidth: 150 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      width="50"
                      image={Noodels}
                      alt="green iguana"
                    />
                    <div className={classes.cardContent}>
                      <span> Noodels </span>
                      <p className={classes.secondaryLabelText}> Rs - 120 </p>
                    </div>
                    <div className={classes.cartNoOfItem}>
                      <button>-</button>
                      <span>0</span>
                      <button>+</button>
                    </div>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
            <Grid item sm={4} md={4}>
              <Grid container className={classes.selectedItemscontainer}>
                <Box className={classes.selectedItem}>
                  <div>
                    <Checkbox {...label} defaultChecked />
                    <span>Fish and chips</span>
                  </div>
                  <div>
                    <span>250.00</span>
                    <IconButton aria-label="close">
                      <CloseIcon />
                    </IconButton>
                  </div>
                </Box>
                <Box className={classes.selectedItem}>
                  <div>
                    <Checkbox {...label} defaultChecked />
                    <span>Potato fries</span>
                  </div>
                  <div>
                    <span>60.00</span>
                    <IconButton aria-label="close">
                      <CloseIcon />
                    </IconButton>
                  </div>
                </Box>
              </Grid>
              <Grid container className={classes.orderSummaryContainer}>
                <div className={classes.orderSummaryItem}>
                  <span className={classes.orderSummaryItemLabelText}>
                    {"Items / Qty"}
                  </span>
                  <span className={classes.orderSummaryItemPriceText}>
                    {"2.00"}
                  </span>
                </div>
                <div className={classes.orderSummaryItem}>
                  <span className={classes.orderSummaryItemLabelText}>
                    {"Total Sales"}
                  </span>
                  <span className={classes.orderSummaryItemPriceText}>
                    {"300.00"}
                  </span>
                </div>
                <div className={classes.orderSummaryItem}>
                  <span className={classes.orderSummaryItemLabelText}>
                    {"Add discount"}
                  </span>
                  <span className={classes.orderSummaryItemPriceText}>
                    {"0.00"}
                  </span>
                </div>
                <div className={classes.orderSummaryItem}>
                  <span className={classes.orderSummaryItemLabelText}>
                    {"Add Tip/charity"}
                  </span>
                  <span className={classes.orderSummaryItemPriceText}>
                    {"0.00"}
                  </span>
                </div>
                <div className={classes.orderSummaryItem}>
                  <span className={classes.orderSummaryItemLabelText}>
                    {"GST @ 10%"}
                  </span>
                  <span className={classes.orderSummaryItemPriceText}>
                    {"10.00"}
                  </span>
                </div>
                <div className={classes.orderSummaryItem}>
                  <span className={classes.orderSummaryItemLabelText}>
                    {"Service Charges @ 5%"}
                  </span>
                  <span className={classes.orderSummaryItemPriceText}>
                    {"10.00"}
                  </span>
                </div>
                <div className={classes.orderSummaryItem}>
                  <span className={classes.orderSummaryItemLabelText}>
                    {"Other Charges"}
                  </span>
                  <span className={classes.orderSummaryItemPriceText}>
                    {"10.00"}
                  </span>
                </div>
                <div className={classes.orderSummaryItem}>
                  <span className={classes.orderSummaryItemLabelText}>
                    {"Amount Payable"}
                  </span>
                  <span className={classes.orderSummaryItemPriceText}>
                    {"240.00"}
                  </span>
                </div>
                <div className={classes.orderSummaryFooter}>
                <Button className={classes.saveButton}> Select Payment Method </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
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
