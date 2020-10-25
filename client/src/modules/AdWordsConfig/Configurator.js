//  This is the view of whole module.
//  Basically, there will be two main components in this modula:
//    1. Inputs  2. Settings
//  Each Inputs and Settings component will include a Title component

// Props:
// - settings - Takes in a json object which pre-populates the form to some previous settings
//              (please define your own structure that can capture the form data above)
// - onStart(settings) - a function prop that gets triggered when start button is clicked
// - onStop() - a function prop that gets triggered when stop button is clicked
// - onExport(settings) - a function prop that gets triggered when export report button is clicked

import React from "react";
import { makeStyles, Paper, Grid } from "@material-ui/core/";

//my components
import Inputs from "./components/Inputs";
import Settings from "./components/Settings";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundColor: "#243851",
    color: "white",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  outer: {
    padding: "2rem",
    "@media (max-width: 780px)": {
      padding: 0,
    },
  },
  outer2: {
    padding: "1rem",
    "@media (max-width: 780px)": {
      padding: 0,
    },
  },
});
const AdWordsConfig = ({ settings, onStart, onStop, onExport }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container className={classes.outer} justify="center">
        <Grid item s={12} md={6} lg={7}>
          <Grid container>
            <Grid item xs={12} md={6} className={classes.outer2}>
              <Inputs title="Keywords" color="blue" icon="Keywords" />
            </Grid>
            <Grid item xs={12} md={6} className={classes.outer2}>
              <Inputs title="Sites" color="green" icon="Sites" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item s={12} md={6} lg={5}>
          <Settings
            title="Setting"
            color="yellow"
            icon="Settings"
            settings={settings}
            onStart={onStart}
            onStop={onStop}
            onExport={onExport}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AdWordsConfig;
