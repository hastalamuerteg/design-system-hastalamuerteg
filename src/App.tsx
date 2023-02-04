// import { Checkbox, Grid, TextField, Alert, Chip, Switch } from '@mui/material'
import { Button } from './components/design-system/Button'

export const App = () => {
  return (
    <>
      <Button variant="contained" size="small">
        Button
      </Button>
      <Button variant="contained" size="medium">
        Button
      </Button>
      <Button variant="contained" size="large">
        Button
      </Button>
    </>
    // <Grid container spacing={4}>
    //   <Grid container item spacing={2}>
    //     <Grid container item>
    //       <h3>Buttons</h3>
    //     </Grid>
    //     <Grid container item spacing={2}>
    //       <Grid item>
    //         <Button variant="text" size="small">
    //           Button
    //         </Button>
    //       </Grid>
    //       <Grid item>
    //         <Button variant="contained">Button</Button>
    //       </Grid>
    //       <Grid item>
    //         <Button variant="outlined" size="large">
    //           Button
    //         </Button>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid container item spacing={2}>
    //     <Grid container item>
    //       <h3>Checkbox</h3>
    //     </Grid>
    //     <Grid container item spacing={2}>
    //       <Grid item>
    //         <Checkbox />
    //       </Grid>
    //       <Grid item>
    //         <Checkbox />
    //       </Grid>
    //       <Grid item>
    //         <Checkbox />
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid container item spacing={2}>
    //     <Grid container item>
    //       <h3>Textfields</h3>
    //     </Grid>
    //     <Grid container item spacing={2}>
    //       <Grid item>
    //         <TextField
    //           id="outlined-basic"
    //           label="Outlined"
    //           variant="outlined"
    //         />
    //       </Grid>
    //       <Grid item>
    //         <TextField id="filled-basic" label="Filled" variant="filled" />
    //       </Grid>
    //       <Grid item>
    //         <TextField
    //           id="standard-basic"
    //           label="Standard"
    //           variant="standard"
    //         />
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid container item spacing={2}>
    //     <Grid container item>
    //       <h3>Alerts</h3>
    //     </Grid>
    //     <Grid container item spacing={2}>
    //       <Grid item>
    //         <Alert severity="error">
    //           This is an error alert — check it out!
    //         </Alert>{' '}
    //       </Grid>
    //       <Grid item>
    //         <Alert severity="warning">
    //           This is a warning alert — check it out!
    //         </Alert>
    //       </Grid>
    //       <Grid item>
    //         <Alert severity="info">This is an info alert — check it out!</Alert>
    //       </Grid>
    //       <Grid item>
    //         <Alert severity="success">
    //           This is a success alert — check it out!
    //         </Alert>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid container item spacing={2}>
    //     <Grid container item>
    //       <h3>Chips</h3>
    //     </Grid>
    //     <Grid container item spacing={2}>
    //       <Grid item>
    //         <Chip label="Chip Filled" />
    //       </Grid>
    //       <Grid item>
    //         <Chip label="Chip Outlined" variant="outlined" />
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid container item spacing={2}>
    //     <Grid container item>
    //       <h3>Switches</h3>
    //     </Grid>
    //     <Grid container item spacing={2}>
    //       <Grid item>
    //         <Switch defaultChecked />
    //       </Grid>
    //       <Grid item>
    //         <Switch />
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>
  )
}
