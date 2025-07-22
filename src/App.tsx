// import { useState } from "react";
// import "./App.css";
// import CardProfile from "./components/CardProfile";
import { useNavigate } from "react-router";
import { Button } from "./components/ui/button";
import "./index.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="space-y-2 flex flex-col item-center max-w-sm mx-auto">
      <div>Home Page</div>
      <Button onClick={() => navigate("/todo")}>To do Page</Button>
    </div>
  );
}

export default App;
