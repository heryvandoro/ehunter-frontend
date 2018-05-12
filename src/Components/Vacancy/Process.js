import React, { Component } from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import VacancyService from '../../Services/VacancyService'
import { Link } from 'react-router-dom'
import CompanyService from '../../Services/CompanyService';
import GeneralService from '../../Services/GeneralService';

class Process extends Component{
    constructor(props){
        super(props);
        this.state = {
            req_divs : [],
            requirements : [],
            login_data : {},
            ongoings : []
        }
        this.service = new VacancyService("/vacancies");
        this.service_company = new CompanyService("/companies");
        this.service_task = new GeneralService("/tasks");
        this.actionInsert = this.actionInsert.bind(this);
        this.logChange = this.logChange.bind(this);
        this.deleteReq = this.deleteReq.bind(this);
        this.addReq = this.addReq.bind(this);
    }
    addReq(e){
        e.preventDefault(); 
        let joined = this.state.req_divs.concat(<ReqInput key={new Date()} action={this.deleteReq} />);
        this.setState({ req_divs : joined });
    }
    async componentWillMount(){
        let login_data = localStorage.getItem("login_data");
        if(login_data !== null) {
            login_data = JSON.parse(login_data);
            this.setState({ login_data : login_data });
            this.setState({
                req_divs : [<ReqInput key={new Date()} action={this.deleteReq} />]
            });

            let ongoings = await this.service_company.getOngoing(login_data.id);
            this.setState({
                ongoings : ongoings.data
            });
        }
    }
    deleteReq(e){
        e.preventDefault();
        let idx = window.$(e.target).parents(".row.mb-3").index();
        let sliced = this.state.req_divs.slice(0);
        sliced.splice(idx-1, 1);
        this.setState({ req_divs : sliced });
    }
    async actionInsert(e){
        e.preventDefault();
        let process_data = {
            vacancy_id : this.state.vacancy_id,
        };
        let criteria = {};
        window.$("select[name=criteria_key]").each((i, data) => {
            let select_val = window.$(data).val();
            let input_val = window.$("input[name=criteria_val]").eq(i).val();
            criteria[select_val] = input_val;
        });
        if(criteria.skill !== null){
            criteria.skill = criteria.skill.split(",");
            criteria.skill = criteria.skill.map(s => {
                return s.trim();
            });
        }
        process_data.criteria = criteria;
        await this.service_task.insert(process_data);
        window.location.reload();
    }
    logChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    componentDidMount(){
        window.require(['input-mask']);
    }
    render(){
        return(
            <div>
            <Header />
                <div className="my-3 my-md-5">
                    <div className="container">
                        <div className="page-header">
                            <h1 className="page-title">Process Vacancy</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form className="card" onSubmit={this.actionInsert}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Company</label>
                                                    <input value={this.state.login_data.name || ''} type="text" className="form-control" disabled placeholder="Company" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Vacancy</label>
                                                    <select onChange={this.logChange} name="vacancy_id" className="form-control custom-select">
                                                        {this.state.ongoings.map(on => (
                                                            <option key={on.id} value={on.id}>{on.position_name}</option>
                                                        ))};
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-10">
                                                <div className="form-group">
                                                    <label className="form-label">Criteria - <span style={{ cursor : "pointer" }} onClick={this.addReq} className="badge bg-green"><i className="fe fe-plus" />Add</span></label>
                                                    {this.state.req_divs}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer text-right">
                                        <button type="submit" className="btn btn-primary">Process Vacancy</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
            </div>
        );
    }
}

class ReqInput extends Component{
    render(){
        return(
            <div className="row mb-3">
                <div className="col-md-2">
                    <select name="criteria_key" className="custom-select">
                        <option value="gender">Gender</option>
                        <option value="gpa">GPA</option>
                        <option value="bachelor">Fresh Graduate</option>
                        <option value="skill">Skills</option>
                    </select>
                </div>
                <div className="col-md-9">
                    <input name="criteria_val" type="text" className="form-control" />
                </div>
                <div className="col-md-1 card-options">
                    <Link onClick={this.props.action} target="_blank" to="/" className="stamp bg-danger">&nbsp;<i style={{color: "white"}} className="fe fe-trash" />&nbsp;</Link>
                </div>
            </div>
        )
    }
}

export default Process;