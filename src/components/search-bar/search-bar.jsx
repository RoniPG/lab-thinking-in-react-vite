import PropTypes from 'prop-types'

function SearchBar({className=""}) {
    return (
        <div className={`${className} container mt-5`}>
            <form className="d-flex" role="search">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button className="btn btn-primary" type="submit">Search</button>
            </form>
        </div>
    );
}

SearchBar.propTypes = {
    className: PropTypes.string, // `name` debe ser una cadena y es obligatorio
};

export default SearchBar;