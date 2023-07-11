import Track from "../Track/Track";

function TrackList({ tracks, onAdd, onRemove, isRemoval }) {
    return (
        <div className="TrackList">
            {/* Render each track in the tracks array */}
            {tracks.map((track) => {
                return(
                    <Track
                        track={track}
                        key={track.id}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        isRemoval={isRemoval}
                    />
                )
            })}
        </div>
    );
}

export default TrackList;
