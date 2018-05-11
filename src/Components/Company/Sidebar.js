import React, { Component } from 'react'
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
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Companies</h3>
                </div>
                <div class="card-body">
                    <form>
                        {this.state.companies.map(company => (
                            <div class="d-flex align-items-center pb-5 mt-auto">
                                <div class="avatar avatar-md mr-3" style={{backgroundImage : "url("+company.logo+")"}}></div>
                                <div>
                                    <a href="./profile.html" class="text-default">{company.name}</a>
                                    <small class="d-block text-muted">{company.vacancies.length} jobs</small>
                                </div>
                                <div class="ml-auto text-muted">
                                    <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i></a>
                                </div>
                            </div>
                        ))}
                        <div class="form-footer">
                            <button class="btn btn-primary btn-block">Browse More</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Sidebar;