import React, { Component } from "react";
import { History,LocationState } from "history";
interface IState{}
interface IProps{
    history:History<LocationState>;
}
class Login extends Component<IProps,IState>{
    uname = React.createRef<HTMLInputElement>();
    upwd = React.createRef<HTMLInputElement>();
    constructor(props:IProps){
        super(props);
    }
    login = ()=>{
        if(this.uname.current?.value === "ashokit" && this.upwd.current?.value === "ashokit"){
            window.localStorage.setItem("status","login success");
            this.props.history.push("/dashboard");
           
        }else{
            alert("Login Fail");
        }
    };
    render(){
        return(
            <React.Fragment>
                <fieldset>
                    <legend>Login</legend>
                    <input type="text" placeholder="User Name" ref={this.uname}></input>
                    <br></br><br></br>
                    <input type="password" placeholder="User Password" ref={this.upwd}></input>
                    <br></br><br></br>
                    <button onClick={this.login}>Login</button>
                </fieldset>
            </React.Fragment>
        )
    }
};
export default Login;