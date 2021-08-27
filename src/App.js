import './App.css';
// import {ReactComponent as ReactLogo} from './assets/react.svg';
import Card from './components/card/Card';
import Header from './components/header/Header';

function App() {
  return (
    <div className="main-container">
       < Header />
       < Card />
    </div>
  );
}

export default App;
