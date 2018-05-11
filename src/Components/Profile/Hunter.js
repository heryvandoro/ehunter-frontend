import React, { Component } from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { Link } from 'react-router-dom'
import Vacancy from '../Vacancy/Router'
import GeneralService from '../../Services/HunterService'
import HunterService from '../../Services/HunterService';

class Hunter extends Component {
    constructor(props){
        super(props);
        this.state = {
            vacancies : [],
        }
        this.service = new HunterService("/hunters");
        this.logChange = this.logChange.bind(this);
    }
    async componentWillMount(){
        let login_data = localStorage.getItem("login_data");
        if(login_data !== null) {
            login_data = JSON.parse(login_data);
            let hunter = await this.service.getOne(login_data.id);
            this.setState(hunter.data);
        }
        else window.location.href = "/";
    }
    logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }
    render(){
        return(
            <div>
                <Header />
					<div className="my-3 my-md-5">
                        <div className="container">
                            <div className="row row-cards">
                                <div className="col-lg-8">
                                    <div className="card">
                                        <Vacancy.Box vacancies={this.state.vacancies} />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">My Profile</h3>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="row">
                                                    <div className="col-auto">
                                                        <span className="avatar avatar-xl" style={{backgroundImage : "url(/demo/faces/male/9.jpg)"}}></span>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label className="form-label">Name</label>
                                                            <input type="text" onChange={this.logChange} value={this.state.name || ''} className="form-control" placeholder="Your name" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Bio</label>
                                                    <textarea onChange={this.logChange} className="form-control" rows="5" placeholder="Big belly rude boy, million dollar hustler. Unemployed.">{this.state.bio || ''}</textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Email</label>
                                                    <input type="email" onChange={this.logChange} value={this.state.email || ''} className="form-control" placeholder="info@ehunter.com" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Password</label>
                                                    <input type="password" onChange={this.logChange} className="form-control" placeholder="Your password" />
                                                </div>
                                                <div className="form-footer">
                                                    <button className="btn btn-primary btn-block">Save</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default Hunter;