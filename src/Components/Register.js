import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GeneralService from '../Services/GeneralService'

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            register_as : "Hunter"
        };
        this.logChange = this.logChange.bind(this);
        this.actionInsert = this.actionInsert.bind(this);
        this.service_hunter = new GeneralService("/hunters");
        this.service_company = new GeneralService("/companies");
    }
    async actionInsert(e){
        e.preventDefault();
        let result = null;
        if(this.state.register_as === "Hunter"){
            result = await this.service_hunter.insert(this.state);
        }else{
            result = await this.service_company.insert(this.state);
        }
        this.setState({ done : true });
        result = result.data;
        result.login_as = this.state.register_as;
        localStorage.setItem("login_data", JSON.stringify(result));
        setTimeout(() => {
            window.location.href = "/";
        }, 1500);
    }
    logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }
    render(){
        return(
            <div className="container">
                <div className="row" style={{height : "100vh"}}>
                    <div className="col col-login mx-auto">
                        <div style={{
                            position: 'relative',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}>
                            <form className="card" onSubmit={this.actionInsert}>
                                <div className="card-body p-6">
                                    <div className="card-title">Create an account</div>
                                    {this.state.done ? <div className="form-group">
                                        <div className="alert alert-success mb-0">
                                            Register success! Redirecting now...
                                        </div>
                                    </div> : ""}
                                    <div className="form-group">
                                        <label className="form-label">Name</label>
                                        <input onChange={this.logChange} type="text" name="name" className="form-control" placeholder="John Doe" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email address</label>
                                        <input onChange={this.logChange} type="email" name="email" className="form-control" placeholder="example@ehunter.com" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Password</label>
                                        <input onChange={this.logChange} type="password" name="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Register As</label>
                                        <select onChange={this.logChange} className="form-control" name="register_as">
                                            <option>Hunter</option>
                                            <option>Company</option>
                                        </select>
                                    </div>
                                    <div className="form-footer">
                                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                                    </div>
                                </div>
                            </form>
                            <div className="text-center text-muted">
                                Already have account? <Link to="/login">Sign in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;