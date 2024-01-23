import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import PracButton from "./components/PracButton";
import { useState } from "react";
import HelloWorld from "./components/HelloWorld";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  let names = ["Rose", "Red", "Lily", "Violet", "Rikki", "Eclipse", "Zero"];
  const [alertVisible, setAlertVisibility] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <NavBar></NavBar>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <ListGroup
        items={names}
        heading="Character Names"
        onSelectItem={handleSelectItem}
      />
      <div className="test">
        <Button onClick={() => setAlertVisibility(true)}>
          My First Button
        </Button>
        <PracButton></PracButton>
        <HelloWorld></HelloWorld>
      </div>
    </div>
  );
}
export default App;
