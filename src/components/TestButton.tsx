function TestButton(): JSX.Element {
  //const logText = () => console.log ("This is Ife's test button")

  return (
    <button onClick={() => console.log("This is Ife's button")}>
      Ife's Button
    </button>
  );
}

export default TestButton;
