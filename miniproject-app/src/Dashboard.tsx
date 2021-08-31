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
                    <NavLink to="/" style={{color:'red'}}>
                        <i className="fa fa-arrow-left" style={{color:"blue"}}></i>
                    </NavLink>
                    <br></br><br></br>
                    <NavLink to="/cameras/cameras" 
                             exact={true} 
                             strict 
                             activeStyle={{color:"red"}}
                             style={{marginRight:150}}><span className="category">CAMERAS</span></NavLink>
                    <NavLink to="/acs/acs" 
                             exact={true} 
                             strict 
                             activeStyle={{color:"red"}}
                             style={{marginRight:150}}><span className="category">ACS</span></NavLink>

                    <NavLink to="/washingmachines/Washing_Machine" 
                             exact={true} 
                             strict 
                             activeStyle={{color:"red"}}
                             style={{marginRight:150}}><span className="category">Washing Machines</span></NavLink>

                    
                    <button onClick={this.logout}>Logout</button>

                    <br></br>

                    <Route path="/cameras/:item" component={Product} exact={true} strict></Route>
                    <Route path="/acs/:item" component={Product} exact={true} strict></Route>
                    <Route path="/washingmachines/:item" component={Product} exact={true} strict></Route>
                    
                </BrowserRouter>
            </React.Fragment>
        )
    }
}
export default Dashboard;