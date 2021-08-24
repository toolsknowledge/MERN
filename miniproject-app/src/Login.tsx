import React, { Component } from "react";
import axios from "axios";
import { History,LocationState } from "history";

interface IState{}
interface IProps{
    history:History<LocationState>;
}
class Login extends Component<IProps,IState>{
    email = React.createRef<HTMLInputElement>();
    password = React.createRef<HTMLInputElement>();
    constructor(props:IProps){
        super(props);
    }
    login = ()=>{
        const login_details = {"email":this.email.current?.value,
                                "password":this.password.current?.value};
        axios.post("http://localhost:8080/login",login_details).then((posRes)=>{
            const { data } = posRes;
            if(data.login === "success"){
                window.localStorage.setItem("miniproject",data.token);
                this.props.history.push("/dashboard");
            }else{
                alert("Login Fail");
            }    
        },(errRes)=>{
            console.log(errRes);
        });
    }
    render(){
        return(
            <React.Fragment>
                <fieldset>
                    <legend>Login</legend>
                    <input type="email" placeholder="Enter Email" ref={this.email}></input>
                    <br></br><br></br>
                    <input type="password" placeholder="Enter Password" ref={this.password}></input>
                    <br></br><br></br>
                    <button onClick={this.login}>Login</button>
                </fieldset>
            </React.Fragment>
        )
    }
};

export default Login;