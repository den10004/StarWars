import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { SwapiServiceProvider } from '../swapi-service-context';
import { StarshipDetails } from '../sw-components';
import './app.css';


export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
  };

  render() {

        return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Switch>
                <Route path="/" render={() => <h2>Welcome to StarWars</h2>} exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" component={StarshipsPage} exact />
                <Route path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />
                  }} /> 
                <Route  render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
