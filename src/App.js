import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import client from "./apolloCilent";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <React.Fragment>
          <Route exact={true} path={"/"} component={Home} />
          <Route path={"/details/:movieId"} component={Detail} />
        </React.Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
