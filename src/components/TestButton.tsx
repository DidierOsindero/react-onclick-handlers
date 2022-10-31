function TestButton(): JSX.Element {
  //const logText = () => console.log ("This is Ife's test button")

  return (
    <button onClick={() => {
        window.alert("This is Ife's button")
        console.log("Console logging as well as window alert!")
      }}
    >
      Ife's Button
    </button>
  );
}

export default TestButton;
