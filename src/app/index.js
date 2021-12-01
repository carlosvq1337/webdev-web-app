
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Homepage, Contentpage, Recursos } from '../pages'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loginbar from '../components/Loginbar'




function App() {
    return (
        

        <Router>
            <Loginbar />
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/contenido" exact component={Contentpage} />
                <Route path="/recursos" exact component={Recursos} />
            </Switch>
        </Router>
        
    )
}

export default App
