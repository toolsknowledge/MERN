//Class Level Component
import React, { Component } from "react";

//state
//component own data called as state
//state declaration
interface IState{
    data1 : string;
    data2 : number;
    data3 : boolean;
    data4 : number[];
    data5 : any[];
}

//props
//receiving the data from another component called as props
interface IProps{}


class First extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        //state definition
        this.state = {
            data1 : "ReactJS With TSX",
            data2 : 100,
            data3 : true,
            data4 : [10,20,30,40,50],
            data5 : [{"p_id":111,"p_name":"p_one","p_cost":10000},
                     {"p_id":222,"p_name":"p_two","p_cost":20000},
                     {"p_id":333,"p_name":"p_three","p_cost":30000},
                     {"p_id":444,"p_name":"p_four","p_cost":40000},
                     {"p_id":555,"p_name":"p_five","p_cost":50000}]
        }
    }

    render(){
        return(
            <React.Fragment>

                <table>
                    <tr>
                        <th>SNO</th>
                        <th>P_ID</th>
                        <th>P_NAME</th>
                        <th>P_COST</th>
                    </tr>
                    {
                        this.state.data5.map((element:any,index:number)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element.p_id}</td>
                                <td>{element.p_name}</td>
                                <td>{element.p_cost}</td>
                            </tr>
                        ))
                    }
                </table>


                <h1>{this.state.data1}</h1>
                <h1>{this.state.data2}</h1>
                <h1>{JSON.stringify( this.state.data3 ) }</h1>
                {
                    this.state.data4.map((element:any,index:number)=>(
                        <h1 key={index}>{element}</h1>
                    ))
                }
            </React.Fragment>
        )
    }



};

export default First;

