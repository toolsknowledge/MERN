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
                <div className="row top">
                    {this.state.result.map((element:any,index:number)=>(
                        <div className="card">
                            <img src={element.image}></img>
                            <div className="card-body">
                                <h2>{element.name}</h2>
                                <p>{element.rating}</p>
                                <div className="price">
                                    {element.price}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default Product;

