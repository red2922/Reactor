import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let names = ["Rose", "Red", "Lily", "Violet", "Rikki", "Eclipse", "Zero"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Alert>Hello World</Alert>
      <ListGroup
        items={names}
        heading="Character Names"
        onSelectItem={handleSelectItem}
      />
      <Button onClick={() => {}}>My First Button</Button>
    </div>
  );
}
export default App;
