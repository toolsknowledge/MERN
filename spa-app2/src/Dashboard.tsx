import React, { Component } from "react";
interface IState{}
interface IProps{}
class Dashboard extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <h1>Dashboard Implementation Soon....!</h1>
            </React.Fragment>
        )
    }
};
export default Dashboard;