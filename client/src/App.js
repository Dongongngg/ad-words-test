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

  //  Load pre-populated setting and set to state when page mounted
  useEffect(() => {
    const getInitialSetting = async () => {
      let all = await settingAPI.getAll();
      const id = all.length;

      let res = await settingAPI.getById(id);
      if (res.data) {
        setSettings(res.data);
        console.log(res.data);
      } else {
        console.log(res.message, "id:", id);
      }
    };
    getInitialSetting();
    console.log("-----------------pre-populated setting:");
  }, []);

  const handleSubmit = async (data) => {
    let res = await settingAPI.add(data);
    console.log(res);
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
