import { useEffect } from "react";

function SearchBar({className="", search, onSearch }) {

    useEffect(() =>{

        document.getElementById("search").focus();

    },[])
    const handleSubmit = (event) => {
        event.preventDefault()
        
    }
    return (
        <div className={`${className} container mt-5`}>
            <form onSubmit={(event) => handleSubmit(event) } className="d-flex" role="search">
                <input
                    value={search}
                    onChange={(event => {
                        onSearch(event.target.value);
                    })}
                    id="search"
                    className="form-control me-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button className="btn btn-primary" type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;