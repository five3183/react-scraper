import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Navbar";
import Wrapper from "./components/Wrapper"
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Results from './components/Results/Results'
import Saved from './components/Saved/Saved'

let url
let headline

class App extends Component {
  state = {
    articles: {
      url: url,
      headline: headline
    }
  }
  render() {
    return(
      <div className="container-fluid">
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Header} />
              <Route exact path="/Search" render={props => 
                <div>
                  <Search />
                  <br />
                {this.state.articles.map(art => (
                  <Results 
                    url = {art.url}
                    headline = {art.headline}
                  />
                ))}
                  
                </div>
              } />
              <Route exact path="/Saved" component={Saved} />
            </Switch>
          </div>
        </Router>
       </div>
    )
  }
}

// const App = () => (
//   <div className="container-fluid">
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Header} />
//           <Route exact path="/Search" render={props => 
//             <div>
//               <Search />
//               <br />
//             {this.state.articles.map(art => (
//               <Results 
//                 url = {this.articles.url}
//                 headline = {this.articles.headline}
//               />
//             ))}
              
//             </div>
//           } />
//           <Route exact path="/Saved" component={Saved} />
//         </Switch>
//       </div>
//     </Router>
//   </div>
// )
// class App extends Component {
//   render() {
//     return (
//       <div className="container-fluid">
//         <Wrapper>
//           <Header />
//           <br />
//           <Search />
//           <br />
//           <Results />
//           <br />
//           <Saved />
//           <br />
//         </Wrapper>   
//       </div>
//     )
//   }
// }

export default App;
