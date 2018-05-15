import React, { Component } from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { Link } from 'react-router-dom'
import ApplyButton from './ApplyButton';
import GeneralService from '../../Services/GeneralService'
import HunterService from '../../Services/HunterService'
import BadgeStatus from './BadgeStatus'

class DetailVacancy extends Component {
    constructor(props){
        super(props);
        this.vacancy_service = new GeneralService("/vacancies");
        this.service_hunter = new HunterService("/hunters");
        this.state = {
            id : this.props.match.params.id,
            requirements : [],
            company : {},
            hunters : [],
            result_user : null
        }
    }
    async componentWillMount(){
        let vacancy = await this.vacancy_service.getOne(this.state.id);
        this.setState(vacancy.data);
        this.apply_button.checkExist(vacancy.data);
        this.badge_status.sync(vacancy.data.status);

        this.login_data = localStorage.getItem("login_data");
        if(this.login_data) this.login_data = JSON.parse(this.login_data);
        if(this.login_data === undefined || this.login_data === null) return;
        if(this.login_data.login_as === "Company") return;
        let user = await this.service_hunter.getOne(this.login_data.id);
        user.data.vacancies.forEach(v => {
            if(v.id == this.state.id){
                if(v.hunter_vacancy.score !== null){
                    let temp = `Your Score : ${v.hunter_vacancy.score}. ${v.hunter_vacancy.reason}. ${v.hunter_vacancy.feedback}`
                    this.setState({
                        result_user : temp
                    })
                }
            }
        });
    }
    render(){
       return(
            <div>
            <Header />
                <div className="my-3 my-md-5">
                    <div className="container">
                        <div className="page-header">
                            <h1 className="page-title">
                                {this.state.position_name} - <BadgeStatus onRef={ref => (this.badge_status = ref)} />
                            </h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 order-lg-1 mb-4">
                                <ApplyButton onRef={ref => (this.apply_button = ref)} hunters={this.state.hunters} vacancy_id={this.state.id} />
                                <div className="list-group list-group-transparent mb-0">
                                    <Link to={"/vacancy/" + this.state.id + "/detail"} className="active list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-flag"></i></span>Introduction</Link>
                                    <Link to={"/vacancy/" + this.state.id + "/hunters"} className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-user"></i></span>Hunters</Link>
                                    <Link to={"/vacancy/" + this.state.id + "/result"} className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-alert-triangle"></i></span>Result</Link>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="text-wrap p-lg-6">
                                            {this.state.result_user === null ? "" : 
                                                <div class="alert alert-primary">
                                                {this.state.result_user}
                                            </div>}
                                            <h2 className="mt-0 mb-4">Description</h2>
                                            <p>{this.state.description}</p>
                                            <h2 className="mt-0 mb-4">Salary</h2>
                                            <p>{this.state.salary_start} - {this.state.salary_end}</p>
                                            <h2 id="setup-environment">Requirement</h2>
                                            <ol>
                                                {this.state.requirements.map(req => (
                                                    <li key={req.id}>{req.text}</li>
                                                ))}
                                            </ol>
                                            <h2 className="mt-0 mb-4">About Company - {this.state.company.name}</h2>
                                            <p>{this.state.company.description}</p>
                                        </div>
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

export default DetailVacancy;