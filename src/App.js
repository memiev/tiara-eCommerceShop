import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop.component';
import { Header } from './components/header/header.component';
import { SignInSignOut } from './pages/sign-in-sign-up/sign-in-sign-up.component';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignOut} />
      </Switch>
    </div>
  );
}

export default App;
