import ListGroup from "./components/ListGroup";

function App() {
  let names = ["Rose", "Red", "Lily", "Violet", "Rikki", "Eclipse", "Zero"];
  return (
    <div>
      <ListGroup items={names} heading="Character Names" />
    </div>
  );
}
export default App;
