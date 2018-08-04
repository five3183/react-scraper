import React, { Component } from 'react'
import './search.css'

class Search extends Component {
    render() {
        return (
            <div className="container" id="search-section">
                <h2>SEARCH</h2>
                <hr />
                <form>
                    <h4>TOPIC</h4>
                    <input className="form-control" id="topic" type="text" placeholder="Topic" />
                    <h4>START YEAR</h4>
                    <input className="form-control" id="start-year" type="text" placeholder="YYYYMMDD" />
                    <h4>END YEAR</h4>
                    <input className="form-control" id="end-year" type="text" placeholder="YYYYMMDD" />
                    <br />
                    <button type="button" className="btn btn-primary" id="search">Submit</button>
                </form>
            </div>
        )
    }
}
window.onload = function() {
    document.querySelector("#search").addEventListener('click', (event) => {
        event.preventDefault()
        console.log("CLICK")
        let topic = document.querySelector('#topic').value
        let startYear = document.querySelector('#start-year').value
        let endYear = document.querySelector('#end-year').value

        let newsArray = []
        let headline
        let link

        let key = "api-key=4e6a18908e354053b2e7120e5811b61a&"
        let q = "q=" + topic + "&"
        let s = "begin_date=" + startYear + "&"
        let e = "end_date=" + endYear
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
        
        let URL = url + key + q + s + e

        fetch(URL)
            .then(res => res.json())
            .then(data => {
                console.log("this is data " + data.response.docs[0].web_url)
                newsArray.push(data.response.docs)  
                link = newsArray.web_url
                headline= newsArray.headline.main
                this.setState( {url: link,
                    headline: headline}
                )
            })
    })

}
export default Search


// let headline = newsArray[0][x].headline.main
// let urlDisplay = newsArray[0][x].web_url

// let news = document.querySelector("#articles")
// news.append("<tr>")
// news.append("<td className = 'col-md-10'><a href=" + urlDisplay + " " + "target='_blank' />" + headline + "</td>")
// news.append("<td className='col-md-2'><button type='button' className='btn btn-outline-success'>SAVE ME</button></td></tr>")