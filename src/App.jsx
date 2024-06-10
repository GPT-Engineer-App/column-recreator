import React, { useState } from "react";
import Table from "./components/Table";
import "./App.css";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    // This function will be passed down to the Table component
  };

  return (
    <div className="App">
      <Table toggleDrawer={toggleDrawer} />
    </div>
  );
}

export default App;