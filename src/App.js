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
export const App = () =>
  (
    <div className="App">
      <Header />
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
export default App;