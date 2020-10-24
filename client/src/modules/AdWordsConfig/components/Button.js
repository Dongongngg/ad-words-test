//  This is the button group used in the Settings components, to + or -
//  Props:
//  -   value: receiving from parent components as a defualt value, will be set

import React, { useState } from "react";
//material ui core
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "0.75rem 0.5rem",
    display: "inline-flex",
    width: "4rem",
    height: "2rem",
    border: "2px #283B59 solid",
    borderRadius: "4px",
  },
  num: {
    width: "75%",
    display: "inherit",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    border: "2px solid #283B59",
    minWidth: "1rem",
    borderRadius: "0",
    color: "white",
    width: "1.5rem",
    height: "50%",
    padding: "0",
    fontSize: "1rem",
    lineHeight: "0",
    borderRight: "1px",
    "&:first-child": {
      borderTop: "none",
    },
    "&:last-child": {
      borderBottom: "none",
    },
  },
});

const MyButton = ({ value }) => {
  const classes = useStyles();
  const [counter, setCounter] = useState(value);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.num}>{counter}</div>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained primary button group"
      >
        <Button onClick={handleIncrement} className={classes.btn}>
          +
        </Button>
        <Button onClick={handleDecrement} className={classes.btn}>
          -
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default MyButton;
