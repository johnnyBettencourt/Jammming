import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from "./components/SearchBar";

function App() {

  const [userInput, setUserInput] = useState('');

  return (
    <div className="App">
      <Header />
      <SearchBar userInput={userInput} setUserInput={setUserInput}/>
      <h4>search text: {userInput}</h4>
    </div>
  );
}

export default App;
