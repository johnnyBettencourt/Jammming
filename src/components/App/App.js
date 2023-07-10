import { useState } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../utils/Spotify';

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
