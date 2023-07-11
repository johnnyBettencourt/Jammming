import { useState, useCallback, useEffect } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../utils/Spotify';

function App() {

  // Define state variables for the entire app scope
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist')
  const [playlistTracks, setPlaylistTracks] = useState([])

  // Get access token as soon as the component mounts
  useEffect(() => {
    window.addEventListener('load', () => {Spotify.getAccessToken()});
  }, [])

  // Set up the search function
  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  // Add a specified track to the playlistTracks
  const addTrack = useCallback((track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  }, [playlistTracks]);

  // Remove a specified track from the playlistTracks
  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => prevTracks.filter(currentTrack => currentTrack.id !== track.id))
  }, []);

  // Save the playlist by calling the savePlaylist function from Spotify API
  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <div className="App">
      <div className='app-heading'>
        {/* Display the header and search bar */}
        <Header />
        <SearchBar
          onSearch={search}
        />
      </div>

      <div className='container'>
        <div className='col'>
          {/* Display the search results */}
          <SearchResults
            tracks={searchResults}
            onAdd={addTrack}
          />
        </div>
        <div className='col'>
          {/* Display the playlist */}
          <Playlist 
            className='col'
            playlistName={playlistName}
            setPlaylistName={setPlaylistName}
            tracks={playlistTracks}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
