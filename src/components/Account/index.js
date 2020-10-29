import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Grid,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import Add from "@material-ui/icons/Add";
import RefreshIcon from "@material-ui/icons/Refresh";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Filter from "../../assets/icons/Filter.svg";

const useStyles = makeStyles((theme) => ({
  bodyPadding: {
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  },
  actionButtons: {
    marginLeft: theme.spacing(4),
    width: "6rem",
    fontSize: "13px",
  },
  searchBar: {
    width: "13.6rem",
  },
  searchRow: {
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(4),
    verticalAlign: "center",
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.bodyPadding} variant="h6">
        ACCOUNT
      </Typography>
      <Typography className={classes.bodyPadding} variant="p">
        Account represents and induvial customer account, organization or
        partner involved with business
      </Typography>
      <hr />
      <div>
        <Button
          className={classes.actionButtons}
          startIcon={<Add />}
          variant="outlined"
        >
          New
        </Button>
        <Button
          className={classes.actionButtons}
          startIcon={<RefreshIcon />}
          variant="outlined"
        >
          Refresh
        </Button>
        <Button
          className={classes.actionButtons}
          startIcon={<DeleteIcon />}
          variant="outlined"
        >
          Delete
        </Button>
        <Button
          className={classes.actionButtons}
          startIcon={<ArrowUpward />}
          variant="outlined"
        >
          Export
        </Button>
        <Button
          className={classes.actionButtons}
          startIcon={<ArrowDownward />}
          variant="outlined"
        >
          Import
        </Button>
      </div>
      <div className={classes.searchRow}>
        <TextField
          className={classes.searchBar}
          size="small"
          variant="outlined"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          className={classes.actionButtons}
          size="large"
          startIcon={<img src={Filter} alt="" width={15} />}
          variant="outlined"
        >
          Filters
        </Button>
      </div>
    </div>
  );
};

export default Index;
