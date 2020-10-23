// color: #253147 #243851

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import IndeterminateCheckBoxOutlinedIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
//import
import Title from "./Title";
const useStyles = makeStyles({
  root: { width: "100%", minHeight: "90vh" },
  inputWrapper: {
    padding: "1.25rem",
    backgroundColor: "#253147",
    margin: "2px",
  },
  inputRoot: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    height: "40px",
  },
  recordsWrapper: {
    padding: "0.5rem",
    backgroundColor: "#253147",
    margin: "2px",
  },
  input: {
    marginLeft: "1rem",
    flex: 1,
  },

  AddBtn: {
    fontSize: "0.75rem",
    padding: 3,
    right: 5,
    "& .MuiButton-startIcon": {
      marginRight: "0",
    },
  },
  clearBtn: {
    fontSize: "0.75rem",
    color: "white",
    border: "0.5px #fff solid",
    padding: 5,
    "& .MuiButton-startIcon": {
      marginRight: "0",
    },
  },
});

export default function Inputs({ title, color }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title color={color} text={title} />
      <div className={classes.inputWrapper}>
        <Paper component="div" className={classes.inputRoot}>
          <InputBase
            className={classes.input}
            placeholder={"Search " + title}
            inputProps={{ "aria-label": "search Keywords" }}
          />

          <Button
            variant="contained"
            color="primary"
            className={classes.AddBtn}
          >
            <AddCircleOutlineOutlinedIcon fontSize="small" />
            Add
          </Button>
        </Paper>
      </div>
      <div className={classes.recordsWrapper}>
        <div className={classes.recordItems}>
          {[1, 1, 1, 1, 1, 1].map((e, i) => (
            <List dense key={i}>
              <ListItem>
                <ListItemText primary="Single-line item" />
                <ListItemSecondaryAction>
                  <Button variant="outlined" className={classes.clearBtn}>
                    <IndeterminateCheckBoxOutlinedIcon fontSize="small" />
                    Clear
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          ))}
        </div>
      </div>
    </div>
  );
}
