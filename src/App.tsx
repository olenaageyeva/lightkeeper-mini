import React, { useState } from 'react';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { Provider } from './components/Context/Provider';

import "./styles/output.css";

export const App = () =>
  <Provider>
    <SearchPage />
  </Provider>


export default App;
