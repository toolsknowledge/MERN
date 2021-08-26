import React, { Component } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { History, LocationState } from "history";
import Product from "./Product";

interface IState{}
interface IProps{
    history:History<LocationState>;
}
class Dashboard extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }

    logout = ()=>{
       window.localStorage.removeItem("miniproject");
       this.props.history.push("/");
    };

    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                    <NavLink to="/">Move To Back</NavLink>
                    <br></br><br></br>
                    <NavLink to="/cameras" 
                             exact={true} 
                             strict 
                             activeStyle={{color:"red"}}
                             style={{marginRight:150}}>CAMERAS</NavLink>
                    <NavLink to="/acs" 
                             exact={true} 
                             strict 
                             activeStyle={{color:"red"}}
                             style={{marginRight:150}}>ACS</NavLink>

                    <NavLink to="/washingmachines" 
                             exact={true} 
                             strict 
                             activeStyle={{color:"red"}}
                             style={{marginRight:150}}>Washing Machines</NavLink>

                    
                    <button onClick={this.logout}>Logout</button>

                    <br></br>

                    <Route path="/cameras" component={Product} exact={true} strict></Route>
                    <Route path="/acs" component={Product} exact={true} strict></Route>
                    <Route path="/washingmachines" component={Product} exact={true} strict></Route>
                    
                </BrowserRouter>
            </React.Fragment>
        )
    }
}
export default Dashboard;