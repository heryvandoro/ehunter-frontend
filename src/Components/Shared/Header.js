import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            login_data : {}
        };
    }
    componentWillMount(){
        let login_data = localStorage.getItem("login_data");
        if(login_data) this.setState({ login_data : login_data });
    }
    render(){
        return(
            <div>
                <div className="header py-4">
                    <div className="container">
                        <div className="d-flex">
                            <Link className="header-brand" to="/">
                                <img src="/demo/brand/tabler.svg" className="header-brand-img" alt="tabler logo" />
                            </Link>
                            <div className="d-flex order-lg-2 ml-auto">
                                <div className="nav-item d-none d-md-flex">
                                    <Link to="/login" className="btn btn-sm btn-outline-primary">{this.state.login_data ? "Logout" : "Login"}</Link>
                                </div>
                                <div className="dropdown d-none d-md-flex">
                                    <a className="nav-link icon" data-toggle="dropdown">
                                        <i className="fe fe-user"></i>
                                        <span className="nav-unread"></span>
                                    </a>
                                </div>
                                <div className="dropdown">
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                        <a className="dropdown-item" href="#">
                                            <i className="dropdown-icon fe fe-user"></i> Profile
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="dropdown-icon fe fe-settings"></i> Settings
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <span className="float-right"><span className="badge badge-primary">6</span></span>
                                            <i className="dropdown-icon fe fe-mail"></i> Inbox
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">
                                            <i className="dropdown-icon fe fe-help-circle"></i> Need help?
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="dropdown-icon fe fe-log-out"></i> Sign out
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse" data-target="#headerMenuCollapse">
                                <span className="header-toggler-icon"></span>
                            </a>
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
                                        <Link className="nav-link active" to="/">
                                            <i className="fe fe-home"></i> Home
                                        </Link>
                                    </li>
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