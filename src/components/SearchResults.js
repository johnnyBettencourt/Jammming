import Tracklist from "./Tracklist";

function SearchResults({ searchTerm }) {
    return (
        <>
            {searchTerm ? <h2>Results for {searchTerm}</h2> : <h2>Resluts</h2>}
            <div>
                <Tracklist />
            </div>
        </>
    );
}

export default SearchResults;