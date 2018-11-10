import React from 'react'
// import 'whatwg-fetch';
import { Redirect } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import NavigationBar from '../components/NavigationBar';
import Photo from './Photo'
import Prices from './Prices'
import BreadCrumbs from '../components/BreadCrumbs'


const App = props => {

  return(
    <BrowserRouter>
      <div>
        <NavigationBar />
          <Route exact path="/" render ={() => (<Redirect to="/home"/>)} />
          <Route path='/home' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/photo' component={Photo} />
          <Route path='/pricing' component={Prices} />
        <BreadCrumbs />
      </div>
    </BrowserRouter>
  )
}

export default App;
