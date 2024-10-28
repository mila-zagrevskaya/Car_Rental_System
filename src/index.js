import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'mobx-react';

import Router from "./Router";
import rootStore from "./store/index.tsx";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider
    rootStore={rootStore}
  >
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);
