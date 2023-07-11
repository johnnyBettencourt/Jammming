import TrackList from "../Tracklist/Tracklist";
import { useCallback } from "react";

function Playlist({ tracks, playlistName, onRemove, setPlaylistName, onSave }) {

    const handleNameChange = useCallback(
        (e) => setPlaylistName(e.target.value), [setPlaylistName]
    );
    return (
        <>
            <div className="playlist-title-container">
                <input 
                    className="input-like-h2"
                    placeholder={playlistName}
                    onChange={handleNameChange}
                    value={playlistName}
                />
                <button className='button' onClick={onSave}>Save to Spotify</button>
            </div>
            
            <TrackList tracks={tracks} onRemove={onRemove} isRemoval={true}/>
            
        </>
    )
    
}

export default Playlist;