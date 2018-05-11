import React, { Component } from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { Link } from 'react-router-dom'
import ApplyButton from './ApplyButton';
import GeneralService from '../../Services/GeneralService'

class ResultVacancy extends Component {
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
    }
    render(){
       return(
            <div>
            <Header />
                <div className="my-3 my-md-5">
                    <div className="container">
                        <div className="page-header">
                            <h1 className="page-title">
                                {this.state.position_name}
                            </h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 order-lg-1 mb-4">
                                <ApplyButton onRef={ref => (this.apply_button = ref)} hunters={this.state.hunters} vacancy_id={this.state.id} />
                                <div className="list-group list-group-transparent mb-0">
                                    <Link to={"/vacancy/" + this.state.id} className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-flag"></i></span>Introduction</Link>
                                    <Link to={"/vacancy/" + this.state.id + "/hunters"} className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-user"></i></span>Hunters</Link>
                                    <Link to={"/vacancy/" + this.state.id + "/result"} className="active list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-alert-triangle"></i></span>Result</Link>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="text-wrap p-lg-6">
                                            <h2 className="mt-0 mb-4">Result</h2>
                                            {this.state.status === 2 ? 
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.hunters.map(hunter=>(
                                                            <tr>
                                                                <td>{hunter.name}</td>
                                                                <td>{hunter.email}</td>
                                                                <td><BadgeResult status={hunter.hunter_vacancy.status} /></td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            : "Job doesn't finished yet."}
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

class BadgeResult extends Component{
    constructor(props){
        super(props);
        this.state = {
            badge_class : "",
            badge_text : ""
        }
    }
    componentWillMount(){
        let badge_class, badge_text;
        switch(this.props.status){
            case 0 :
                badge_class = "badge-warning";
                badge_text = "Pending";
                break;
            case 1 :
                badge_class = "badge-success";
                badge_text = "Accepted";
                break;
            case 2 :
                badge_class = "badge-danger";
                badge_text = "Rejected";
                break;
        }
        this.setState({
            badge_class : badge_class,
            badge_text : badge_text
        });
    }
    render(){
        return(
            <span className={"badge " + this.state.badge_class}>{this.state.badge_text}</span>
        )
    }
}

export default ResultVacancy;