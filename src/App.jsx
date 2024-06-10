import React from "react";
import Table from "./components/Table";
import "./App.css";

function App() {
  const toggleDrawer = () => {
    // This function will be passed down to the Table component
  };

  return (
    <div className="App">
      <Table toggleDrawer={toggleDrawer} />
    </div>
  );
}

export default App;