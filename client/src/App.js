import React, { useEffect, useState } from "react";
//import module
import Configurator from "./modules/AdWordsConfig/Configurator";
//
import "./app.css";
//
import * as settingAPI from "../src/modules/AdWordsConfig/API/setting";

function App() {
  //  Pre-populate settings for this module
  const [settings, setSettings] = useState({});

  //  Load initial setting and set to state when page mounted
  useEffect(() => {
    const getInitialSetting = async () => {
      let id = 1;
      let res = await settingAPI.getById(id);
      if (res.data) {
        setSettings(res.data);
        console.log(res.data);
      } else {
        console.log(res.message, "id:", id);
      }
    };
    getInitialSetting();
    console.log("-----------------pre-populate setting: ");
  }, []);

  const handleSubmit = async (data) => {
    let res = await settingAPI.add(data);
    console.log(res);
  };

  const onStart = (setting) => {
    console.log("-----------------onStart: ");
    console.log(setting);
    handleSubmit(setting);
  };
  const onStop = () => {
    console.log("-----------------onStop");
  };
  const onExport = (setting) => {
    console.log("-----------------onExport: ");
    console.log(setting);
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
