// import { event } from "jquery";
import React,{Component} from "react";
 export default class Login extends Component{
    constructor(props)
    {
        super(props);
    this.state={email:"",password:"",message:""};
    }
    render(){
        return(
            <div className="col-lg-9">
                <h3 className="m-1 p-2 border-bottom"> Login here</h3>

                {/* email section */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Email</label>
                    <input type="text" className="form-control" value={this.state.email} onChange={(event)=>{
                        this.setState({email:event.target.value});
                    }}
                    />
                </div>
                {/* password-section */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Password</label>
                    <input type="password" className="form-control" value={this.state.password}
                    onChange={(event)=>{
                     this.setState({password:event.target.value});
                    }}/>
                </div>

                <div className="text-right">
                    {this.state.message}
                    <button className="btn btn-primary m-1" onClick={this.onLoginClick}>Login</button>
                </div>
            </div>
        );
    }//end render 
    //execute when user click the login button
    onLoginClick= async()=>{
        console.log(this.state);
        var response=await fetch('http://localhost:5000/users?email=${this.state.email} &password=${this.state.password}',
        {method:"GET"}
        );
        var body =await response.json();
        console.log(body);
        if(body.length>0){
            // this.state.email==="abc@gmail.com"&& 
            // this.state.password==="12345678"
        
        //give message success 
        this.setState({
            message:<span className="text-success"> Success Loging-in</span>
        
        });
    }
    else{
        this.setState({
            message:(
                <span className="text-danger"> invalid please try again </span>
            ),
        });

    }
    };
 }