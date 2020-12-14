import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import PhotographyPage from './pages/PhotographyPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/projects">
                        <ProjectsPage />
                    </Route>
                    <Route exact path="/photography">
                        <PhotographyPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;