import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
const Circle = ({ size, active }) => {
  const classes = useStyles();
  return (
    <Skeleton
      className={classes.root}
      animation={false}
      style={{
        display: "inline-block",
        marginLeft: 15,
        backgroundColor: "#3b86ff",
        opacity: active ? 1 : 0.3,
      }}
      variant="circle"
      width={size ? size : 15}
      height={size ? size : 15}
    />
  );
};
export default Circle;
