import React, { Component } from "react";

interface IState{}

interface IProps{
    key1:string;
    key2:number;
    key3:boolean;
    key4:any;
    key5:any[];
}

class Second extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <h1>{this.props.key1}</h1>
                <h1>{this.props.key2}</h1>
                <h1>{JSON.stringify(this.props.key3)}</h1>  
                <h1>{JSON.stringify(this.props.key4)}</h1> 
                <h1>{JSON.stringify(this.props.key5)}</h1>     
            </React.Fragment>
        )
    }


}

export default Second;

