//  This is the button group used in the Settings components, to + or -
//  Receiving a ref from Settings componenets, tell it each name of
//  Props:
//  - value: value of Setting's number input, will be set
//  - handleIncrement/handleDecrement: take ref container that passed from Settings component,
//    so it can setState iteratelly to correct state
//  - name: above functions need values[refName.current.name]
//  - refNum: create ref to access child component's dom, which is name props

import React from "react";
import PropTypes from "prop-types";
// material ui core
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "0.75rem 0.5rem",
    display: "inline-flex",
    width: "4rem",
    height: "2rem",
    border: "2px #283B59 solid",
    borderRadius: "4px"
  },
  num: {
    width: "75%",
    display: "inherit",
    justifyContent: "center",
    alignItems: "center"
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
      borderTop: "none"
    },
    "&:last-child": {
      borderBottom: "none"
    }
  }
});

const MyButton = ({
  value,
  handleIncrement,
  handleDecrement,
  name,
  refNum
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.num}>{value}</div>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained primary button group"
      >
        <Button
          onClick={() => handleIncrement(refNum)}
          className={classes.btn}
          name={name}
          ref={refNum}
        >
          +
        </Button>
        <Button
          onClick={() => handleDecrement(refNum)}
          className={classes.btn}
          name={name}
          ref={refNum}
        >
          -
        </Button>
      </ButtonGroup>
    </div>
  );
};
MyButton.propTypes = {
  value: PropTypes.string,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  name: PropTypes.string,
  refNum: PropTypes.string
};
export default MyButton;
