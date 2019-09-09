import React from 'react';
import { ApolloProvider } from 'react-apollo';
// bootstrap setup
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import logo from './logo.svg';
import './App.css';
import Auth from "./Pages/Auth/Auth";
import client from "./util/apollo-config";
import Navigation from "./Pages/Navigation";
import Header from "./components/Header/Header";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Navigation />
      </div>
    </ApolloProvider>
  );
}

export default App;
