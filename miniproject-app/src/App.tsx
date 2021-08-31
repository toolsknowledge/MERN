/*
  1) grid-container
  2) row
  3) brand
  4) center
*/
import React, { Component } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
interface IState{}
interface IProps{}
class App extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props);
  }
  render(){
    return(
       <React.Fragment>
          <BrowserRouter>
              <div className="grid-container">
                  <header className="row">
                      <div>
                          <NavLink to="/" exact={true} strict className="test-class"><span className="brand">AshokIT</span></NavLink>
                      </div>
                      <div>
                          <a href="#">cart</a>
                          <a href="#">signin</a>
                      </div>
                  </header>

                  <main>
                    <Route path="/" component={Login} exact={true} strict></Route>
                    <Route path="/dashboard" component={Dashboard} exact={true} strict></Route>
                  </main>

                  <footer className="row center">
                      copyright@ashokit.in
                  </footer>
              </div>
          </BrowserRouter>
       </React.Fragment>
    )
  }
}
export default App;