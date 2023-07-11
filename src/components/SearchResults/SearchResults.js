import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ searchResults }) {
    return (
        <>
            <h2>Results:</h2>
            <Tracklist tracks={searchResults}/>
        </>
    );
}

export default SearchResults;