import React, { Component } from 'react'
import './results.css'

class Results extends Component {
    render() {
        return (
            <div class="container" id="results-section">
                <h2>RESULTS</h2>
                <hr />
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <td class="col-md-10">EXAMPLE ARTICLE HERE!</td>
                            <td class="col-md-2"><button type="button" class="btn btn-outline-success">SAVE ME</button></td>
                        </tr>
                        <tr>
                            <td>EXAMPLE ARTICLE HERE!</td>
                            <td><button type="button" class="btn btn-outline-success">SAVE ME</button></td>
                        </tr>
                        <tr>
                            <td>EXAMPLE ARTICLE HERE!</td>
                            <td><button type="button" class="btn btn-outline-success">SAVE ME</button></td>
                        </tr>
                        <tr>
                            <td>EXAMPLE ARTICLE HERE!</td>
                            <td><button type="button" class="btn btn-outline-success">SAVE ME</button></td>
                        </tr>
                        <tr>
                            <td>EXAMPLE ARTICLE HERE!</td>
                            <td><button type="button" class="btn btn-outline-success">SAVE ME</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Results