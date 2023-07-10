import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from "./components/SearchBar";
import SearchResults from './components/SearchResults';

function App() {

  const [userInput, setUserInput] = useState('');
  const [searchTerm, setSearchTerm] = useState(null);

  return (
    <div className="App">
      <Header />
      <SearchBar
        userInput={userInput}
        setUserInput={setUserInput}
        setSearchTerm={setSearchTerm}
      />
      <SearchResults
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
