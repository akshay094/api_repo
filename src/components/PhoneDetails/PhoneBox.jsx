import React from 'react';
import { Box, Grid, Typography, OutlinedInput, Select, MenuItem, Checkbox, Button } from '@mui/material'
import { phoneType } from '../../constants/dropDownData'
import useStyles from './styles'
import FieldError from '../Utility/FieldErrorBox/FieldError'

const PhoneBox = ({ renderNumber, formik }) => {
  const classes = useStyles();
  const { errors, touched } = formik;

  return (
    <Box classes={classes.innerWrapper}>

      <Box><Typography className={classes.label}>Phone #{++renderNumber}</Typography></Box>

      <Grid container>
        <Grid item xs md lg>
          <Typography className={classes.label}>
            Phone Type
          </Typography>
          <Select name="phoneType"
            className={errors.phoneType ? classes.errorBox : null}
            {...formik.getFieldProps('phoneType')}>
            {
              phoneType.map((type, index) => {
                return (
                  <MenuItem value={type} key={index}>{type}</MenuItem>
                )
              })
            }
          </Select>
          {errors.phoneType && touched.phoneType ? (
            < FieldError message={errors.phoneType} />
          ) : null}
        </Grid>

        <Grid item xs md lg>
          <Typography className={classes.label}>
            Phone Number
          </Typography>

          <OutlinedInput name="phoneNumber"
            className={errors.phoneNumber ? classes.errorBox : null}
            {...formik.getFieldProps('phoneNumber')} />
          {errors.phoneNumber && touched.phoneNumber ? (
            <FieldError message={errors.phoneNumber} />
          ) : null}

        </Grid>
        <Grid item xs md lg>
          <Typography className={classes.label}>
            Extension
          </Typography>
          <OutlinedInput name="extension"
            className={errors.extension ? classes.errorBox : null}
            {...formik.getFieldProps('extension')} />
          {errors.extension && touched.extension ? (
            < FieldError message={errors.extension} />
          ) : null}
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
