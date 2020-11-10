import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 40,
    height: 23,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 5,
    color: "#D9E0FE",
    "&$checked": {
      transform: "translateX(18px)",
      color: "#0582ff",
      "& + $track": {
        opacity: 1,
        backgroundColor: "#D9E0FE",
        borderColor: "#D9E0FE",
      },
    },
  },
  thumb: {
    width: 13,
    height: 13,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${"#D9E0FE"}`,
    borderRadius: 23 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default function CustomizedSwitches() {
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>
          <AntSwitch
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
          />
        </Grid>
      </Grid>
    </Typography>
  );
}
