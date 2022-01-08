import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import SearchPage from './Component/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import SelectedFilm from './Component/SelectedFilm';
import { BrowserRouter, Route, hashHistory } from 'react-router-dom';
import { Switch } from 'react-router';



function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <main className='main'>
          <Switch>
            <Route path="/selected">
              <SelectedFilm />
            </Route>
            <Route path="/">
              <SearchPage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>



      {/* <Router>

        <main className='main'>
          <Switch>
            <Route path="/" >
              <SearchPage />
            </Route>
            <Route path="/SelectedFilm" >
              <SelectedFilm />
            </Route>
          </Switch>
        </main>
        <Footer />

      </Router > */
      }


    </>
  );
}

export default App;
