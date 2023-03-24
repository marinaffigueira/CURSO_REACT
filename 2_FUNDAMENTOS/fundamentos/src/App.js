import logo from './logo.svg';

//components
import FirstComponent from './components/FirstComponents';
import TemplateExpressions from './components/TemplateExpressions';

// styles / CSS
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent></FirstComponent>
      <TemplateExpressions></TemplateExpressions>
      <MyComponent />
    </div>
  );
}

export default App;
