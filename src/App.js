import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import MyReact from "./Components/Routes/React"
import NavBar from './Components/NavBar';
import MyRedux from './Components/Routes/Redux';
import MyReactNative from './Components/Routes/ReactNative';
import Routes from './Components/Routes/Routes';
import Quiz1 from './Components/Quizes/Quiz1';
import Quiz2 from './Components/Quizes/Quiz2';
class App extends Component {
  render() {
    return (
      <div className="App teal lighten-5">
        <Router>
          <Fragment>
          <NavBar />
          <Route exact path="/" component={Routes} />
          <Route exact path="/myReact" component={MyReact}/>
          <Route exact path="/myRedux" component={MyRedux}/>
          <Route exact path="/myReactNative" component={MyReactNative}/>
          <Route exact path="/Quiz1" component={Quiz1} />
          <Route exact path="Quiz2" component={Quiz2}/>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
