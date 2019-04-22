import React from "react"

class Filter extends React.Component {
    render(){
        return(
            <div className="filter__search-container">
                <input
                type="search"
                className="form-control"
                id="searchBar"
                placeholder="Filter"
                />
                <span
                tabIndex="0"
                className="fa fa-search fa-2x filter__search-button"
                />
            </div>
        )
    }
}

export default Filter