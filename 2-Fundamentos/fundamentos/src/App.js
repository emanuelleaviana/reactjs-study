import './App.css';
import Events from './components/Events';
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>HelloWord!</h1>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge></Challenge>
    </div>
  );
}

export default App;
