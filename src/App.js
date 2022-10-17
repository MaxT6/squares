import logo from './logo.svg';
import './App.css';
import AppClass from './AppClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppClass/>
      </header>
    </div>
  );
}

export default App;
