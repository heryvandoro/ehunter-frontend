import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            login_data : null
        };
        this.auth_action = this.auth_action.bind(this);
    }
    componentWillMount(){
        let login_data = localStorage.getItem("login_data");
        if(login_data !== null) {
            login_data = JSON.parse(login_data);
            this.setState({ login_data : login_data });
        }
    }
    auth_action(e){
        if(this.state.login_data !== null) localStorage.removeItem("login_data");
        window.location.href = "/login";
    }
    render(){
        return(
            <div>
                <div className="header py-4">
                    <div className="container">
                        <div className="d-flex">
                            <Link className="header-brand" to="/">
                                <img src="/assets/images/logo.png" className="header-brand-img" alt="tabler logo" />
                            </Link>
                            <div className="d-flex order-lg-2 ml-auto">
                                <div className="nav-item d-none d-md-flex">
                                    <span onClick={this.auth_action} className="btn btn-sm btn-outline-primary">{this.state.login_data !== null ? "Logout" : "Login"}</span>
                                </div>
                                <div className="dropdown d-none d-md-flex">
                                    {this.state.login_data !== null ? 
                                        <Link to={"/profile/" + (this.state.login_data.login_as === "Hunter" ? "hunter" : "company")} className="nav-link icon" data-toggle="dropdown">
                                            <i className="fe fe-user"></i>
                                            <span className="nav-unread"></span>
                                        </Link> 
                                    : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header collapse d-lg-flex p-0" id="headerMenuCollapse">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 ml-auto">
                                <form className="input-icon my-3 my-lg-0">
                                    <input type="search" className="form-control header-search" placeholder="Search&hellip;" tabIndex="1" />
                                    <div className="input-icon-addon">
                                        <i className="fe fe-search"></i>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg order-lg-first">
                                <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">
                                            <i className="fe fe-home"></i> Home
                                        </Link>
                                    </li>
                                    {
                                        this.state.login_data !== null ? 
                                        <li className="nav-item">
                                            <Link to={"/profile/" + (this.state.login_data.login_as === "Hunter" ? "hunter" : "company")} className="nav-link">
                                                <i className="fe fe-user"></i> Profile
                                            </Link> 
                                        </li> : ""
                                    }
                                    {
                                        this.state.login_data !== null && this.state.login_data.login_as === "Company" ? 
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/vacancy/insert">
                                                <i className="fe fe-plus"></i> Insert Vacancy
                                            </Link>
                                        </li> : ""
                                    }
                                    {
                                        this.state.login_data !== null && this.state.login_data.login_as === "Company" ? 
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/vacancy/process">
                                                <i className="fe fe-activity"></i> Process Vacancy
                                            </Link>
                                        </li> : ""
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;