import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Input,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import editIcon from "../../assets/icons/edit.svg";
import Switch from "../../components/CommonComponents/Switch";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "95%",
    marginBottom: 26,
  },
  selectEmpty: {},
}));

const DetailTab = () => {
  const classes = useStyles();
  const [industry, setIndustry] = useState("");
  const handleChange = (event) => {
    console.log(event.target);
    // setIndustry(event.target.value);
  };
  return (
    <Grid container direction="row" alignItems="" justify="space-between">
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">
            Industry Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={industry}
            onChange={handleChange}
          >
            <MenuItem value={"Software"}>Software</MenuItem>
            <MenuItem value={"Accounts"}>Accounts</MenuItem>
            <MenuItem value={"Textile"}>Textile</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="standard-adornment-password">
            Phone Number
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={"text"}
            value={""}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={{}}
                >
                  <img src={editIcon} width={16} height={16} alt="" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="standard-adornment-password">Address</InputLabel>
          <Input
            id="standard-adornment-password"
            type={"text"}
            value={""}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={{}}
                >
                  <img src={editIcon} width={16} height={16} alt="" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="standard-adornment-password">
            Annual Revenue
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={"text"}
            value={""}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={{}}
                >
                  <img src={editIcon} width={16} height={16} alt="" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="standard-adornment-password">
            Originating Lead
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={"text"}
            value={""}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={{}}
                >
                  <img src={editIcon} width={16} height={16} alt="" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className={classes.formControl}>
          <Typography>Allow Send E-mail</Typography>
          <Switch />
        </div>
        <div className={classes.formControl}>
          <Typography>Allow Phone Call</Typography>
          <Switch />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="standard-adornment-password">
            Account Owner
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={"text"}
            value={""}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={{}}
                >
                  <img src={editIcon} width={16} height={16} alt="" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="standard-adornment-password">Website</InputLabel>
          <Input
            id="standard-adornment-password"
            type={"text"}
            value={""}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={{}}
                >
                  <img src={editIcon} width={16} height={16} alt="" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="standard-adornment-password">
            Company Size
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={"text"}
            value={""}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={{}}
                >
                  <img src={editIcon} width={16} height={16} alt="" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="standard-adornment-password">
            Preferred Currency
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={"text"}
            value={""}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={{}}
                >
                  <img src={editIcon} width={16} height={16} alt="" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="standard-adornment-password">
            Shipping Method
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={"text"}
            value={""}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={{}}
                >
                  <img src={editIcon} width={16} height={16} alt="" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className={classes.formControl}>
          <Typography>Allow Send Fax</Typography>
          <Switch />
        </div>
        <div className={classes.formControl}>
          <Typography>Allow Post mail</Typography>
          <Switch />
        </div>
      </Grid>
    </Grid>
  );
};

export default DetailTab;
