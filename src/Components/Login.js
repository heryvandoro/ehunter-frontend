import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CompanyService from '../Services/CompanyService'
import HunterService from '../Services/HunterService'

class Login extends Component{
    constructor(props){
        super(props);
        this.service_hunter = new HunterService("/hunters");
        this.service_company = new CompanyService("/companies");
        this.state = {
            done : false,
            failed : false,
            login_as : "Hunter"
        };
        this.logChange = this.logChange.bind(this);
        this.actionInsert = this.actionInsert.bind(this);
    }
    async actionInsert(e){
        e.preventDefault();
        this.setState({
            done : false,
            failed : false
        }, async function(){
            let result = null;
            if(this.state.login_as === "Hunter"){
                result = await this.service_hunter.login(this.state);
            }else{
                result = await this.service_company.login(this.state);
            }
            result = result.data;
            if(result.messages === undefined){
                this.setState({ done : true });
                result.login_as = this.state.login_as;
                localStorage.setItem("login_data", JSON.stringify(result));
                setTimeout(() => {
                    window.location.href = "/";
                }, 1500);
            }else{
                this.setState({ failed : true });
            }
        });
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
                                    <div className="card-title">Login to your account</div>
                                    {this.state.done ? <div className="form-group">
                                        <div className="alert alert-success mb-0">
                                            Register success! Redirecting now...
                                        </div>
                                    </div> : ""}
                                    {this.state.failed ? <div className="form-group">
                                        <div className="alert alert-danger mb-0">
                                            Wrong credentials data!
                                        </div>
                                    </div> : ""}
                                    <div className="form-group">
                                        <label className="form-label">Email address</label>
                                        <input onChange={this.logChange} name="email" type="email" className="form-control" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Password</label>
                                        <input onChange={this.logChange} name="password" type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">
                                            Login As
                                        </label>
                                        <select className="form-control">
                                            <option>Hunter</option>
                                            <option>Company</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" />
                                            <span className="custom-control-label">Remember me</span>
                                        </label>
                                    </div>
                                    <div className="form-footer">
                                        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                    </div>
                                </div>
                            </form>
                            <div className="text-center text-muted">
                                Don't have account yet? <Link to="/register">Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;