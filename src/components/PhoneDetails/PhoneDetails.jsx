import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material'
import useStyles from './styles'
import PhoneBox from './PhoneBox'

let counter = 0;

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

  return <Box className={classes.outerWrapper}>
    <Box><Typography className={classes.label}>Create a new user account</Typography></Box>

    {
      count.map((Elem, index) => {
        let Component = Elem.component
        return (
          <Box key={Elem.id}>
            <Component />
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

    <Button onClick={addPhoneBox}>
      Add More
    </Button>


    <Button>
      Previous
    </Button>


    <Button>
      Next
    </Button>
  </Box>
};

export default PhoneDetails;
