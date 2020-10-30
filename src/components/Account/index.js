import React, { useState } from "react";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Grid,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  IconButton,
} from "@material-ui/core";
import Circle from "../CommonComponents/Circle";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import Add from "@material-ui/icons/Add";
import RefreshIcon from "@material-ui/icons/Refresh";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Filter from "../../assets/icons/Filter.svg";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#EDF6FF",
    color: "#66757F",
    height: 45,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: theme.spacing(5),
  },
  body: {
    fontSize: 14,
    paddingLeft: theme.spacing(6),
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    height: 65,
    "&:hover": {
      backgroundColor: "#EDF6FF",
    },
    // "&:nth-of-type(odd)": {
    // },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles((theme) => ({
  bodyPadding: {
    paddingLeft: theme.spacing(5),
    paddingBottom: theme.spacing(1),
  },
  actionButtons: {
    marginLeft: theme.spacing(5),
    width: "6rem",
    fontSize: "13px",
  },
  table: {
    border: 0,
  },
  tableContianer: {
    paddingTop: 20,
    maxWidth: "100%",
  },
  iconButton: {
    paddingTop: 0,
    paddingButtom: 0,
  },
  searchBar: {
    width: "13.6rem",
  },
  searchRow: {
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(3),
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

// const rows = [
//   {
//     id: 1,
//     ACCOUNT: "IBM",
//     "COMPANY SIZE": "1-18",
//     URL: "https://www.google.com/",
//     STATUS: "Active",
//     "CONTACT SIZE": "8",
//   },
//   {
//     id: 2,
//     ACCOUNT: "IBM",
//     "COMPANY SIZE": "1-10",
//     URL: "https://www.google.com/",
//     STATUS: "Active",
//     "CONTACT SIZE": "8",
//   },
//   {
//     id: 3,
//     ACCOUNT: "IBM",
//     "COMPANY SIZE": "1-10",
//     URL: "https://www.google.com/",
//     STATUS: "Active",
//     "CONTACT SIZE": "8",
//   },
//   {
//     id: 4,
//     ACCOUNT: "IBM",
//     "COMPANY SIZE": "1-10",
//     URL: "https://www.google.com/",
//     STATUS: "Active",
//     "CONTACT SIZE": "8",
//   },
//   {
//     id: 5,
//     ACCOUNT: "IBM",
//     "COMPANY SIZE": "1-10",
//     URL: "https://www.google.com/",
//     STATUS: "Active",
//     "CONTACT SIZE": "8",
//   },
//   {
//     id: 6,
//     ACCOUNT: "IBM",
//     "COMPANY SIZE": "1-10",
//     URL: "https://www.google.com/",
//     STATUS: "Active",
//     "CONTACT SIZE": "8",
//   },
//   {
//     id: 7,
//     ACCOUNT: "IBM",
//     "COMPANY SIZE": "1-10",
//     URL: "https://www.google.com/",
//     STATUS: "Active",
//     "CONTACT SIZE": "8",
//   },
//   {
//     id: 8,
//     ACCOUNT: "IBM",
//     "COMPANY SIZE": "1-10",
//     URL: "https://www.google.com/",
//     STATUS: "Active",
//     "CONTACT SIZE": "8",
//   },
//   {
//     id: 9,
//     ACCOUNT: "IBM",
//     "COMPANY SIZE": "1-10",
//     URL: "https://www.google.com/",
//     STATUS: "Active",
//     "CONTACT SIZE": "8",
//   },
//   {
//     id: 10,
//     ACCOUNT: "IBM",
//     "COMPANY SIZE": "1-10",
//     URL: "https://www.google.com/",
//     STATUS: "Active",
//     "CONTACT SIZE": "8",
//   },
//   {
//     id: 11,
//     ACCOUNT: "IBM",
//     "COMPANY SIZE": "1-10",
//     URL: "https://www.google.com/",
//     STATUS: "Active",
//     "CONTACT SIZE": "8",
//   },
//   {
//     id: 12,
//     ACCOUNT: "IBM",
//     "COMPANY SIZE": "1-10",
//     URL: "https://www.google.com/",
//     STATUS: "Active",
//     "CONTACT SIZE": "8",
//   },
// ];

const Index = () => {
  const classes = useStyles();
  const [toggle, setToggle] = useState([false, false, false, false, false]);

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
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>
                SELECT
                <Circle active={true} />
              </StyledTableCell>
              <StyledTableCell>
                <div
                  style={{
                    verticalAlign: "center",
                    display: "flex",
                  }}
                >
                  <p>ACCOUNT</p>
                  <IconButton
                    onClick={() =>
                      setToggle((prevState) => [
                        !prevState[0],
                        false,
                        false,
                        false,
                        false,
                      ])
                    }
                  >
                    {toggle[0] ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </div>
              </StyledTableCell>
              <StyledTableCell>
                <div
                  style={{
                    verticalAlign: "center",
                    display: "flex",
                  }}
                >
                  <p>COMPANY SIZE</p>
                  <IconButton
                    onClick={() =>
                      setToggle((prevState) => [
                        false,
                        !prevState[1],
                        false,
                        false,
                        false,
                      ])
                    }
                  >
                    {toggle[1] ? (
                      <ExpandLess onPress={() => setToggle([])} />
                    ) : (
                      <ExpandMore onPress={() => setToggle([])} />
                    )}
                  </IconButton>
                </div>
              </StyledTableCell>
              <StyledTableCell>
                <div
                  style={{
                    verticalAlign: "center",
                    display: "flex",
                  }}
                >
                  <p>URL</p>
                  <IconButton
                    onClick={() =>
                      setToggle((prevState) => [
                        false,
                        false,
                        !prevState[2],
                        false,
                        false,
                      ])
                    }
                  >
                    {toggle[2] ? (
                      <ExpandLess onPress={() => setToggle([])} />
                    ) : (
                      <ExpandMore onPress={() => setToggle([])} />
                    )}
                  </IconButton>
                </div>
              </StyledTableCell>
              <StyledTableCell>
                <div
                  style={{
                    verticalAlign: "center",
                    display: "flex",
                  }}
                >
                  <p>STATUS</p>
                  <IconButton
                    onClick={() =>
                      setToggle((prevState) => [
                        false,
                        false,
                        false,
                        !prevState[3],
                        false,
                      ])
                    }
                  >
                    {toggle[3] ? (
                      <ExpandLess onPress={() => setToggle([])} />
                    ) : (
                      <ExpandMore onPress={() => setToggle([])} />
                    )}
                  </IconButton>
                </div>
              </StyledTableCell>
              <StyledTableCell>
                <div
                  style={{
                    verticalAlign: "center",
                    display: "flex",
                  }}
                >
                  <p>CONTACT SIZE</p>
                  <IconButton
                    onClick={() =>
                      setToggle((prevState) => [
                        false,
                        false,
                        false,
                        false,
                        !prevState[4],
                      ])
                    }
                  >
                    {toggle[4] ? (
                      <ExpandLess onPress={() => setToggle([])} />
                    ) : (
                      <ExpandMore onPress={() => setToggle([])} />
                    )}
                  </IconButton>
                </div>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell>
                  <Circle active={false} />
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.calories}</StyledTableCell>
                <StyledTableCell>{row.fat}</StyledTableCell>
                <StyledTableCell>{row.carbs}</StyledTableCell>
                <StyledTableCell>{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                // rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={12}
                count={rows.length}
                rowsPerPage={2}
                page={6}
                // SelectProps={{
                //   inputProps: { "aria-label": "rows per page" },
                //   native: true,
                // }}
                // onChangePage={handleChangePage}
                // onChangeRowsPerPage={handleChangeRowsPerPage}
                // ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default Index;
