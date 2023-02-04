import {
  Checkbox,
  Button,
  ButtonProps,
  Grid,
  TextField,
  Alert,
  Chip,
  Switch,
} from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomizedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  '&.MuiButton-text:hover': {
    background: '#B36636',
  },
  width: '104px',
  borderRadius: '4px',
  padding: '0px, 8px, 0px, 8px',
  background: '#FF914D',
  color: 'white',
  textTransform: 'none',
}))

export const App = () => {
  return (
    <Grid container spacing={4}>
      <Grid container item spacing={2}>
        <Grid container item>
          <h3>Buttons</h3>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item>
            <CustomizedButton variant="text" size="small">
              Button
            </CustomizedButton>
          </Grid>
          <Grid item>
            <CustomizedButton variant="contained">Button</CustomizedButton>
          </Grid>
          <Grid item>
            <CustomizedButton variant="outlined" size="large">
              Button
            </CustomizedButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        <Grid container item>
          <h3>Checkbox</h3>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item>
            <Checkbox />
          </Grid>
          <Grid item>
            <Checkbox />
          </Grid>
          <Grid item>
            <Checkbox />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        <Grid container item>
          <h3>Textfields</h3>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField id="filled-basic" label="Filled" variant="filled" />
          </Grid>
          <Grid item>
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        <Grid container item>
          <h3>Alerts</h3>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item>
            <Alert severity="error">
              This is an error alert — check it out!
            </Alert>{' '}
          </Grid>
          <Grid item>
            <Alert severity="warning">
              This is a warning alert — check it out!
            </Alert>
          </Grid>
          <Grid item>
            <Alert severity="info">This is an info alert — check it out!</Alert>
          </Grid>
          <Grid item>
            <Alert severity="success">
              This is a success alert — check it out!
            </Alert>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        <Grid container item>
          <h3>Chips</h3>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item>
            <Chip label="Chip Filled" />
          </Grid>
          <Grid item>
            <Chip label="Chip Outlined" variant="outlined" />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        <Grid container item>
          <h3>Switches</h3>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item>
            <Switch defaultChecked />
          </Grid>
          <Grid item>
            <Switch />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
