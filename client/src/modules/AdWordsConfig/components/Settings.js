//  This is the component to display setting section of module.
//  Each section of this page: title-checkbox-input-checkbox-checkbox-button
//  Will set a initial state as the initial settings
//  All settings value will be setState() every time the value onChange()
//  A initial setting value will be create from backend, and will be loaded as json.
import React, { useState } from "react";
//material ui core
import {
  makeStyles,
  withStyles,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
//icons
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
//my components
import Title from "./Title";
import MyButton from "./Button";

//a wrapper component with dark blue bgcolor/margin, using for wrapping contents
const MyBox = withStyles({
  root: {
    backgroundColor: "#253147",
    padding: "1.3rem",
    margin: 2,
    "@media (max-width: 780px)": {
      margin: "1rem 0",
    },
  },
})(Box);
//inline text for number input section
const MyText = withStyles({
  root: { display: "inline" },
})(Typography);
//line text
const MyTextBox = withStyles({
  root: {
    padding: "0",
    "@media (max-width: 780px)": {
      padding: "1rem",
    },
  },
})(Box);

const useStyles = makeStyles({
  root: {
    padding: "1rem",
    "@media (max-width: 780px)": {
      padding: 0,
    },
  },
  allWrapper: {
    color: "white",
  },
  browserWrapper: {
    width: "80%",
    margin: "2px 2px 1px 2px",
    textAlign: "center",
    "@media (max-width: 780px)": {
      textAlign: "left",
    },
  },
  incognitoWrapper: { margin: "2px 2px 1px 2px" },
  //style for checkboxlabel
  checkBoxLabel: {
    "& .MuiFormControlLabel-root": {
      margin: "0 0.25rem",
      height: "calc(3rem - 6px)",
      "@media (max-width: 780px)": {
        margin: "1rem",
        width: "75%",
      },
      "@media (mix-width: 1680px)": {
        margin: "0.25rem",
      },
      "& .MuiCheckbox-root ": {
        padding: "0 0 0 6px",
      },
      "&> .MuiFormControlLabel-label": {
        fontSize: "0.75rem",
        padding: "0.5rem",
        "@media (max-width: 780px)": {
          fontSize: "1rem",
          padding: "0.2rem",
        },
      },
    },
  },

  checkbox: {
    border: "2px #283B59 solid",
    borderRadius: "4px",
  },
  modeWrapper: {
    textAlign: "center",
  },
  actionWrapper: {
    "& .MuiFormControlLabel-root": {
      margin: "0.25rem 0.25rem",
    },
    "@media (max-width: 780px)": {
      textAlign: "center",
      "& .MuiFormControlLabel-root": {
        margin: "1rem",
      },
    },
  },
  btnWrapper: {
    margin: 2,
    paddingBottom: "1rem",
    display: "flex",
    flexWrap: "wrap",
    "@media (max-width:780px)": {
      justifyContent: "center",
    },
  },
  btn: {
    color: "white",
    padding: "0.5rem 3rem",
    "&:first-child": { padding: "0.5rem 4rem" },
    "@media (max-width:780px)": {
      padding: "0.25rem 1rem",
      "&:first-child": { padding: "0.25rem 1rem" },
    },
    margin: "0 0.5rem 0 0",
  },
  divider: {
    backgroundColor: "#243851",
    padding: "0.4rem",
    "@media (max-width:780px)": {
      padding: "0.5rem",
    },
  },
});
const Settings = ({ title, color }) => {
  const classes = useStyles();
  const [inputs, setInputs] = useState({ browser: "" });
  const handleChange = () => {};
  return (
    <div className={classes.root}>
      {/* Title section */}
      <Title text={title} color={color} icon="Setting" />
      <div className={classes.allWrapper}>
        {/* 1st checkbox section, will be divided into left and right by display: flex */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left section */}
          <MyBox className={classes.browserWrapper}>
            <div className={classes.checkBoxLabel}>
              {[1, 1, 1, 1, 1].map((e, i) => (
                <FormControlLabel
                  className={classes.checkbox}
                  control={
                    <Checkbox
                      // checked={inputs.browser}
                      // onChange={handleChange}
                      color="primary"
                      name="Chrome"
                      size="small"
                      style={{ color: "#ffc107" }}
                    />
                  }
                  key={i}
                  label="Chrome"
                />
              ))}
            </div>
          </MyBox>
          {/* Right section */}
          <MyBox className={classes.incognitoWrapper}>
            <div className={classes.checkBoxLabel}>
              <FormControlLabel
                className={classes.checkbox}
                control={
                  <Checkbox
                    // checked={inputs.browser}
                    // onChange={handleChange}
                    name="Chrome"
                    size="small"
                    style={{ color: "#ffc107" }}
                  />
                }
                label="Incognito"
              />
            </div>
          </MyBox>
        </div>
        {/*  Number input section */}
        <MyBox>
          <MyTextBox>
            <MyText>Wait </MyText>
            <MyButton />
            <MyButton />
            <MyText>seconds on the targeted website.</MyText>
          </MyTextBox>

          <MyTextBox>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="visit_within"
                  size="small"
                  style={{ color: "#2196f3" }}
                />
              }
              style={{ marginRight: 0 }}
            />
            <MyText>Visit the Page whithin the Site.</MyText>
          </MyTextBox>
          <MyTextBox>
            <MyButton />
            <MyText>pages</MyText>
            <MyButton />
            <MyButton />
            <MyText>visit from to second.</MyText>
          </MyTextBox>
          <MyTextBox>
            <MyText>After the operation is complete</MyText>
            <MyButton />
            <MyButton />
            <MyText>seconds wait.</MyText>
          </MyTextBox>
          <MyTextBox>
            <MyText>Target site</MyText>
            <MyButton />
            <MyText>if not found times</MyText>
            <MyButton />
            <MyText>minutes wait.</MyText>
          </MyTextBox>
          <MyTextBox>
            <MyButton />
            <MyText>automatic reset after operation.</MyText>
          </MyTextBox>
        </MyBox>
        <div className={classes.divider}></div>
        {/* 2nd checkbox section */}
        <MyBox className={`${classes.modeWrapper} ${classes.checkBoxLabel}`}>
          {[1, 1, 1, 1, 1].map((e, i) => (
            <FormControlLabel
              className={classes.checkbox}
              control={
                <Checkbox
                  // checked={inputs.browser}
                  // onChange={handleChange}
                  name="Chrome"
                  size="small"
                  style={{ color: "#4caf50" }}
                />
              }
              key={i}
              label="Chromesdsd"
            />
          ))}
        </MyBox>
        {/* 3rd checkbox section */}
        <MyBox className={`${classes.actionWrapper} ${classes.checkBoxLabel}`}>
          {[1, 1, 1, 1, 1, 1, 1].map((e, i) => (
            <FormControlLabel
              className={classes.checkbox}
              control={
                <Checkbox
                  color="primary"
                  // checked={inputs.browser}
                  // onChange={handleChange}
                  name="Chrome"
                  size="small"
                  style={{ color: "#2196f3" }}
                />
              }
              key={i}
              label="Chromesdsd sdasds"
            />
          ))}
        </MyBox>
        <div className={classes.divider}></div>
        {/* Button section */}
        <div className={classes.btnWrapper}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#ffc107" }}
            className={classes.btn}
          >
            EXPORT REPORT
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#2196f3" }}
            className={classes.btn}
          >
            <PauseCircleOutlineIcon fontSize="small" />
            STOP
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#4caf50" }}
            className={classes.btn}
          >
            <PlayCircleOutlineIcon fontSize="small" />
            START
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
