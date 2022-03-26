import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material'
import useStyles from './styles'
import PhoneBox from './PhoneBox'
import { useFormik } from 'formik';
import * as Yup from 'yup';

let counter = 0;


const initialValues = { phoneType: "", phoneNumber: "", extension: "" }

const phoneDetailValidationSchema = Yup.object().shape({
  phoneType: Yup.string()
    .required('Required'),

  phoneNumber: Yup.string().min(10, "Must be 10 digits")
    .max(10, "Must be 10 digits")
    .required("Requried"),

  extension: Yup.string().required('Required'),
});

const PhoneDetails = () => {
  const classes = useStyles();
  const [count, setCount] = useState([{ component: PhoneBox, id: counter }]);

  const addPhoneBox = () => {
    setCount(prev => [...prev, { component: PhoneBox, id: ++counter }])
  }

  function removePhoneBox(e) {
    const { value } = e.target;

    setCount(prev => prev.filter((val) => {
      return val.id != value
    }))
  }

  const formik = useFormik({
    initialValues,
    validationSchema: phoneDetailValidationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values))
    },
  })

  return (
    <Box className={classes.outerWrapper}>
      <Box><Typography className={classes.label}>Create a new user account</Typography></Box>

      <form onSubmit={formik.handleSubmit}>
        {
          count.map((Elem, index) => {
            let Component = Elem.component
            return (
              <Box key={Elem.id}>
                <Component formik={formik} renderNumber={index} />
                <Box>
                  {
                    count.length > 1 ? <Button value={Elem.id} onClick={removePhoneBox}>
                      Remove
                    </Button> : null
                  }
                </Box>
              </Box>
            )
          })
        }

        < Button onClick={addPhoneBox}>
          Add More
        </Button>


        <Button>
          Previous
        </Button>


        <Button type="submit">
          Next
        </Button>
      </form>
    </Box >
  )
}

export default PhoneDetails;
