import React, { Component } from 'react'
import VacancyService from '../../Services/VacancyService'

class ApplyButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            exist : false
        }
        this.login_data = localStorage.getItem("login_data");
        if(this.login_data) this.login_data = JSON.parse(this.login_data);
        this.doApply = this.doApply.bind(this);
        this.service = new VacancyService("/vacancies");
    }
    componentDidMount(){
        this.props.onRef(this);
    }
    checkExist(data){
        if(this.login_data === null) return;
        if(data.status === 2) this.setState({ exist : true });
        data.hunters.forEach(h => {
            if(h.id === this.login_data.id) this.setState({ exist : true });
        });
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
        if(this.login_data !== null && this.login_data.login_as === "Hunter" && this.state.exist === false){
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