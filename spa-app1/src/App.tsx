import React, { Component } from "react";
import Shirts from "./Shirts";
import Jeans from "./Jeans";
import Kids from "./Kids";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

interface IState{}

interface IProps{}

class App extends Component<IProps,IState>{
    constructor(props:IProps){
      super(props);
    }
    render(){
       return(
          <React.Fragment>
              <Router>
                  <NavLink to="/"
                           activeStyle={{color:"red"}}
                           exact={true} strict
                           style={{marginRight:150}}>
                      <b>Shirts</b>
                  </NavLink>

                <NavLink to="/jeans"
                         activeStyle={{color:"red"}}
                         exact={true} strict
                         style={{marginRight:150}}>
                    <b>Jeans</b>
                </NavLink>

                <NavLink to="/kids"
                         activeStyle={{color:"red"}}
                         exact={true} strict>
                    <b>Kids</b>
                </NavLink>

                <br></br><br></br>
                <Route path="/" component={Shirts} exact={true} strict></Route>
                <Route path="/jeans" component={Jeans} exact={true} strict></Route>
                <Route path="/kids" component={Kids} exact={true} strict></Route>

              </Router>
          </React.Fragment>
       )
    }
};

export default App;
