
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { MoviesList, MoviesInsert, MoviesUpdate, Homepage } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'
import Loginbar from '../components/Loginbar'

function App() {
    return (
        <div style ={{backgroundColor: '#BFE6FF', height:'100vh'}}>

        <Router>
            <Loginbar />
            <Switch>
                <Route path="/homepage" exact component={Homepage} />
                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route
                    path="/movies/update/:id"
                    exact
                    component={MoviesUpdate}
                />
            </Switch>
        </Router>
        </div>
    )
}

export default App
