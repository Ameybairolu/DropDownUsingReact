import DropDown from "./DropDown/DropDown";

function App() {

  // Dummy Data

  const options = [
    ['Masters', '0001'],
    ['Web Development', '0002'],
    ['Indian Defence', '0003']
  ];

  return (
    <>
      <div>
        <h2>© Reactive DropDown menu by Amey Bairolu</h2>
      </div>
      <DropDown opt={options} />
    </>
  );
}

export default App;
