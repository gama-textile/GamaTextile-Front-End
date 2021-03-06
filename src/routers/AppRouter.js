import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* import components */
import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";

/* import pages */
import Home from "../pages/Home";
import ProductCatalog from "../pages/ProductCatalog/ProductCatalog";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Account from "../pages/Account/Account";
import RegisterLogin from "../pages/RegisterLogin/RegisterLogin";
import Cart from "../pages/Cart/Cart";

const AppRouter = () => (
  <Router>
    <Fragment>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product-catalog" exact component={ProductCatalog} />
          <Route
            exact
            path="/product-catalog/details/:id"
            component={ProductDetail}
          />
          <Route path="/account/:id" component={Account} />
          <Route path="/register-login" component={RegisterLogin} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Modal />
        <Footer />
      </div>
    </Fragment>
  </Router>
);

export default AppRouter;
