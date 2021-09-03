//http://Rjs8pmminiproject-env.eba-w5kqsyms.us-east-2.elasticbeanstalk.com/login

import React, { Component } from "react";
import axios from "axios";
import { History,LocationState } from "history";

interface IState{
    "email":string;
    "password":string;
    "emailError":string;
}
interface IProps{
    history:History<LocationState>;
}
class Login extends Component<IProps,IState>{
    email = React.createRef<HTMLInputElement>();
    password = React.createRef<HTMLInputElement>();
    constructor(props:IProps){
        super(props);
        this.state = {
            "email" : "",
            "password" : "",
            "emailError" : ""
        }
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

    handleChange = (event:any)=>{
        const {name,value} = event.target;
        // @ts-ignore
        this.setState({
            [name] : value
        })
        return;
    };

    handleBlur = (event:any)=>{
        const {name} = event.target;
        this.validateField(name);
    }

    validateField(name:string){
        let isValid:boolean = false;
        if(name === "email") isValid = this.validateEmail();
        else if(name==="password") isValid = this.validatePassword();
        return isValid;
    }

    validateEmail():boolean{
        let emailError:any = "";
        let actulaValue:any = this.state.email;
        if(actulaValue.trim === "") emailError = "Email Address is Required";
        
        else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(actulaValue)) emailError = "Pease Enter Valid Email"; 
        
        this.setState({
            "emailError" : emailError
        })

        return emailError==="";
    }

    validatePassword():boolean{
        return true;
    }




    render(){
        return(
            <React.Fragment>
               
                <div className="form">
                    <div>
                        <h1>Login Form</h1>
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" 
                               ref={this.email}
                               value={this.state.email}
                               placeholder="Enter Email"
                               name="email"
                               onChange={this.handleChange}
                               onBlur={this.handleBlur}></input>
                        <h5>{this.state.emailError}</h5>
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password"  
                               ref={this.password}
                               value={this.state.password}
                               placeholder="Enter Password"
                               name="password"
                               onChange={this.handleChange}
                               onBlur={this.handleBlur}></input>
                    </div>

                    <div>
                        <label></label>
                        <button onClick={this.login} className="primary">Login</button>
                    </div>
                </div>


            </React.Fragment>
        )
    }
};

export default Login;