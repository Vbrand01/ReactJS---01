import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/images';
import Hooks from './components/Hooks';

function App() {
  return (
    <div className="App">
      <h3>Hello</h3>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
    </div>
  );
}

export default App;
