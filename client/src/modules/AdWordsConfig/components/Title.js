import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const useStyle = makeStyles({
  titleWrapper: { padding: "1rem" },
  title: {
    color: (props) => props.color,
  },
});
const Title = ({ color, text, icon }) => {
  const styleProps = {
    color:
      color === "blue"
        ? "#2196f3"
        : color === "green"
        ? "#4caf50"
        : color === "yellow"
        ? "#ffeb3b"
        : color,
  };
  const classes = useStyle(styleProps);
  return (
    <header className={classes.titleWrapper}>
      <Typography variant="h4" className={classes.title}>
        {text}
      </Typography>
    </header>
  );
};

export default Title;
