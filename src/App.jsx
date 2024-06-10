import React, { useState } from "react";
import Table from "./components/Table";
import Drawer from "./components/Drawer";
import { Button } from "@/components/ui/button";
import "./App.css";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="App">
      <Button onClick={toggleDrawer}>Open Drawer</Button>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
        <h2>Drawer Content</h2>
        <p>This is the content inside the drawer.</p>
      </Drawer>
      <Table />
    </div>
  );
}

export default App;