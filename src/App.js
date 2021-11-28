import './App.css';
import Counter from "./components/Counter";
// import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      {/*<Button label='Click me' />*/}
    <Counter start={10}>
      <Counter.Display />
      <Counter.Input />
      <Counter.DumbButton />
      <Counter.Button label='+' actionType='increment' />
      <Counter.Button label='Reset' actionType='reset' />
      <Counter.Button label='-' actionType='decrement' />
    </Counter>
    </div>
  );
}

export default App;
