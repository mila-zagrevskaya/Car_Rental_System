import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "components/Header";
import App from "components/App";
import Footer from "components/Footer";

const Router = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" component={App} />
    </Switch>
    <Footer />
  </>
);

export default Router;
