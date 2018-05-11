import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GeneralService from '../../Services/GeneralService';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            companies : []
        };
        this.service = new GeneralService("/companies");
    }
    async componentWillMount(){
        let companies = await this.service.getAll();
        this.setState({
            companies : companies.data
        });
    }
    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Companies</h3>
                </div>
                <div className="card-body">
                    <form>
                        {this.state.companies.map(company => (
                            <div key={company.id} className="d-flex align-items-center pb-5 mt-auto">
                                <div className="avatar avatar-md mr-3" style={{backgroundImage : "url("+company.logo+")"}}></div>
                                <div>
                                    <a href="./profile.html" className="text-default">{company.name}</a>
                                    <small className="d-block text-muted">{company.vacancies.length} jobs</small>
                                </div>
                                <div className="ml-auto text-muted">
                                    <Link to="" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1"></i></Link>
                                </div>
                            </div>
                        ))}
                        <div className="form-footer">
                            <button className="btn btn-primary btn-block">Browse More</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Sidebar;