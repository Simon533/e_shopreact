import React,{Component } from "react";
//import { useState } from "react";
export default class CustomersMenuList extends Component{
    //In React, both this.props and this.
    //state represent the rendered values, i.e. what’s currently on the screen.
    state={pgTitle:"Customers Here ",customersCount:4,
   customers:[
    {id:1,name:"simon",phone:"84746638",location:"juja",photo:"https://photos/id/1010/60"},
    {id:2,name:"Jane",phone:"355658",location:"thika"},
    {id:3,name:"RUTH",phone:"84746638",location:"nairobi"},
    {id:4,name:"JAMES",phone:"834445",location:"meru"},
    {id:5,name:"ANN",phone:null,location:"gatundu"},
    {id:6,name:"Peter",phone:null ,location:"ruiru"},
    {id:7,name:"Josh",phone:"34657578"},
],
   };
    render(){
    return(
    
    <div>
        <h5 className="border-bottom m-3 p-1">{this.state.pgTitle}
        <span className="badge badge-secondary m-2">{this.state.customersCount}</span>
        <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh Me
        </button>
        </h5>
        <table className="table">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Photo</th>
                    <th>Name-Customer</th>
                    <th> Phone Number</th>
                    <th> Location</th>
                </tr>
            </thead>
            <tbody>
                {this.getCustomerRow()}
                
            </tbody>
        </table>
        </div>
    );
}
//excute when user click the  refresh button 
onRefreshClick=()=>{
    this.setState({ cutomersCount:10,
    });
};
    
    getPhoneRender=(phone)=>{
        if(phone) return  phone;
        else{
            return <div className="bg-warning p-3 text-center">Null Phone</div>;
        }
        
    }
    getCustomerRow=()=>{
        
        { return this.state.customers.map((kastomer,index)=>{
            return(
            <tr key={kastomer.id}>
             
                    <td>{kastomer.id}</td>
                    <td><img src={kastomer.photo} alt="Customer" />
                    <div>
                        <button className="btn btn-sm btn-secondary"onClick={()=>{this.onChangePictureClick(kastomer,index);}}
                          >Change_photo here
                            </button>
                            </div>
                            </td>
                    <td>{kastomer.name}</td>
                   {/* render image */}
                   
                    <td>{this.getPhoneRender(kastomer.phone)}
                    </td>
                    <td>{kastomer.location}</td>
                    
                    <td></td>
                </tr>
                );
                    })}
    }
    onChangePictureClick=(kastomer,index)=>{
        console.log(kastomer);
        console.log(index);
    }
    
    // console.log("Refresh clikednow");
}
