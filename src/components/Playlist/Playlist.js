import TrackList from "../Tracklist/Tracklist";
import { useCallback } from "react";

function Playlist({ tracks, playlistName, onRemove, setPlaylistName, onSave }) {

    const handleNameChange = useCallback(
        (e) => setPlaylistName(e.target.value), [setPlaylistName]
    );
    return (
        <>
            <div className="header">
                <input placeholder={playlistName}
                onChange={handleNameChange}
                value={playlistName}
                />
            </div>
            
            <TrackList tracks={tracks} onRemove={onRemove} isRemoval={true}/>
            <button onClick={onSave}>Save to Spotify</button>
        </>
    )
    
}

export default Playlist;