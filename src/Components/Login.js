import React, { Component } from 'react'

class Login extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <div className="row" style={{height : "100vh"}}>
                    <div className="col col-login mx-auto">
                        <form className="card" action="" method="post" style={{
                            position: 'relative',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}>
                            <div className="card-body p-6">
                                <div className="card-title">Login to your account</div>
                                <div className="form-group">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        Password
                                        <a href="./forgot-password.html" className="float-right small">I forgot password</a>
                                    </label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        Login As
                                    </label>
                                    <select className="form-control">
                                            <option>Hunters</option>
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
                            Don't have account yet? <a href="./register.html">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;