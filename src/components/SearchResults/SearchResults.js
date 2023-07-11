import TrackList from "../Tracklist/Tracklist";

function SearchResults({ tracks, onAdd }) {
    return (
        <>
            <h2 className="results-title">Results:</h2>
            <TrackList tracks={tracks} onAdd={onAdd}/>
        </>
    );
}

export default SearchResults;