import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop.component';
import { Header } from './components/header/header.component';
import { SignInSignOut } from './pages/sign-in-sign-up/sign-in-sign-up.component';
import './App.css';
import { auth } from './firebase/firebae.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( (user)=>{
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
