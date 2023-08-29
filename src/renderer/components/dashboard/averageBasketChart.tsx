import { Box, Grid, Typography } from "@material-ui/core";
import * as React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { XAxis, YAxis, Tooltip, Legend, Bar, CartesianGrid, BarChart, ResponsiveContainer } from "recharts";
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

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

 

  return (
    <React.Fragment>
      <Grid container className={classes.chartContainer}>
        <Box className={classes.chartBox}>
          <Box className={classes.ChartSubHeading}>
            <Typography component="span" className={classes.ChartLabelText}>
              {"Total Sales"}
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }} className={classes.salesDropdowncontainer}>
        <Select
          className={classes.salesDropdown}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>This Week</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

          </Box>
          
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={data} >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip cursor={{fill: '#fff'}} />
              <Bar dataKey="pv"  barSize={20} fill="#ebebeb" radius={[10, 10, 0, 0]} />
            </BarChart>
            </ResponsiveContainer>
        </Box>
      </Grid>
    </React.Fragment>
  );
}
