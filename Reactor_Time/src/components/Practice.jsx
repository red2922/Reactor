//All this is out of date. Do not use

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

//Parent
const ParentComponent = () => {
  return (
    <div>
      <h1>I am the parent</h1>
      <ChildComponent />
    </div>
  );
};

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

//Nesting Components
const Fruits = () => {
  return (
    <div>
      {/* Change code below this line */}
      <TypesOfFruit />
      {/* Change code above this line */}
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        {/* Change code above this line */}
      </div>
    );
  }
}

//More of creating nested, stateless components
//Citrus and NonCitrus do not exist in my code
class Fruits_1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        {/* Change code below this line */}
        <NonCitrus />
        <Citrus />
        {/* Change code above this line */}
      </div>
    );
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits_1 />
        {/* Change code above this line */}
        <Vegetables />
      </div>
    );
  }
}
