import { useCallback } from "react";

function Track({ track, addOn, onRemove, isRemoval,  }) {
    return (
        <div>
            <div>
                <h3>{track.name}</h3>
                <p>
                    {track.artist} | {track.album}
                </p>
            </div>
        </div>
    );
}

export default Track;