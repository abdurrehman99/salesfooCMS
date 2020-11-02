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
  Avatar,
  Breadcrumbs,
  IconButton,
  Link,
} from "@material-ui/core";
import Circle from "../CommonComponents/Circle";
// import FullpageLoader from "../CommonComponents/FullpageLoader";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import Add from "@material-ui/icons/Add";
import RefreshIcon from "@material-ui/icons/Refresh";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Filter from "../../assets/icons/Filter.svg";
import navArrow from "../../assets/icons/navarrow.svg";
import {
  ExpandLess,
  ExpandMore,
  ChevronLeft,
  ChevronRight,
  NavigateNextIcon,
} from "@material-ui/icons";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#EDF6FF",
    color: "#66757F",
    height: 45,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: theme.spacing(6),
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

const useStyles = makeStyles((theme) => ({
  bodyPadding: {
    paddingBottom: theme.spacing(1),
  },
  actionButtons: {
    marginLeft: theme.spacing(5),
    width: "6rem",
    fontSize: "13px",
  },
  link: {
    display: "flex",
  },
  table: {
    border: 0,
  },
  tableContianer: {
    paddingTop: 20,
    maxWidth: "100vw",
  },
  iconButton: {
    paddingTop: 0,
    paddingButtom: 0,
  },
  searchBar: {
    width: "13.6rem",
  },
  avatar: {
    marginRight: 10,
  },
  breadcrumbs: {
    paddingTop: 15,
    paddingBottom: 10,
  },
  navLink: {
    fontSize: 14,
    fontWeight: "500",
  },
  navLinkActive: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0582ff",
  },
  searchRow: {
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(3),
    verticalAlign: "center",
  },
  inlineFlex: {
    display: "inline-flex",
    verticalAlign: "center",
    width: "100%",
  },
  para: {
    fontWeight: "lighter",
    paddingBottom: 10,
  },
  topBox: {
    marginLeft: theme.spacing(5),
  },
  footerRow: {
    width: "100%",
    margin: "auto",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  footerButton: {
    // padding: 0,
    marginLeft: 8,
    borderRadius: 5,
    // width: 30,
  },
}));

const rows = [
  {
    id: 1,
    account: { name: "IBM", description: "Information Technology", image: "" },
    companySize: "1-18",
    URL: "https://www.google.com/",
    status: "Active",
    contactSize: 9,
  },
  {
    id: 1,
    account: { name: "IBM", description: "Information Technology", image: "" },
    companySize: "1-18",
    URL: "https://www.google.com/",
    status: "Active",
    contactSize: 9,
  },
  {
    id: 1,
    account: { name: "IBM", description: "Information Technology", image: "" },
    companySize: "1-18",
    URL: "https://www.google.com/",
    status: "Active",
    contactSize: 9,
  },
  {
    id: 1,
    account: { name: "IBM", description: "Information Technology", image: "" },
    companySize: "1-18",
    URL: "https://www.google.com/",
    status: "Active",
    contactSize: 9,
  },
  {
    id: 1,
    account: { name: "IBM", description: "Information Technology", image: "" },
    companySize: "1-18",
    URL: "https://www.google.com/",
    status: "Active",
    contactSize: 9,
  },
  {
    id: 1,
    account: { name: "IBM", description: "Information Technology", image: "" },
    companySize: "1-18",
    URL: "https://www.google.com/",
    status: "Active",
    contactSize: 9,
  },
];

const Index = () => {
  const classes = useStyles();
  const [toggle, setToggle] = useState([false, false, false, false, false]);

  return (
    <div>
      <div className={classes.topBox}>
        <Breadcrumbs
          separator={<img src={navArrow} width={12} height={12} alt="" />}
          className={classes.breadcrumbs}
        >
          <Typography className={classes.navLink} color="textPrimary">
            Customer
          </Typography>
          <Typography className={classes.navLinkActive} color="textPrimary">
            Account
          </Typography>
        </Breadcrumbs>
        <Typography className={classes.bodyPadding} variant="h6">
          ACCOUNT
        </Typography>
        <Typography className={classes.para} variant="p">
          Account represents and induvial customer account, organization or
          partner involved with business
        </Typography>
      </div>
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
              <StyledTableCell align="center">
                <div className={classes.inlineFlex}>
                  <p>SELECT</p>
                  <Circle active={true} />
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <div className={classes.inlineFlex}>
                  <p>ACCOUNT</p>
                  <IconButton
                    onClick={() =>
                      setToggle([!toggle[0], false, false, false, false])
                    }
                  >
                    {toggle[0] ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <div className={classes.inlineFlex}>
                  <p>COMPANY SIZE</p>
                  <IconButton
                    onClick={() =>
                      setToggle([false, !toggle[1], false, false, false])
                    }
                  >
                    {toggle[1] ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <div className={classes.inlineFlex}>
                  <p>URL</p>
                  <IconButton
                    onClick={() =>
                      setToggle([false, false, !toggle[2], false, false])
                    }
                  >
                    {toggle[2] ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <div className={classes.inlineFlex}>
                  <p>STATUS</p>
                  <IconButton
                    onClick={() =>
                      setToggle([false, false, false, !toggle[3], false])
                    }
                  >
                    {toggle[3] ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <div className={classes.inlineFlex}>
                  <p>CONTACT SIZE</p>
                  <IconButton
                    onClick={() =>
                      setToggle([false, false, false, false, !toggle[4]])
                    }
                  >
                    {toggle[4] ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </div>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center">
                  <Circle
                    onClick={() => console.log("row clicked")}
                    active={false}
                  />
                </StyledTableCell>
                <StyledTableCell align="left">
                  <div className={classes.inlineFlex}>
                    <Avatar alt="Salesfoo" src="" className={classes.avatar} />
                    {row.account.name}
                    <br />
                    {row.account.description}
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.companySize}
                </StyledTableCell>
                <StyledTableCell align="center">{row.URL}</StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.contactSize}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.footerRow}>
          <Button
            size="small"
            className={classes.footerButton}
            variant="outlined"
            color="primary"
          >
            <ChevronLeft />
          </Button>
          <Button
            // size="small"
            className={classes.footerButton}
            variant="outlined"
            color="primary"
          >
            1
          </Button>
          <Button
            // size="small"
            className={classes.footerButton}
            variant="outlined"
            color="primary"
          >
            2
          </Button>
          <Button
            // size="small"
            className={classes.footerButton}
            variant="outlined"
            color="primary"
          >
            3
          </Button>
          <Button
            size="small"
            className={classes.footerButton}
            variant="outlined"
            color="primary"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
