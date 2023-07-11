import { useCallback } from "react";

function Track({ track, onAdd, onRemove, isRemoval }) {

    // Callback function to add the track to the playlist
    const addTrack = useCallback((e) => onAdd(track), [onAdd, track]);

    // Callback function to remove the track from the playlist
    const removeTrack = useCallback((e) => onRemove(track), []);

    // Render the appropriate action button based on the isRemoval flag
    const renderAction = () => {
        if(isRemoval) {
            // Render a delete button if the track is removable and therefore  from the playlist
            return (
                <button className="little-button delete-button" onClick={removeTrack}> - </button>
            )
        } else {
            // Render an add button if the track is not removable and therefore from the search results
            return(
                <button className="little-button" onClick={addTrack}> + </button>
            )
        }
    }

    return (
        <div className="track-info">
            <div>
                {/* Display the track title */}
                <h3 class="track-title">{track.name}</h3>
                {/* Display the track artist and album */}
                <p>
                    {track.artist} | {track.album}
                </p>
            </div>
            {/* Render the appropriate action button */}
            {renderAction()}
        </div>
    );
}

export default Track;
