import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import
import Title from "./Title";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});
export default function Settings({ title, color }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title text={title} color={color} />
    </div>
  );
}
