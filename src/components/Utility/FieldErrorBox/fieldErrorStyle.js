import { makeStyles } from '@mui/styles'

const fieldErrorStyle = makeStyles({
  error: {
    color: "orange",
    margin: "1em 0"
  }
  ,
  errorBox: {
    border: "1px solid red"
  }
})

export default fieldErrorStyle;