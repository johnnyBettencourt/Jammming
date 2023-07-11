import TrackList from "../Tracklist/Tracklist";
import { useCallback } from "react";

function Playlist({ tracks, playlistName, onRemove, setPlaylistName, onSave }) {

    // Handle the change in playlist name
    const handleNameChange = useCallback(
        (e) => setPlaylistName(e.target.value), [setPlaylistName]
    );

    return (
        <>
            {/* Container for playlist title and save button */}
            <div className="playlist-title-container">
                {/* Input field for playlist title */}
                <input 
                    className="input-like-h2"
                    placeholder={playlistName}
                    onChange={handleNameChange}
                    value={playlistName}
                />
                {/* Button to save the playlist to Spotify */}
                <button className='button' onClick={onSave}>Save to Spotify</button>
            </div>
            
            {/* Display the list of tracks in the playlist */}
            <TrackList tracks={tracks} onRemove={onRemove} isRemoval={true}/>
            
        </>
    )
}

export default Playlist;
