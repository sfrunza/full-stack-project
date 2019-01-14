import React from 'react'
// import 'whatwg-fetch';
import { Redirect } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import NavigationBar from '../components/NavigationBar';
import GalleryPage from './GalleryPage'
import About from './About'
import BreadCrumbs from '../components/BreadCrumbs'

const App = props => {

  return(
    <BrowserRouter>
      <div>
        <NavigationBar />
          <Route exact path="/" render ={() => (<Redirect to="/home"/>)} />
          <Route path='/home' component={Home} />
          <Route path='/contact-us' component={Contact} />
          <Route path='/gallery' component={GalleryPage} />
          <Route path='/about' component={About} />
        <BreadCrumbs />
      </div>
    </BrowserRouter>
  )
}

export default App;
