import React from 'react';
import ReactDOM from 'react-dom';

import Home from './screens/Home';
import { GlobalStyles } from './theme/styles';
import { Theme } from './theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <Home />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root'),
);
