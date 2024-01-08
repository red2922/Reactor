const JSX = <h1>Hello JSX!</h1>;

const JSX_2 = (
  <div className="myDiv">
    <h1></h1> <br />
    <p></p>
    <ul>
      <li>Rose</li>
      <li>Red</li>
      <li>Lily</li>
    </ul>
    <hr />
  </div>
);

const Comment = (
  <div>
    {/*This is a comment */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

ReactDOM.render(JSX, document.getElementById("challenge-node"));

//Creating a component with a function
const MyComponent = () => {
  // Change code below this line
  return <div>Test output</div>;
};

//Creaing a function though the class
class part_1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
}

//Creating an component with composition
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

const ParentComponent = () => {
  return (
    <div>
      <h1>I am the parent</h1>
      <ChildComponent />
    </div>
  );
};
