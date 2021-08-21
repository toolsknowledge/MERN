import React, { Component } from "react";
import { History,LocationState } from "history";

interface IState{}
interface IProps{
    history:History<LocationState>;
}

class Pageone extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }

    myFun = ()=>{
        this.props.history.push(`/page_two/reactjs?qty=100`);
    };

    render(){
        return(
            <React.Fragment>
                <button onClick={this.myFun}>Click Me</button>
            </React.Fragment>
        )
    }
};

export default Pageone;