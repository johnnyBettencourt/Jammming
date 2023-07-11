import { useCallback, useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((e) => {
        setTerm(e.target.value);
    }, []);

    const search = useCallback((e) => {
        onSearch(term);
        e.preventDefault();
    }, [onSearch, term]);

    return (
        <div>
            <form onSubmit={search}>
                <input placeholder="Song" onChange={handleTermChange} />
                <button type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;