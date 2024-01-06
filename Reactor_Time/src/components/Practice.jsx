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

const MyComponent = () => {
  // Change code below this line
  return <div>Test output</div>;
};
