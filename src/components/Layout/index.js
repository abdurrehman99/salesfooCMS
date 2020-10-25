import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import Avatar from "@material-ui/core/Avatar";
import salesfooLogo from "../../assets/salesfoo.png";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#f0f2f5",
  },
  toolbar: {
    paddingLeft: 10,
    paddingRight: 45,
    height: 80,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    background: theme.palette.primary.main,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    background: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  content: {
    flexGrow: 1,
    marginTop: 100,
    padding: theme.spacing(3),
  },
  navLogo: {
    width: 218,
    height: 65,
    marginRight: "auto",
  },
  drawerIcon: {
    color: "white",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 5,
  },
  toggleIcon: {
    marginLeft: 5,
    color: "white",
    marginTop: 10,
    marginBottom: 10,
  },
  textWhite: {
    color: "white",
    paddingTop: 110,
  },
  blackIcon: {
    color: "black",
    cursor: "pointer",
    marginRight: 15,
  },
  menuIcon: {
    color: "black",
    cursor: "pointer",
    marginRight: 20,
    marginLeft: 30,
  },
  avatar: {
    cursor: "pointer",
  },
}));

const Index = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <img src={salesfooLogo} alt="" className={classes.navLogo} />
          <PersonRoundedIcon className={classes.blackIcon} />
          <SearchOutlinedIcon className={classes.blackIcon} />
          <MenuOutlinedIcon className={classes.blackIcon} />
          <NotificationsOutlinedIcon className={classes.blackIcon} />
          <MoreVertOutlinedIcon className={classes.menuIcon} />
          <Avatar alt="Sales" src="" className={classes.avatar} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <List className={classes.textWhite}>
          <ListItem button>
            <ListItemIcon>
              <HomeRoundedIcon className={classes.drawerIcon} />
            </ListItemIcon>
            <ListItemText primary={"DASHBOARD"} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsRoundedIcon className={classes.drawerIcon} />
            </ListItemIcon>
            <ListItemText primary={"CONFIGURATION"} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonRoundedIcon className={classes.drawerIcon} />
            </ListItemIcon>
            <ListItemText primary={"USER"} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ImageOutlinedIcon className={classes.drawerIcon} />
            </ListItemIcon>
            <ListItemText primary={"SALES"} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleOutlinedIcon className={classes.drawerIcon} />
            </ListItemIcon>
            <ListItemText primary={"CUSTOMER"} />
          </ListItem>
        </List>
        <ListItem style={{ marginTop: "auto" }} onClick={toggleDrawer} button>
          <ListItemIcon>
            {open ? (
              <ChevronLeftIcon className={classes.toggleIcon} />
            ) : (
              <ChevronRightIcon className={classes.toggleIcon} />
            )}
          </ListItemIcon>
        </ListItem>
      </Drawer>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default Index;
