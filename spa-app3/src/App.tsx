import React, { Component } from "react";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
               <Route path="/" component={Pageone} exact={true} strict></Route>
               <Route path="/page_two" component={Pagetwo} exact={true} strict></Route>
            </Router>
         </React.Fragment>
      )
    }
}
export default App;