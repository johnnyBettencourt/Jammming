import { useCallback } from "react";

function Track({ track, onAdd, onRemove, isRemoval,  }) {

    const addTrack = useCallback((e) => onAdd(track), [onAdd, track]);

    const removeTrack = useCallback((e) => onRemove(track), []);

    const renderAction = () => {
        if(isRemoval) {
            return (
                <button className="little-button delete-button" onClick={removeTrack}> - </button>
            )
        }else {
            return(
                <button className="little-button" onClick={addTrack}> + </button>
            )
        }
    }

    return (
        <div className="track-info">
            <div>
                <h3 class="track-title">{track.name}</h3>
                <p>
                    {track.artist} | {track.album}
                </p>
            </div>
            {renderAction()}
        </div>
    );
}

export default Track;