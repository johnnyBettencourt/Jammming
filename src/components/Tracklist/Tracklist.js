import Track from "../Track/Track";

function TrackList({ tracks }) {
    return (
        <div className="TrackList">
            {tracks.map((track) => {
                return(
                    <Track
                        track={track}
                        key={track.id}
                    />
                )
            })}
        </div>
    );
}

export default TrackList;