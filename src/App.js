import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user-action'
import './App.css';
import Header from './components/Menu/header'
import Contact from './pages/contact/contact';
import Portfolio from './pages/portfolio/portfolio'
import About from './pages/about/about'
import { Home } from './pages/home/home';
import { SelectedItem } from './pages/portfolio/selected-item'
import { Signing } from './pages/signing/signing';
import { auth, createUserProfile } from './firebase/firebase.utils'
class App extends React.Component {

  unsubscribeFunc = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFunc = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const userRef = await createUserProfile(authUser);
        userRef.onSnapshot(snapShot => {
          console.log(snapShot);
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      else
        setCurrentUser(authUser)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFunc();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route path='/portfolio/:id' component={SelectedItem} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route exact path='/signing' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<Signing />)} />
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = ({user}) =>
  ({
    currentUser: user.currentUser
  })
const mapDispatchToState = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToState)(App);