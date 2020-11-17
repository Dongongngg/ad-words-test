import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core/";
// matieral icons
import DesktopWindowsOutlinedIcon from "@material-ui/icons/DesktopWindowsOutlined";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
const useStyle = makeStyles({
  titleWrapper: { padding: "1rem", display: "flex", alignItems: "center" },
  icon: {
    fontSize: "3rem",
    marginRight: "1rem",
    color: (props) => props.color
  }
});
const Title = ({ color, text, icon }) => {
  const styleProps = {
    color:
      color === "blue"
        ? "#2196f3"
        : color === "green"
          ? "#4caf50"
          : color === "yellow"
            ? "#ffc107"
            : color
  };

  const classes = useStyle(styleProps);
  return (
    <header className={classes.titleWrapper}>
      <LabelOutlinedIcon
        className={classes.icon}
        style={{ display: (icon === "Sites" || icon === "Setting") && "none" }}
      />
      <DesktopWindowsOutlinedIcon
        className={classes.icon}
        style={{
          display: (icon === "Keywords" || icon === "Setting") && "none"
        }}
      />
      <SettingsOutlinedIcon
        className={classes.icon}
        style={{
          display: (icon === "Keywords" || icon === "Sites") && "none"
        }}
      />

      <Typography variant="h4" className={classes.title}>
        {text}
      </Typography>
    </header>
  );
};
Title.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default Title;
