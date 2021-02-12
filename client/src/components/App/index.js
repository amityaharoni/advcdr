import './index.scss';

function App() {
  return (
    <div className="App">
      <h1>
        Anton
      </h1>
      {JSON.stringify(window.clientData)}
    </div>
  );
}

export default App;
