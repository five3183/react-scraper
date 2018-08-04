import React from 'react'
import './results.css'

const Results = props => {
    <div class="container" id="results-section">
        <h2>RESULTS</h2>
        <hr />
        <table class="table table-striped">
            <tbody id="articles">
                <tr>
                    <td class="col-md-10"><a href={props.url} target='_blank' /> {props.headline}</td>
                    <td class="col-md-2"><button type="button" class="btn btn-outline-success">SAVE ME</button></td>
                </tr>
            </tbody>
        </table>
    </div>

}
export default Results

// let headline = newsArray[0][x].headline.main
// let urlDisplay = newsArray[0][x].web_url

// let news = document.querySelector("#articles")
// news.append("<tr>")
// news.append("<td className = 'col-md-10'><a href=" + urlDisplay + " " + "target='_blank' />" + headline + "</td>")
// news.append("<td className='col-md-2'><button type='button' className='btn btn-outline-success'>SAVE ME</button></td></tr>")