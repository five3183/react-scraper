import React, { Component } from 'react'
import './header.css'

class Header extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">New York Times Article Scrubber</h1>
                    <hr />
                    <p class="lead">Search for and annotate articles of interest!</p>
                </div>
            </div>
        )
    }
}
export default Header