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

  const addTrack = useCallback((track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  }, [playlistTracks]);

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => prevTracks.filter(currentTrack => currentTrack.id !== track.id))
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <div className="App">
      <Header />
      <SearchBar
        onSearch={search}
      />
      <SearchResults
        tracks={searchResults}
        onAdd={addTrack}
      />
      <Playlist 
        playlistName={playlistName}
        setPlaylistName={setPlaylistName}
        tracks={playlistTracks}
        onRemove={removeTrack}
        onSave={savePlaylist}
      />
    </div>
  );
}

export default App;
