import React, { useEffect, useState } from "react";
//import my module
import Configurator from "./modules/AdWordsConfig/Configurator";
//styles
import "./app.css";
//api
import * as settingAPI from "../src/modules/AdWordsConfig/API/setting";

function App() {
  //  Pre-populated settings for this module, if first time, will set eveything to default
  const [settings, setSettings] = useState({});
  // Tell Configurator which setting to update
  const [id, setId] = useState(1);

  //  Load pre-populated setting and set to state when page mounted
  useEffect(() => {
    const getInitialSetting = async () => {
      let all = await settingAPI.getAll();
      //  if there one setting at database, get that one, otherwise create one
      if (all.length > 0) {
        let res = await settingAPI.getById(all.length);
        setId(all.length);
        setSettings({ ...res.data, opertaion: "update" });
        console.log(res.data);
      } else {
        console.log("no pre-populated data, creating new setting");
        setSettings({ opertaion: "create" });
      }
    };
    getInitialSetting();
    console.log("-----------------get pre-populated setting:");
  }, []);

  const handleSubmit = async (data) => {
    if (settings.opertaion === "create") {
      let res = await settingAPI.add(data);
      console.log("create", res);
    } else if (settings.opertaion === "update") {
      let res = await settingAPI.updateById(id, data);
      console.log("update", res);
    }
  };

  const onStart = (setting) => {
    console.log("-----------------onStart: ", setting);
    handleSubmit(setting);
  };
  const onStop = () => {
    console.log("-----------------onStop");
  };
  const onExport = (setting) => {
    console.log("-----------------onExport: ", setting);
  };

  return (
    <div className="App">
      <Configurator
        settings={settings}
        onStart={onStart}
        onStop={onStop}
        onExport={onExport}
      />
    </div>
  );
}

export default App;
