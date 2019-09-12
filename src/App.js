import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Dashboard from "./components/dashboard/dashboard";
import ProjectDetails from "./components/project/project-detail";
import SignIn from "./components/auth/sign-in";
import SignUp from "./components/auth/sing-up";
import CreateProject from "./components/project/create-project";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./store/reducers/root-reducer";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
      <Provider store = {store}>
          <BrowserRouter>
              <div className="App">
                <Navbar />
                <Switch>
                  <Route exact path='/' component={Dashboard} />
                  <Route path='/project/:id' component={ProjectDetails} />
                  <Route path='/signin' component={SignIn}/>
                  <Route path='/signup' component={SignUp}/>
                  <Route path='/create' component={CreateProject}/>
                </Switch>
              </div>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
