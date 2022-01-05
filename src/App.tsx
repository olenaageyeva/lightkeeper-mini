import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { SearchPage } from './pages/SearchPage/SearchPage';
import { Provider } from './components/Context/Provider';

import "./styles/output.css";

export const App = () =>
  <Provider>
    <Router>
      <SearchPage />
    </Router>
  </Provider>

