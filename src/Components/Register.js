import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component{
    constructor(props){
        super(props);
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
                            <form className="card" action="" method="post">
                            <div className="card-body p-6">
                                <div className="card-title">Create an account</div>
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" placeholder="John Doe" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" placeholder="example@ehunter.com" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Register As</label>
                                    <select className="form-control">
                                        <option>Hunters</option>
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