import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from "./Pages/homepage/homepage.component"
const TeePage = () =>(
  <div>
    <h1>Tee Page</h1>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/t-shirts" component={TeePage} />
      </Switch>
    </div>
  );
}

export default App;
