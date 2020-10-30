import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Grid,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
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
  table: {
    border: 0,
  },
  tableContianer: {
    paddingLeft: theme.spacing(2),
    paddingTop: 20,
    width: "100%",
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

const columns = [
  // { field: "SELECT", headerName: "SELECT", width: 100 },
  { field: "ACCOUNT", headerName: "ACCOUNT", width: 200 },
  {
    field: "COMPANY SIZE",
    headerName: "COMPANY SIZE",
    // type: "number",
    width: 180,
  },
  {
    field: "URL",
    headerName: "URL",
    width: 240,
  },
  {
    field: "STATUS",
    headerName: "STATUS",
    width: 200,
    // valueGetter: (params) =>
    //   `${params.getValue("firstName") || ""} ${
    //     params.getValue("lastName") || ""
    //   }`,
  },
  {
    field: "CONTACT SIZE",
    headerName: "CONTACT SIZE",
    width: 170,
  },
];

const rows = [
  {
    id: 1,
    ACCOUNT: "IBM",
    "COMPANY SIZE": "1-18",
    URL: "https://www.google.com/",
    STATUS: "Active",
    "CONTACT SIZE": "8",
  },
  {
    id: 2,
    ACCOUNT: "IBM",
    "COMPANY SIZE": "1-10",
    URL: "https://www.google.com/",
    STATUS: "Active",
    "CONTACT SIZE": "8",
  },
  {
    id: 3,
    ACCOUNT: "IBM",
    "COMPANY SIZE": "1-10",
    URL: "https://www.google.com/",
    STATUS: "Active",
    "CONTACT SIZE": "8",
  },
  {
    id: 4,
    ACCOUNT: "IBM",
    "COMPANY SIZE": "1-10",
    URL: "https://www.google.com/",
    STATUS: "Active",
    "CONTACT SIZE": "8",
  },
  {
    id: 5,
    ACCOUNT: "IBM",
    "COMPANY SIZE": "1-10",
    URL: "https://www.google.com/",
    STATUS: "Active",
    "CONTACT SIZE": "8",
  },
  {
    id: 6,
    ACCOUNT: "IBM",
    "COMPANY SIZE": "1-10",
    URL: "https://www.google.com/",
    STATUS: "Active",
    "CONTACT SIZE": "8",
  },
  {
    id: 7,
    ACCOUNT: "IBM",
    "COMPANY SIZE": "1-10",
    URL: "https://www.google.com/",
    STATUS: "Active",
    "CONTACT SIZE": "8",
  },
  {
    id: 8,
    ACCOUNT: "IBM",
    "COMPANY SIZE": "1-10",
    URL: "https://www.google.com/",
    STATUS: "Active",
    "CONTACT SIZE": "8",
  },
  {
    id: 9,
    ACCOUNT: "IBM",
    "COMPANY SIZE": "1-10",
    URL: "https://www.google.com/",
    STATUS: "Active",
    "CONTACT SIZE": "8",
  },
  {
    id: 10,
    ACCOUNT: "IBM",
    "COMPANY SIZE": "1-10",
    URL: "https://www.google.com/",
    STATUS: "Active",
    "CONTACT SIZE": "8",
  },
  {
    id: 11,
    ACCOUNT: "IBM",
    "COMPANY SIZE": "1-10",
    URL: "https://www.google.com/",
    STATUS: "Active",
    "CONTACT SIZE": "8",
  },
  {
    id: 12,
    ACCOUNT: "IBM",
    "COMPANY SIZE": "1-10",
    URL: "https://www.google.com/",
    STATUS: "Active",
    "CONTACT SIZE": "8",
  },
];

const Index = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.bodyPadding} variant="h6">
        ACCOUNT
      </Typography>
      <Typography className={classes.bodyPadding} variant="body2">
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
          // margin="dense"
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
      <div className={classes.tableContianer}>
        <DataGrid
          className={classes.table}
          rows={rows}
          columns={columns}
          checkboxSelection
          pageSize={8}
          // headerHeight={45}
          rowHeight={60}
          autoHeight
          hideFooterRowCount
          // checkboxSelection
        />
      </div>
    </div>
  );
};

export default Index;
