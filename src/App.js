import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {
  const [input, setInput] = useState(0)
  const[result, setResult] = useState(0) 
    const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value)
  }

  const Calc = () => {
    return (
      <div>
        <h1>{result}</h1>
        <input type='number' onChange={handleChange} value={input} />
      </div>
    )
  }

  const add = () => {
    setResult(result+input)
  }
  const sub = () => {
    setResult(result-input)
  }
  const mul = () => {
    setResult(result*input)
  }
  const div = () => {
    setResult(result/input)
  }

  const Button = ({type, action}) => {
    return <button onClick={action}>{type}</button>
  }
  return (
    <div className="App">
      <Calc />
      <Button type="addition" action={add} />
      <Button type="subtraction" action={sub} />
      <Button type="multiplication" action={mul}/>
      <Button type="division" action={div}/>
    </div>
  );
}
export default App;
