import React, { useState } from "react";
import {
  makeStyles,
  withStyles,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Title from "./Title";

//wrapper with dark blue  bgcolor, using for wrapping contents
const MyBox = withStyles({
  root: {
    backgroundColor: "#253147",
    padding: "1.25rem",
    margin: 2,
    "@media (max-width: 780px)": {},
  },
})(Box);
//inline text
const MyText = withStyles({
  root: { display: "inline" },
})(Typography);
//line text
const MyTextBox = withStyles({
  root: { paddingTop: "1rem", paddingBottom: "1rem" },
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
    display: "flex",
    justifyContent: "space-around",
  },
  checkBoxLabel: {
    "@media (max-width: 780px)": {
      padding: "0.5rem 0",
    },
    "& .MuiFormControlLabel-root": {
      margin: "0 6px",
      height: "36px",
      "@media (max-width: 780px)": {
        margin: "6px 6px",
      },
      "& .MuiCheckbox-root ": {
        padding: 2,
      },
      "&> .MuiFormControlLabel-label": {
        fontSize: "0.75rem",
        padding: "0.5rem",
        "@media (max-width: 780px)": {
          padding: "0.2rem",
        },
      },
    },
    "&:last-child": {},
  },
  checkbox: {
    border: "2px #243851 solid",
    borderRadius: "4px",
  },
  modeWrapper: {
    textAlign: "center",
  },
});
const Settings = ({ title, color }) => {
  const classes = useStyles();
  const [inputs, setInputs] = useState({ browser: "" });
  const handleChange = () => {};
  return (
    <div className={classes.root}>
      <Title text={title} color={color} />
      <div className={classes.allWrapper}>
        <MyBox className={classes.browserWrapper}>
          <div className={classes.checkBoxLabel}>
            {[1, 1, 1, 1, 1].map((e, i) => (
              <FormControlLabel
                className={classes.checkbox}
                control={
                  <Checkbox
                    // checked={inputs.browser}
                    // onChange={handleChange}
                    name="Chrome"
                    size="small"
                  />
                }
                key={i}
                label="Chrome"
              />
            ))}
          </div>

          <div className={classes.checkBoxLabel}>
            <FormControlLabel
              className={classes.checkbox}
              control={
                <Checkbox
                  // checked={inputs.browser}
                  // onChange={handleChange}
                  name="Chrome"
                  size="small"
                />
              }
              label="Incognito"
            />
          </div>
        </MyBox>

        <MyBox>
          <MyTextBox>
            <MyText>Wait </MyText>
            <MyText>seconds on the targeted website.</MyText>
          </MyTextBox>

          <MyTextBox>
            <FormControlLabel
              control={<Checkbox name="visit_within" size="small" />}
            />
            <MyText>Visit the Page whithin the Site.</MyText>
          </MyTextBox>
          <MyTextBox>
            <MyText>pages</MyText>
            <MyText>visit from to second.</MyText>
          </MyTextBox>
          <MyTextBox>
            <MyText>After the operation is complete</MyText>
            <MyText>seconds Wait.</MyText>
          </MyTextBox>
          <MyTextBox>
            <MyText>Target site</MyText>
            <MyText>if not found times</MyText>
            <MyText>minutes wait.</MyText>
          </MyTextBox>
          <MyTextBox>
            <MyText>automatic reset after operation.</MyText>
          </MyTextBox>
        </MyBox>
        <div style={{ backgroundColor: "#243851", padding: "0.75rem" }}></div>

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
                />
              }
              key={i}
              label="Chromesdsd"
            />
          ))}
        </MyBox>
        <MyBox className={classes.actionWrapper}>
          {[1, 1, 1, 1, 1, 1, 1].map((e, i) => (
            <FormControlLabel
              className={classes.checkbox}
              control={
                <Checkbox
                  // checked={inputs.browser}
                  // onChange={handleChange}
                  name="Chrome"
                  size="small"
                />
              }
              key={i}
              label="Chromesdsd"
            />
          ))}
        </MyBox>
        <div style={{ backgroundColor: "#243851", padding: "0.75rem" }}></div>
        <div className={classes.btnWrapper}>
          <Button variant="contained">EXPORT REPORT</Button>
          <Button variant="outlined" className={classes.clearBtn}>
            <PauseCircleOutlineIcon fontSize="small" />
            STOP
          </Button>
          <Button variant="outlined" className={classes.clearBtn}>
            <PlayCircleOutlineIcon fontSize="small" />
            START
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
