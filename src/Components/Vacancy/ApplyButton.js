import React, { Component } from 'react'

class ApplyButton extends Component{
    constructor(props){
        super(props);
        this.login_data = localStorage.getItem("login_data");
    }
    render(){
        if(this.login_data != null){
            return(
                <div className="btn btn-block btn-primary mb-6">
                    <i className="fe fe-briefcase mr-2"></i>Apply Job
                </div>
            )
        }else{
            return ("");
        }
    }
}

export default ApplyButton;