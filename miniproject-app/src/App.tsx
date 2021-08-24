import React, { Component } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
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
              <Route path="/" component={Login} exact={true} strict></Route>
              <Route path="/dashboard" component={Dashboard} exact={true} strict></Route>
          </BrowserRouter>
       </React.Fragment>
    )
  }
}
export default App;