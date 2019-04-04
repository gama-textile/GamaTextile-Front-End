import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* import components */
import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

/* import pages */
import Home from "../pages/Home";
import ProductCatalog from "../pages/ProductCatalog/ProductCatalog";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Account from "../pages/Account/Account";

const AppRouter = () => (
  <Router>
    <Fragment>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product-catalog" exact component={ProductCatalog} />
          <Route
            path="/product-catalog/details/:id"
            component={ProductDetail}
          />
          <Route path="/account" exact component={Account} />
        </Switch>
        <Footer />
      </div>
    </Fragment>
  </Router>
);

export default AppRouter;
