import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import salesfooLogo from "../../assets/salesfoo.png";
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#f0f2f5",
  },
  drawer: {
    width: 80,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 80,
    background: theme.palette.primary.main,
  },
  drawerContainer: {
    overflow: "auto",
    color: "white",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  whiteIcon: {
    color: "white",
    margin: "auto",
  },
  blackIcon: {
    color: "black",
  },
}));

const Index = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img src={salesfooLogo} style={{ marginRight: "auto" }} width={150} />

          <PersonRoundedIcon className={classes.blackIcon} />
          <SearchOutlinedIcon className={classes.blackIcon} />
          <MenuOutlinedIcon className={classes.blackIcon} />
          <NotificationsOutlinedIcon className={classes.blackIcon} />
          <MoreVertOutlinedIcon className={classes.blackIcon} />
          <Avatar alt="Sales" src="" />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem className={classes.marginAuto} button>
              <HomeRoundedIcon className={classes.whiteIcon} />
            </ListItem>
            <ListItem button>
              <SettingsRoundedIcon className={classes.whiteIcon} />
            </ListItem>
            <ListItem button>
              <PersonRoundedIcon className={classes.whiteIcon} />
            </ListItem>
            <ListItem button>
              <ImageOutlinedIcon className={classes.whiteIcon} />
            </ListItem>
            <ListItem button>
              <AccountCircleOutlinedIcon className={classes.whiteIcon} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        {/* <Toolbar /> */}
        {children}
      </main>
    </div>
  );
};

export default Index;
