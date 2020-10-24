//  This is the component to display setting section of module.
//  Each section of this page: title-checkbox-input-checkbox-checkbox-button
//  Will set a initial state as the initial settings
//  All settings value will be setState() every time the value onChange()
//  A initial setting value will be create from backend, and will be loaded as json:
//     browser: "Chrome",
//     incognito: false,
//     wait_target_time: 295,
//     visit_within: false,
//     visit_from_page: 1,
//     visit_to_time: 3050,
//     complete_wait_time: 310,
//     no_sites_max: 10,
//     no_sites_wait_time: 20,
//     reset_after: 1,
//     device_reset: false,
//     vinn_reset: false,
//     phone_reset: true,
//     mobile_reset: true,
//     fly_mode: false,
//     remove_cookies: true,
//     change_resolution: false,
//     mouse_tracks: false,
//     data_saving: true,
//     random_generate: false,
//     analytics_protection: true,
//     remove_history: false,
import React, { useState, useEffect, createRef } from "react";
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

//API
import * as settingAPI from "../API/setting";
//  A wrapper component with dark blue bgcolor/margin, using for wrapping contents
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
//  Inline text for number input section
const MyText = withStyles({
  root: { display: "inline" },
})(Typography);
//  Line text
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
  //  States for checkbox
  const [settings, setSettings] = useState({
    incognito: false,
    visit_within: false,
    device_reset: false,
    vinn_reset: false,
    phone_reset: false,
    mobile_reset: false,
    fly_mode: false,
    remove_cookies: false,
    change_resolution: false,
    mouse_tracks: false,
    data_saving: false,
    random_generate: false,
    analytics_protection: false,
    remove_history: false,
  });
  //  States for browser
  const [browsers, setBrowsers] = useState({
    Chrome: false,
    Firefox: false,
    Explorer: false,
    Safari: false,
    Opera: false,
  });
  //  States for number inputs
  const [values, setValues] = useState({
    wait_target_time_min: 0,
    wait_target_time_sec: 0,
    visit_from_page: 0,
    visit_to_time_min: 0,
    visit_to_time_sec: 0,
    complete_wait_time_min: 0,
    complete_wait_time_sec: 0,
    no_sites_max: 0,
    no_sites_wait_min: 0,
    reset_after: 0,
  });

  //  Handle value of checkbox
  const handleCheck = (event) => {
    setSettings({ ...settings, [event.target.name]: event.target.checked });
  };
  //  Handle value of browser section,
  //  Before submit, this data will be set into a string that seprates each value with ","
  const handleBrowser = (event) => {
    setBrowsers({ ...browsers, [event.target.name]: event.target.checked });
  };

  //  Handle input number change
  //  Create an array of ref to access to each child button's name as a passed props, then refName.current.name will work
  const refsArr = [];
  for (let i = 0; i <= 10; i++) {
    refsArr.push(createRef(null));
  }

  const handleDecrement = (refName) => {
    if (values[refName.current.name] > 0) {
      setValues({
        ...values,
        [refName.current.name]: values[refName.current.name] - 1,
      });
    }
  };

  const handleIncrement = (refName) => {
    setValues({
      ...values,
      [refName.current.name]: values[refName.current.name] + 1,
    });
  };

  //  Load initial setting and set to state when page mounted
  useEffect(() => {
    const getInitialSetting = async () => {
      //  Get the prepared setting data (inserted before) as initial value
      let res = await settingAPI.getById(1);
    };

    getInitialSetting();
  }, []);

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
              {["Chrome", "Firefox", "Explorer", "Safari", "Opera"].map(
                (e, i) => (
                  <FormControlLabel
                    className={classes.checkbox}
                    control={
                      <Checkbox
                        checked={browsers.e}
                        onChange={handleBrowser}
                        name={e}
                        size="small"
                        style={{ color: "#ffc107" }}
                      />
                    }
                    key={i}
                    label={e}
                  />
                )
              )}
            </div>
          </MyBox>
          {/* Right section */}
          <MyBox className={classes.incognitoWrapper}>
            <div className={classes.checkBoxLabel}>
              <FormControlLabel
                className={classes.checkbox}
                control={
                  <Checkbox
                    checked={settings.incognito}
                    onChange={handleCheck}
                    name="incognito"
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
            <MyButton
              value={values.wait_target_time_min}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              name="wait_target_time_min"
              refNum={refsArr[0]}
            />
            <MyButton
              value={values.wait_target_time_sec}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              name="wait_target_time_sec"
              refNum={refsArr[1]}
            />
            <MyText>seconds on the targeted website.</MyText>
          </MyTextBox>

          <MyTextBox>
            <FormControlLabel
              control={
                <Checkbox
                  name="visit_within"
                  size="small"
                  onChange={handleCheck}
                  style={{ color: "#2196f3" }}
                />
              }
              style={{ marginRight: 0 }}
            />
            <MyText>Visit the Page whithin the Site.</MyText>
          </MyTextBox>
          <MyTextBox>
            <MyButton
              value={values.visit_from_page}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              name="visit_from_page"
              refNum={refsArr[2]}
            />
            <MyText>pages</MyText>
            <MyButton
              value={values.visit_to_time_min}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              name="visit_to_time_min"
              refNum={refsArr[3]}
            />
            <MyButton
              value={values.visit_to_time_sec}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              name="visit_to_time_sec"
              refNum={refsArr[4]}
            />
            <MyText>visit from to second.</MyText>
          </MyTextBox>
          <MyTextBox>
            <MyText>After the operation is complete</MyText>
            <MyButton
              value={values.complete_wait_time_min}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              name="complete_wait_time_min"
              refNum={refsArr[5]}
            />
            <MyButton
              value={values.complete_wait_time_sec}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              name="complete_wait_time_sec"
              refNum={refsArr[6]}
            />
            <MyText>seconds wait.</MyText>
          </MyTextBox>
          <MyTextBox>
            <MyText>Target site</MyText>
            <MyButton
              value={values.no_sites_max}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              name="no_sites_max"
              refNum={refsArr[7]}
            />
            <MyText>if not found times</MyText>
            <MyButton
              value={values.no_sites_wait_min}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              name="no_sites_wait_min"
              refNum={refsArr[8]}
            />
            <MyText>minutes wait.</MyText>
          </MyTextBox>
          <MyTextBox>
            <MyButton
              value={values.reset_after}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              name="reset_after"
              refNum={refsArr[9]}
            />
            <MyText>automatic reset after operation.</MyText>
          </MyTextBox>
        </MyBox>
        <div className={classes.divider}></div>
        {/* 2nd checkbox section */}
        <MyBox className={`${classes.modeWrapper} ${classes.checkBoxLabel}`}>
          {[
            ["device_reset", "Device Reset"],
            ["vinn_reset", "Vinn Reset"],
            ["phone_reset", "Phone Reset"],
            ["mobile_reset", "Mobile Reset"],
            ["fly_mode", "Fly Mode"],
          ].map((e, i) => (
            <FormControlLabel
              className={classes.checkbox}
              control={
                <Checkbox
                  checked={settings[e[0]]}
                  onChange={handleCheck}
                  name={e[0]}
                  size="small"
                  style={{ color: "#2196f3" }}
                />
              }
              key={i}
              label={e[1]}
            />
          ))}
        </MyBox>
        {/* 3rd checkbox section */}
        <MyBox className={`${classes.actionWrapper} ${classes.checkBoxLabel}`}>
          {[
            ["remove_cookies", "Remove Cookies"],
            ["change_resolution", "Change Resolution"],
            ["mouse_tracks", "Mouse Tracks"],
            ["data_saving", "Data Saving Mode"],
            ["random_generate", "Random Generate"],
            ["analytics_protection", "Analytics Protection"],
            ["remove_history", "Remove History"],
          ].map((e, i) => (
            <FormControlLabel
              className={classes.checkbox}
              control={
                <Checkbox
                  checked={settings[e[0]]}
                  onChange={handleCheck}
                  name={e[0]}
                  size="small"
                  style={{ color: "#2196f3" }}
                />
              }
              key={i}
              label={e[1]}
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
