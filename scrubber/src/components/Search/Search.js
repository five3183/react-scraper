import React, { Component } from 'react'
import './search.css'

class Search extends Component {
    render() {
        return (
            <div class="container" id="search-section">
                <h2>SEARCH</h2>
                <hr />
                <form>
                    <h4>TOPIC</h4>
                    <input class="form-control" id="topic" type="text" placeholder="Topic" />
                    <h4>START YEAR</h4>
                    <input class="form-control" id="start-year" type="text" placeholder="Start Year" />
                    <h4>END YEAR</h4>
                    <input class="form-control" id="end-year" type="text" placeholder="End Year" />
                    <br />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Search

