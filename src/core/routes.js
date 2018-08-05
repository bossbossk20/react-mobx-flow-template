import React from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'

import Page1 from '../pages/page1'
import Page2 from '../pages/page2'

const Routes = () => (
  <Router>
    <div>
      <Route path='/page1' component={Page1} />
      <Route path='/page2' component={Page2} />
    </div>
  </Router>
)

export default Routes