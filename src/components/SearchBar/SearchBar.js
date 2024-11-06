import React from 'react'
import './SearchBar.css'
const SearchBar = () => {
    return (
        <>
            <div className='search-bar'>
                <form
                    className='search-form d-flex align-items-center'
                    action="#"
                    method='POST'
                >
                    <input
                        type="text"
                        name="query"
                        placeholder='Search'
                        title="Enter Search Keyword"
                    />

                    <button type='submit' title="Search">
                        <i className='bi bi-search'></i>
                    </button>

                </form>

            </div>
        </>
    )
}

export default SearchBar
