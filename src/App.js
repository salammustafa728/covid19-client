import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';
export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <switch>
            <Route exact path='/'>
              <Main />
            </Route>
          </switch>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

export default App

