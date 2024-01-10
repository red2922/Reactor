import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import PracButton from "./components/PracButton";
import { useState } from "react";

function App() {
  let names = ["Rose", "Red", "Lily", "Violet", "Rikki", "Eclipse", "Zero"];
  const [alertVisible, setAlertVisibility] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <ListGroup
        items={names}
        heading="Character Names"
        onSelectItem={handleSelectItem}
      />
      <Button onClick={() => setAlertVisibility(true)}>My First Button</Button>
      <br />
      <PracButton></PracButton>
    </div>
  );
}
export default App;
