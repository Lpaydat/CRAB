// @flow
import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "./data/environment";
import Message from "./Message";
import logo from "./logo.svg";
import "./App.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <QueryRenderer
      environment={environment}
      query={graphql`
        query AppQuery {
          message {
            ...Message_msg
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        }
        if (props) {
          return <Message msg={props.message} />;
        }
        return <div>Loading...</div>;
      }}
    />
  </div>
);

export default App;
