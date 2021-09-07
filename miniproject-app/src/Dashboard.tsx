import React, { Component } from "react";
import { BrowserRouter, NavLink as NavLink1, Route } from "react-router-dom";
import { History, LocationState } from "history";
import Product from "./Product";
import { Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,} from './NavBarElements';

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
                {/* <BrowserRouter>
                         <NavLink to="/" style={{color:'red'}}>
                            <i className="fa fa-arrow-left" style={{color:"blue"}}></i>
                        </NavLink> 
                        
                    <div className="category">
                        <br></br><br></br>
                        <NavLink to="/cameras/cameras" 
                                exact={true} 
                                strict 
                                activeStyle={{color:"red"}}
                                style={{marginRight:150}}>CAMERAS</NavLink>
                        <NavLink to="/acs/acs" 
                                exact={true} 
                                strict 
                                activeStyle={{color:"red"}}
                                style={{marginRight:150}}>ACS</NavLink>

                        <NavLink to="/washingmachines/Washing_Machine" 
                                exact={true} 
                                strict 
                                activeStyle={{color:"red"}}
                                style={{marginRight:150}}>Washing Machines</NavLink>

                        <button onClick={this.logout}>Logout</button>
                    </div> */}

                  <BrowserRouter> 
                    <Nav>
                        <Bars />
                        <NavMenu>
                            <NavLink to='/cameras/cameras' activeStyle={{color:"blue"}}>Cameras</NavLink>
                            <NavLink to='/acs/acs' activeStyle={{color:"blue"}}>ACS</NavLink>
                            <NavLink to='/washingmachines/Washing_Machine' activeStyle={{color:"blue"}}>Washing Machines</NavLink>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/signin'>Logout</NavBtnLink>
                        </NavBtn>
                        <br></br>
                        <Route path="/cameras/:item" component={Product} exact={true} strict></Route>
                        <Route path="/acs/:item" component={Product} exact={true} strict></Route>
                        <Route path="/washingmachines/:item" component={Product} exact={true} strict></Route>
                    </Nav>

                   
                    
                </BrowserRouter>
            </React.Fragment>
        )
    }
}
export default Dashboard;