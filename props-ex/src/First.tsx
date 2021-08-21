import React, { Component } from "react";
import Second from "./Second";

//declare the state
interface IState{
    key1:string;
    key2:number;
    key3:boolean;
    key4:any;
    key5:any[];
}

//declare the props
interface IProps{}

class First extends Component<IProps,IState>{
       constructor(props:IProps){
           super(props);
           //define state here
           this.state = {
               key1 : "ReactJS With TSX",
               key2 : 10000,
               key3 : true,
               key4 : {"sub":"MERN Stack Development"},
               key5 : [{"p_id":111,"p_name":"p_one","p_cost":10000},
                        {"p_id":222,"p_name":"p_two","p_cost":20000},
                        {"p_id":333,"p_name":"p_three","p_cost":30000},
                        {"p_id":444,"p_name":"p_four","p_cost":40000},
                        {"p_id":555,"p_name":"p_five","p_cost":50000}]
           }
       }
       render(){
           return(
               <React.Fragment>
                    <Second key1={this.state.key1}
                            key2={this.state.key2}
                            key3={this.state.key3}
                            key4={this.state.key4}
                            key5={this.state.key5}></Second>
               </React.Fragment>
           )
       }
};

export default First;

