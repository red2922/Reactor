interface Props {
  children: string;
}
//Props don't change
//States do change
const ReactiveButton = ({ children }: Props) => {
  return (
    <>
      <button
        onClick={() => alert("Hello you clicked the " + children + " button")}
      >
        {children}
      </button>
    </>
  );
};

export default ReactiveButton;
