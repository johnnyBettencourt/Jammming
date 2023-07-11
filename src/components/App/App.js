import { useState, useCallback, useEffect } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../utils/Spotify';

function App() {

//states for whole app scope
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist')
  const [playlistTracks, setPlaylistTracks] = useState([])

//gets access token as soon as component mounts
  useEffect(() => {
    window.addEventListener('load', () => {Spotify.getAccessToken()});
  }, [])

//sets up search function
  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  //sets up function to add specified track to savedTracks
  const addTrack = useCallback((track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  }, [playlistTracks]);

//sets up function to remove specified track from savedTracks
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
    <div className="App"><div className='app-heading'>
      <Header />
      <SearchBar
        onSearch={search}
      />
    </div>
      
      <div className='container'>
        <div className='col'>
          <SearchResults
          tracks={searchResults}
          onAdd={addTrack}
        />
        </div>
        <div className='col'>
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
