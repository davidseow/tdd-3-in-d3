import React from "react";
import "./App.css";

import CreateForm from "./components/CreateForm/CreateForm";
import DisplayPanel from "./components/DisplayPanel/DisplayPanel";

function App() {
  return (
    <div>
      <CreateForm />
      <DisplayPanel />
    </div>
  );
}

export default App;
