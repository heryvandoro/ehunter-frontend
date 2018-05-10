import React, { Component } from 'react'

class Header extends Component{
    render(){
        return(
            <div>
                <div className="header py-4">
                    <div className="container">
                        <div className="d-flex">
                            <a className="header-brand" href="./index.html">
                                <img src="./demo/brand/tabler.svg" className="header-brand-img" alt="tabler logo" />
                            </a>
                            <div className="d-flex order-lg-2 ml-auto">
                                <div className="nav-item d-none d-md-flex">
                                    <a href="https://github.com/tabler/tabler" className="btn btn-sm btn-outline-primary" target="_blank">Source code</a>
                                </div>
                                <div className="dropdown d-none d-md-flex">
                                    <a className="nav-link icon" data-toggle="dropdown">
                                        <i className="fe fe-bell"></i>
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
                                        <a href="./index.html" className="nav-link active"><i className="fe fe-home"></i> Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="javascript:void(0)" className="nav-link" data-toggle="dropdown"><i className="fe fe-box"></i> Interface</a>
                                        <div className="dropdown-menu dropdown-menu-arrow">
                                            <a href="./cards.html" className="dropdown-item ">Cards design</a>
                                            <a href="./charts.html" className="dropdown-item ">Charts</a>
                                            <a href="./pricing-cards.html" className="dropdown-item ">Pricing cards</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href="javascript:void(0)" className="nav-link" data-toggle="dropdown"><i className="fe fe-calendar"></i> Components</a>
                                        <div className="dropdown-menu dropdown-menu-arrow">
                                            <a href="./maps.html" className="dropdown-item ">Maps</a>
                                            <a href="./icons.html" className="dropdown-item ">Icons</a>
                                            <a href="./store.html" className="dropdown-item ">Store</a>
                                            <a href="./blog.html" className="dropdown-item ">Blog</a>
                                            <a href="./carousel.html" className="dropdown-item ">Carousel</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href="javascript:void(0)" className="nav-link" data-toggle="dropdown"><i className="fe fe-file"></i> Pages</a>
                                        <div className="dropdown-menu dropdown-menu-arrow">
                                            <a href="./profile.html" className="dropdown-item ">Profile</a>
                                            <a href="./login.html" className="dropdown-item ">Login</a>
                                            <a href="./register.html" className="dropdown-item ">Register</a>
                                            <a href="./forgot-password.html" className="dropdown-item ">Forgot password</a>
                                            <a href="./400.html" className="dropdown-item ">400 error</a>
                                            <a href="./401.html" className="dropdown-item ">401 error</a>
                                            <a href="./403.html" className="dropdown-item ">403 error</a>
                                            <a href="./404.html" className="dropdown-item ">404 error</a>
                                            <a href="./500.html" className="dropdown-item ">500 error</a>
                                            <a href="./503.html" className="dropdown-item ">503 error</a>
                                            <a href="./email.html" className="dropdown-item ">Email</a>
                                            <a href="./empty.html" className="dropdown-item ">Empty page</a>
                                            <a href="./rtl.html" className="dropdown-item ">RTL mode</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href="./form-elements.html" className="nav-link"><i className="fe fe-check-square"></i> Forms</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./gallery.html" className="nav-link"><i className="fe fe-image"></i> Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./docs/index.html" className="nav-link"><i className="fe fe-file-text"></i> Documentation</a>
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