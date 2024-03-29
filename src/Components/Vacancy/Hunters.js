import React, { Component } from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { Link } from 'react-router-dom'
import GeneralService from '../../Services/GeneralService'
import ApplyButton from './ApplyButton';
import BadgeStatus from './BadgeStatus'

class HunterVacancy extends Component {
    constructor(props){
        super(props);
        this.vacancy_service = new GeneralService("/vacancies");
        this.state = {
            id : this.props.match.params.id,
            requirements : [],
            company : {},
            hunters : []
        }
    }
    async componentWillMount(){
        let vacancy = await this.vacancy_service.getOne(this.state.id);
        this.setState(vacancy.data);
        this.apply_button.checkExist(vacancy.data);
        this.badge_status.sync(vacancy.data.status);
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
                                    <Link to={"/vacancy/" + this.state.id + "/detail"} className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-flag"></i></span>Introduction</Link>
                                    <Link to={"/vacancy/" + this.state.id + "/hunters"} className="active list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-user"></i></span>Hunters</Link>
                                    <Link to={"/vacancy/" + this.state.id + "/result"} className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-alert-triangle"></i></span>Result</Link>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="text-wrap p-lg-6">
                                            <h2 className="mt-0 mb-4">Hunters</h2>
                                            {this.state.hunters.length !== 0 ? 
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.hunters.map(hunter=>(
                                                            <tr key={hunter.id}>
                                                                <td>{hunter.name}</td>
                                                                <td>{hunter.email}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            : "No Hunter applied!"}
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

export default HunterVacancy;