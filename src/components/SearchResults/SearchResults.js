import TrackList from "../Tracklist/Tracklist";

function SearchResults({ searchResults }) {
    return (
        <>
            <h2>Results:</h2>
            <TrackList tracks={searchResults}/>
        </>
    );
}

export default SearchResults;