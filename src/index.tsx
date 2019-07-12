import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './App';

const uri = 'https://data.github.ist/graphiql';
const client = new ApolloClient({ uri });

setConfig({
  ignoreSFC: true,
  pureRender: true,
});

const Root: FunctionComponent = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
