import React, { Component } from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { Link } from 'react-router-dom'
import Vacancy from '../Vacancy/Router'
import GeneralService from '../../Services/HunterService'
import CompanyService from '../../Services/CompanyService';

class Company extends Component {
    constructor(props){
        super(props);
        this.state = {
            vacancies : [],
        }
        this.service = new CompanyService("/companies");
        this.logChange = this.logChange.bind(this);
        this.actionSave = this.actionSave.bind(this);
    }
    async componentWillMount(){
        let login_data = localStorage.getItem("login_data");
        if(login_data !== null) {
            login_data = JSON.parse(login_data);
            let company = await this.service.getOne(login_data.id);
            this.setState(company.data);
            console.log(company.data);
        }
        else window.location.href = "/";
    }
    async actionSave(e){
        e.preventDefault();
        let hunter = await this.service.update(this.state.id, this.state);
        window.location.reload();
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
                                        <Vacancy.Box title="Published Vacancy" vacancies={this.state.vacancies} />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Company Profile</h3>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={this.actionSave}>
                                                <div className="row">
                                                    <div className="col-auto">
                                                        <span className="avatar avatar-xl" style={{backgroundImage : "url("+this.state.logo+")"}}></span>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label className="form-label">Name</label>
                                                            <input name="name" type="text" onChange={this.logChange} value={this.state.name || ''} className="form-control" placeholder="Your name" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Description</label>
                                                    <textarea name="description" onChange={this.logChange} value={this.state.description || ''} className="form-control" rows="5" placeholder="Big belly rude boy, million dollar hustler. Unemployed."></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Email</label>
                                                    <input name="email" type="email" onChange={this.logChange} value={this.state.email || ''} className="form-control" placeholder="info@ehunter.com" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Password</label>
                                                    <input name="password" type="password" onChange={this.logChange} className="form-control" placeholder="Your password" />
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

export default Company;