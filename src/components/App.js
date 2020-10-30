import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
// import { FullpageLoader } from "./CommonComponents";
import Layout from "../components/Layout";
import Account from "../components/Account";
import Home from "../components/Home";

// const Account = lazy(() => import("../components/Account"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense>
        {/* <Suspense fallback={<FullpageLoader />}> */}
        <Switch>
          <Layout>
            <Route exact path="/account" component={() => <Account />} />
            <Route exact path="/" component={() => <Home />} />
          </Layout>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(App);
