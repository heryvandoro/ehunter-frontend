import React, { Component } from 'react'
import VacancyService from '../../Services/VacancyService'

class ApplyButton extends Component{
    constructor(props){
        super(props);
        this.login_data = localStorage.getItem("login_data");
        if(this.login_data) this.login_data = JSON.parse(this.login_data);
        this.doApply = this.doApply.bind(this);
        this.service = new VacancyService("/vacancies");
    }
    async doApply(e){
        e.preventDefault();
        let data = {
            hunter_id : this.login_data.id,
        };
        await this.service.apply(this.props.vacancy_id, data);
        window.location.reload();
    }
    render(){
        if(this.login_data !== null && this.login_data.login_as === "Hunter"){
            return(
                <div onClick={this.doApply} className="btn btn-block btn-primary mb-6">
                    <i className="fe fe-briefcase mr-2"></i>Apply Job
                </div>
            )
        }else{
            return ("");
        }
    }
}

export default ApplyButton;