import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import { Header } from './components/Menu/header'
import Contact from './pages/contact/contact';
import Portfolio from './pages/portfolio/portfolio'
import About from './pages/about/about'
import { Home } from './pages/home/home';
import { SelectedItem } from './pages/portfolio/selected-item'
import { Signing } from './pages/signing/signing';
import { auth } from './firebase/firebase.utils'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFunc = null;
  componentDidMount() {
    this.unsubscribeFunc = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);

    })
  }
  componentWillUnmount()
  {
    this.unsubscribeFunc();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route path='/portfolio/:id' component={SelectedItem} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/signing' component={Signing} />
        </Switch>
      </div>
    )
  }
}

export default App;