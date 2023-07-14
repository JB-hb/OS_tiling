import logo from './logo.svg';
import './App.css';
import { Desktop } from './components/desktop';
import { Control } from './components/control';
import { AppProvider } from './context/contextApps';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Control/>
        <Desktop/>
      </AppProvider>
    </div>
  );
}

export default App;
