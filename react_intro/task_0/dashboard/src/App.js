import logo from "./hlogo.jpg";
// import favicon from "./hfavicon.ico";
import "./App.css";

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <footer className="App-footer">
        <p>Copyright 2024 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
