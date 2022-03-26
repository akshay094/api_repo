import React from 'react'
import fieldErrorStyle from './fieldErrorStyle'

function FieldError({ message }) {
  const classes = fieldErrorStyle();

  return (
    <div className={classes.error}>{message}</div>
  )
}

export default FieldError