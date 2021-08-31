import React, {  Component } from "react";
import axios from "axios";
import { match as Match } from "react-router-dom";
interface IState{
    result : any;
}
interface IProps{
    match:Match<routeParams>;
}

interface routeParams{
    item:string;
}

class Product extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            result : []
        }
    }
    componentDidMount(){

        axios.get(`http://localhost:8080/category/${this.props.match.params.item}`,{headers:{"token":window.localStorage.getItem("miniproject")}}).then((posRes)=>{
            const { data } = posRes;
            this.setState({
                result : data
            })
        },(errRes)=>{
            console.log( errRes );
        });
    }

    render(){
        return(
            <React.Fragment>
                {JSON.stringify(this.state.result)}
            </React.Fragment>
        )
    }
}
export default Product;

