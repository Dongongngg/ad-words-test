//  This is the component to display setting section of this module.
//  Will destructure settings into 3 states, for different kinds of inputs:
//    checkboxs, browsers, values
//  Receiving setting from parent component, and pre-populate it as initial display value.
//  There will an initial settings value presit in MySQL, and will be loaded as json:
//     browser: "chrome",
//     incognito: false,
//     wait_target_time: 295,
//     visit_within: false,
//     visit_from_page: 1,
//     visit_to_time: 3050,
//     complete_wait_time: 310,
//     no_sites_max: 10,
//     no_sites_wait_time: 120,
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

const Settings = ({ title, color, settings, onStart, onStop, onExport }) => {
  const classes = useStyles();
  //  State for checkbox
  const [checkboxs, setCheckboxs] = useState({
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

  //  State for browser
  const [browsers, setBrowsers] = useState({
    chrome: false,
    firefox: false,
    explorer: false,
    safari: false,
    opera: false,
  });
  //  State for each number inputs
  const [values, setValues] = useState({
    wait_target_time_min: 0,
    wait_target_time_sec: 0,
    visit_from_page: 0,
    visit_to_time_min: 0,
    visit_to_time_sec: 0,
    complete_wait_time_min: 0,
    complete_wait_time_sec: 0,
    no_sites_max: 0,
    no_sites_wait_time_min: 0,
    reset_after: 0,
  });
  //  State for onClick of btn
  const [submissions, setSubmissions] = useState({
    browser: "",
    incognito: false,
    wait_target_time: 0,
    visit_within: false,
    visit_from_page: 0,
    visit_to_time: 0,
    complete_wait_time: 0,
    no_sites_max: 0,
    no_sites_wait_time: 0,
    reset_after: 0,
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

  //  Destructure of pre-popluated settings receiving from the props
  useEffect(() => {
    setCheckboxs({
      incognito: settings.incognito || false,
      visit_within: settings.visit_within || false,
      device_reset: settings.device_reset || false,
      vinn_reset: settings.vinn_reset || false,
      phone_reset: settings.phone_reset || false,
      mobile_reset: settings.mobile_reset || false,
      fly_mode: settings.fly_mode || false,
      remove_cookies: settings.remove_cookies || false,
      change_resolution: settings.change_resolution || false,
      mouse_tracks: settings.mouse_tracks || false,
      data_saving: settings.data_saving || false,
      random_generate: settings.random_generate || false,
      analytics_protection: settings.analytics_protection || false,
      remove_history: settings.remove_history || false,
    });

    //  Convert a second state into min&sec state
    setValues({
      wait_target_time_min: parseInt(settings.wait_target_time / 60) || 0,
      wait_target_time_sec:
        settings.wait_target_time -
          parseInt(settings.wait_target_time / 60) * 60 || 0,
      visit_from_page: settings.visit_from_page || 0,
      visit_to_time_min: parseInt(settings.visit_to_time / 60) || 0,
      visit_to_time_sec:
        settings.visit_to_time - parseInt(settings.visit_to_time / 60) * 60 ||
        0,
      complete_wait_time_min: parseInt(settings.complete_wait_time / 60) || 0,
      complete_wait_time_sec:
        settings.complete_wait_time -
          parseInt(settings.complete_wait_time / 60) * 60 || 0,
      no_sites_max: settings.no_sites_max || 0,
      no_sites_wait_time_min: settings.no_sites_wait_time / 60 || 0,
      reset_after: settings.reset_after || 0,
    });
    // Set checked browser
    if (settings.browser) {
      setBrowsers({
        chrome: settings.browser.includes("chrome"),
        firefox: settings.browser.includes("firefox"),
        explorer: settings.browser.includes("explorer"),
        safari: settings.browser.includes("safari"),
        opera: settings.browser.includes("opera"),
      });
    } else {
      setBrowsers({
        chrome: false,
        firefox: false,
        explorer: false,
        safari: false,
        opera: false,
      });
    }
  }, [settings]);

  //  Handle value of checkbox
  const handleCheck = (event) => {
    setCheckboxs({ ...checkboxs, [event.target.name]: event.target.checked });
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
    if (refName.current.name.includes("time")) {
      if (values[refName.current.name] < 59) {
        setValues({
          ...values,
          [refName.current.name]: values[refName.current.name] + 1,
        });
      }
    } else {
      if (values[refName.current.name] < 99) {
        setValues({
          ...values,
          [refName.current.name]: values[refName.current.name] + 1,
        });
      }
    }
  };

  //  handle overall setting state that will be sent as a param of onExport() and onStart()
  useEffect(() => {
    // combine all the selected browser before submission, split with ","
    let selectedBrowser = "";
    let keys = Object.keys(browsers);
    for (let i = 0; i < keys.length; i++) {
      if (browsers[keys[i]]) {
        selectedBrowser = selectedBrowser + keys[i] + ",";
      }
    }

    setSubmissions({
      browser: selectedBrowser,
      incognito: checkboxs.incognito,
      wait_target_time:
        values.wait_target_time_min * 60 + values.wait_target_time_sec,
      visit_within: checkboxs.visit_within,
      visit_from_page: values.visit_from_page,
      visit_to_time: values.visit_to_time_min * 60 + values.visit_to_time_sec,
      complete_wait_time:
        values.complete_wait_time_min * 60 + values.complete_wait_time_sec,
      no_sites_max: values.no_sites_max,
      no_sites_wait_time: values.no_sites_wait_time_min * 60,
      reset_after: values.reset_after,
      device_reset: checkboxs.device_reset,
      vinn_reset: checkboxs.vinn_reset,
      phone_reset: checkboxs.phone_reset,
      mobile_reset: checkboxs.mobile_reset,
      fly_mode: checkboxs.fly_mode,
      remove_cookies: checkboxs.remove_cookies,
      change_resolution: checkboxs.change_resolution,
      mouse_tracks: checkboxs.mouse_tracks,
      data_saving: checkboxs.data_saving,
      random_generate: checkboxs.random_generate,
      analytics_protection: checkboxs.analytics_protection,
      remove_history: checkboxs.remove_history,
    });
  }, [checkboxs, browsers, values]);

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
              {[
                ["chrome", "Chrome"],
                ["firefox", "Firefox"],
                ["explorer", "Explorer"],
                ["safari", "Safari"],
                ["opera", "Opera"],
              ].map((e, i) => (
                <FormControlLabel
                  className={classes.checkbox}
                  control={
                    <Checkbox
                      checked={browsers[e[0]]}
                      onChange={handleBrowser}
                      name={e[0]}
                      size="small"
                      style={{ color: "#ffc107" }}
                    />
                  }
                  key={i}
                  label={e[1]}
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
                    checked={checkboxs.incognito}
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
              type="time"
              refNum={refsArr[1]}
            />
            <MyText>seconds on the targeted website.</MyText>
          </MyTextBox>

          <MyTextBox>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxs.visit_within}
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
              value={values.no_sites_wait_time_min}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              name="no_sites_wait_time_min"
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
                  checked={checkboxs[e[0]]}
                  onChange={handleCheck}
                  name={e[0]}
                  size="small"
                  style={{ color: "#4caf50" }}
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
                  checked={checkboxs[e[0]]}
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
            onClick={() => onExport(submissions)}
          >
            EXPORT REPORT
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#2196f3" }}
            className={classes.btn}
            onClick={onStop}
          >
            <PauseCircleOutlineIcon fontSize="small" />
            STOP
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#4caf50" }}
            className={classes.btn}
            onClick={() => onStart(submissions)}
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
