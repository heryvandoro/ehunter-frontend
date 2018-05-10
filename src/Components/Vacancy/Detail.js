import React, { Component } from 'react'
import GeneralService from '../../Services/GeneralService'

class DetailVacancy extends Component {
    constructor(props){
        super(props);
        this.vacancy_service = new GeneralService("/vacancies");
        this.state = {
            requirements : [],
            company : {}
        }
    }
    async componentWillMount(){
        let vacancy = await this.vacancy_service.getOne(this.props.match.params.id);
        this.setState(vacancy.data);
    }
    render(){
       return(
            <div className="container">
                <div className="page-header">
                    <h1 className="page-title">
                        {this.state.position_name}
                    </h1>
                </div>
                <div className="row">
                    <div className="col-lg-3 order-lg-1 mb-4">
                        <a href="https://github.com/tabler/tabler" className="btn btn-block btn-primary mb-6">
                            <i className="fe fe-briefcase mr-2"></i>Apply Job
                        </a>
                        <div className="list-group list-group-transparent mb-0">
                            <a href="../docs/index.html" className="list-group-item list-group-item-action active"><span className="icon mr-3"><i className="fe fe-flag"></i></span>Introduction</a>
                        </div>
                        <div className="list-group list-group-transparent mb-0">
                            <a href="../docs/alerts.html" className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-alert-triangle"></i></span>Alerts</a>
                            <a href="../docs/avatars.html" className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-user"></i></span>Avatars</a>
                        </div>
                        {/* <div className="d-none d-lg-block mt-6">
                            <a href="https://github.com/tabler/tabler/edit/dev/src/_docs/index.md" className="text-muted">Edit this page</a>
                        </div> */}
                    </div>
                    <div className="col-lg-9">
                        <div className="card">
                            <div className="card-body">
                                <div className="text-wrap p-lg-6">
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
       )
    }
}

export default DetailVacancy;