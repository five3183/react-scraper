import React, { Component } from 'react'
import './header.css'

class Header extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid" id="header">
                <h1 class="display-4">New York Times Article Scrubber</h1>
                <hr id="underline" />
                <p class="lead">Search for and annotate articles of interest!</p>
            </div>
        )
    }
}
export default Header