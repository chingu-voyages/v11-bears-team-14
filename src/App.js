import React from 'react';
import { ApolloProvider } from 'react-apollo';
import 'bootstrap/dist/css/bootstrap.css';

import logo from './logo.svg';
import './App.css';
import Auth from "./Pages/Auth/Auth";
import client from "./util/apollo-config";
import Navigation from "./Pages/Navigation";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navigation />
      </div>
    </ApolloProvider>
  );
}

export default App;
