import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/tarefas' component={Todo} />
        <Route path='/sobre' component={About} />
        <Redirect from='*' to ='/tarefas' />
    </Router>
)