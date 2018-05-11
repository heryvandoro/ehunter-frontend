import React, { Component } from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import VacancyService from '../../Services/VacancyService'
import { Link } from 'react-router-dom'

class Insert extends Component{
    constructor(props){
        super(props);
        this.state = {
            req_divs : [],
            requirements : [],
            login_data : {}
        }
        this.service = new VacancyService("/vacancies");
        this.actionInsert = this.actionInsert.bind(this);
        this.logChange = this.logChange.bind(this);
        this.addReq = this.addReq.bind(this);
        this.deleteReq = this.deleteReq.bind(this);
    }
    deleteReq(e){
        e.preventDefault();
        let idx = window.$(e.target).parents(".row.mb-3").index();
        console.log(this.state.req_divs.length + "vs" + idx);
        let sliced = this.state.req_divs.slice(0);
        sliced.splice(idx-1, 1);
        this.setState({ req_divs : sliced });
    }
    addReq(e){
        e.preventDefault(); 
        let joined = this.state.req_divs.concat(<ReqInput key={this.state.req_divs.length} action={this.deleteReq} />);
        this.setState({ req_divs : joined });
    }
    componentWillMount(){
        let login_data = localStorage.getItem("login_data");
        if(login_data !== null) {
            login_data = JSON.parse(login_data);
            this.setState({ login_data : login_data });
        }
        this.setState({
            req_divs : [<ReqInput key={new Date()} action={this.deleteReq} />]
        });
    }
    async actionInsert(e){
        e.preventDefault();
        let requirements  = [];
        window.$("input[name=requirement]").each((i, data) => {
            requirements.push(window.$(data).val());
        });
        this.setState({
            company_id : this.state.login_data.id,
            salary_start : this.state.salary_start.split(".").join(""),
            salary_end : this.state.salary_end.split(".").join(""),
            requirements : requirements
        }, async () => {
            await this.service.insert(this.state);
            window.location.reload();
        })
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
                            <h1 className="page-title">Post Vacancy</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form className="card" onSubmit={this.actionInsert}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label className="form-label">Company</label>
                                                    <input value={this.state.login_data.name || ''} type="text" className="form-control" disabled placeholder="Company" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label className="form-label">Position Name</label>
                                                    <input name="position_name" onChange={this.logChange} type="text" className="form-control" placeholder="Position Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label className="form-label">Salary Start</label>
                                                    <div className="input-group">
                                                        <span className="input-group-prepend">
                                                            <span className="input-group-text">Rp.</span>
                                                        </span>
                                                        <input name="salary_start" onInput={this.logChange} type="text" className="form-control text-right" data-mask="000.000.000.000.000" data-mask-reverse="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label className="form-label">Salary End</label>
                                                    <div className="input-group">
                                                        <span className="input-group-prepend">
                                                            <span className="input-group-text">Rp.</span>
                                                        </span>
                                                        <input name="salary_end" onInput={this.logChange} type="text" className="form-control text-right" data-mask="000.000.000.000.000" data-mask-reverse="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="form-label">Description</label>
                                                    <textarea name="description" onChange={this.logChange} rows="3" className="form-control" placeholder="Here can be your description"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-10">
                                                <div className="form-group">
                                                    <label className="form-label">Requirements - <span style={{ cursor : "pointer" }} onClick={this.addReq} className="badge bg-green"><i className="fe fe-plus" />Add</span></label>
                                                    {this.state.req_divs}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer text-right">
                                        <button type="submit" className="btn btn-primary">Post Vacancy</button>
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
                <div className="col-md-11">
                    <input name="requirement" type="text" className="form-control" placeholder="Requirement" />
                </div>
                <div className="col-md-1 card-options">
                    <Link onClick={this.props.action} target="_blank" to="/" className="stamp bg-danger">&nbsp;<i style={{color: "white"}} className="fe fe-trash" />&nbsp;</Link>
                </div>
            </div>
        )
    }
}

export default Insert;