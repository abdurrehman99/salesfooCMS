import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Add from "@material-ui/icons/Add";
import RefreshIcon from "@material-ui/icons/Refresh";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles((theme) => ({}));

const Index = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h6">ACCOUNT</Typography>
      <Typography variant="p">
        Account represents and induvial customer account, organization or
        partner involved with business
      </Typography>
      <hr />
      <Button startIcon={<Add />} variant="outlined">
        New
      </Button>
      <Button startIcon={<RefreshIcon />} variant="outlined">
        Refresh
      </Button>
      <Button startIcon={<DeleteIcon />} variant="outlined">
        Delete
      </Button>
      <Button startIcon={<ArrowUpward />} variant="outlined">
        Export
      </Button>
      <Button startIcon={<ArrowDownward />} variant="outlined">
        Import
      </Button>
    </div>
  );
};

export default Index;
