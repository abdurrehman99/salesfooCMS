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
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
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

const drawerWidth = 280;

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
  nested: {
    paddingLeft: theme.spacing(10),
    paddingTop: 2,
    paddingBottom: 2,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  submenu: {
    borderLeftWidth: 1,
    borderLeftColor: "red",
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
    fontSize: 10,
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
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  avatar: {
    cursor: "pointer",
  },
}));

const Index = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [configuration, setConfiguration] = useState(false);
  const [user, setUser] = useState(false);
  const [sales, setSales] = useState(false);
  const [customer, setCustomer] = useState(false);

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
    setConfiguration(false);
    setUser(false);
    setSales(false);
    setCustomer(false);
  };

  const handleConfigurationClick = () => {
    setConfiguration(!configuration);
    if (!open) setOpen(true);
  };

  const handleUserClick = () => {
    setUser(!user);
    if (!open) setOpen(true);
  };

  const handleSalesClick = () => {
    setSales(!sales);
    if (!open) setOpen(true);
  };

  const handleCustomerClick = () => {
    setCustomer(!customer);
    if (!open) setOpen(true);
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
          <ListItem className={classes.listItem} button>
            <ListItemIcon>
              <HomeRoundedIcon className={classes.drawerIcon} />
            </ListItemIcon>
            <ListItemText primary={"DASHBOARD"} />
          </ListItem>

          <ListItem
            className={classes.listItem}
            onClick={handleConfigurationClick}
            button
          >
            <ListItemIcon>
              <SettingsRoundedIcon className={classes.drawerIcon} />
            </ListItemIcon>
            <ListItemText primary={"CONFIGURATION"} />
          </ListItem>
          <Collapse in={configuration} timeout="auto" unmountOnExit>
            <List className={classes.submenu} component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Template" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Picklist" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Currency" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem
            className={classes.listItem}
            onClick={handleUserClick}
            button
          >
            <ListItemIcon>
              <PersonRoundedIcon className={classes.drawerIcon} />
            </ListItemIcon>
            <ListItemText primary={"USER"} />
          </ListItem>
          <Collapse in={user} timeout="auto" unmountOnExit>
            <List className={classes.submenu} component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Access Management" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem
            className={classes.listItem}
            onClick={handleSalesClick}
            button
          >
            <ListItemIcon>
              <ImageOutlinedIcon className={classes.drawerIcon} />
            </ListItemIcon>
            <ListItemText primary={"SALES"} />
          </ListItem>
          <Collapse in={sales} timeout="auto" unmountOnExit>
            <List className={classes.submenu} component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Path" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Lead" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Deal" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Story Board" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem
            className={classes.listItem}
            onClick={handleCustomerClick}
            button
          >
            <ListItemIcon>
              <AccountCircleOutlinedIcon className={classes.drawerIcon} />
            </ListItemIcon>
            <ListItemText primary={"CUSTOMER"} />
          </ListItem>
          <Collapse in={customer} timeout="auto" unmountOnExit>
            <List className={classes.submenu} component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Account" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Customer" />
              </ListItem>
            </List>
          </Collapse>
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
