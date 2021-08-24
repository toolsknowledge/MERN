import React, { Component } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Cameras from "./Cameras";
import Laptops from "./Laptops";
import Mobiles from "./Mobiles";
import TVS from "./TVS";
import { History, LocationState } from "history";

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
                    <NavLink to="/laptops" 
                             exact={true} 
                             strict 
                             activeStyle={{color:"red"}}
                             style={{marginRight:150}}>Laptops</NavLink>
                    <NavLink to="/tvs" 
                             exact={true} 
                             strict 
                             activeStyle={{color:"red"}}
                             style={{marginRight:150}}>TVS</NavLink>

                    <NavLink to="/mobiles" 
                             exact={true} 
                             strict 
                             activeStyle={{color:"red"}}
                             style={{marginRight:150}}>Mobiles</NavLink>

                    <NavLink to="/cameras" 
                             exact={true} 
                             strict 
                             activeStyle={{color:"red"}}
                             style={{marginRight:150}}>Cameras</NavLink>

                    <button onClick={this.logout}>Logout</button>

                    <br></br>

                    <Route path="/laptops" component={Laptops} exact={true} strict></Route>
                    <Route path="/tvs" component={TVS} exact={true} strict></Route>
                    <Route path="/mobiles" component={Mobiles} exact={true} strict></Route>
                    <Route path="/cameras" component={Cameras} exact={true} strict></Route>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}
export default Dashboard;