import React from 'react';
import { Box, Grid, Typography, OutlinedInput, Select, MenuItem, Checkbox, Button } from '@mui/material'
import { phoneType } from '../../constants/dropDownData'
import useStyles from './styles'

const PhoneBox = () => {
  const classes = useStyles();

  return (
    <Box classes={classes.innerWrapper}>

      <Box><Typography className={classes.label}>Phone</Typography></Box>

      <Grid container>
        <Grid item xs md lg>
          <Typography className={classes.label}>
            Phone Type
          </Typography>
          <Select>
            {
              phoneType.map((type, index) => {
                return (
                  <MenuItem value={type} key={index}>{type}</MenuItem>
                )
              })
            }
          </Select>
        </Grid>

        <Grid item xs md lg>
          <Typography className={classes.label}>
            Phone Number
          </Typography>
          <OutlinedInput />

        </Grid>
        <Grid item xs md lg>
          <Typography className={classes.label}>
            Extension
          </Typography>
          <OutlinedInput />
        </Grid>

      </Grid>

      <Box display="flex" alignItems="center">
        <Checkbox />
        <Typography className={classes.inlineElement}>Please select this checkbox</Typography>
      </Box>
    </Box>
  )

};

export default PhoneBox;
