import React, { Component } from 'react'
import './saved.css'


class Saved extends Component {
    render() {
        return (
            <div class="container" id="results-section">
                <h2>SAVED ARTICLES</h2>
                <hr />
                <div class="row">
                    <div class="col-md-10">SAVED ARTICLE HERE!!</div>
                    <div class="col-md-2"><button type="button" class="btn btn-outline-danger">DELETE ME</button></div>
                    <div class="col-md-12">NOTES GO HERE</div>
                </div>
            </div>
        )
    }
}
export default Saved