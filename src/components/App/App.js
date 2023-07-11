import { useState, useCallback } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../utils/Spotify';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist')
  const [playlistTracks, setPlaylistTracks] = useState([])

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar
        onSearch={search}
      />
      <SearchResults
        searchResults={searchResults}
      />
      <Playlist 
        playlistName={playlistName}
      />
    </div>
  );
}

export default App;
