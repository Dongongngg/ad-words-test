//  This component contains one textfeild and one section to display all the input records
//  Props:
//  - title, color, icon: set style for each part
//  color: #253147(section) #243851(app's background) #283B59(border)

import React from "react";
//material ui core
import {
  makeStyles,
  Paper,
  Button,
  InputBase,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
//material icons
import IndeterminateCheckBoxOutlinedIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
//import my components
import Title from "./Title";

const useStyles = makeStyles({
  root: { width: "100%", minHeight: "90vh" },
  inputWrapper: {
    padding: "1.25rem",
    backgroundColor: "#253147",
    margin: 2,
  },
  inputRoot: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    height: "3rem",
  },
  recordsWrapper: {
    padding: "0.75rem",
    backgroundColor: "#253147",
    margin: 2,
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
    fontSize: "0.6rem",
    color: "white",
    border: "2px #283B59 solid",
    padding: 5,
    "& .MuiButton-startIcon": {
      marginRight: "0",
    },
  },
});

export default function Inputs({ title, color, icon }) {
  const classes = useStyles();
  //get background-color style's hex value
  const colorHex =
    color === "blue"
      ? "#2196f3"
      : color === "green"
      ? "#4caf50"
      : color === "yellow"
      ? "#ffc107"
      : color;

  const itemArr = [
    "Item",
    "Item",
    "Item",
    "Item",
    "Item",
    "Item",
    "Item",
    "Item",
    "Item",
    "Item",
    "Item",
    "Item",
    "Item",
  ];
  return (
    <div className={classes.root}>
      {/* title section */}
      <Title color={color} text={title} icon={icon} />
      {/* text area section */}
      <div className={classes.inputWrapper}>
        <Paper component="div" className={classes.inputRoot}>
          <InputBase
            className={classes.input}
            placeholder={"Search " + title}
            inputProps={{ "aria-label": "search Keywords" }}
          />

          <Button
            variant="contained"
            style={{ backgroundColor: colorHex, color: "white" }}
            className={classes.AddBtn}
          >
            <AddCircleOutlineOutlinedIcon fontSize="small" />
            Add
          </Button>
        </Paper>
      </div>
      {/* List all the records */}
      {/* As not required in the task, I will leave this part as fake input*/}
      <div className={classes.recordsWrapper}>
        <div className={classes.recordItems}>
          {itemArr.map((e, i) => (
            <List dense key={i}>
              <ListItem>
                <ListItemText primary={e} />
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
