import React, { Component } from 'react'
import Slider from './Shared/Slider'
import Header from './Shared/Header'
import Footer from './Shared/Footer'
import GeneralService from '../Services/GeneralService'
import { Link } from 'react-router-dom'
import Profile from './Profile/Router'
import Company from './Company/Router'

class Home extends Component{
    constructor(props){
        super(props);
        this.vacancy_service = new GeneralService("/vacancies");
        this.state = {
            vacancies : []
        };
    }
    async componentWillMount(){
        let vacancies = await this.vacancy_service.getAll();
        this.setState({
            vacancies : vacancies.data
        });
    }
    render(){
        return(
            <div>
                <Header />
					<div className="my-3 my-md-5">
                        <Slider />
                        <div className="container">
                            <div className="row row-cards">
                                <div className="col-lg-4">
                                    <Company.Sidebar />
                                </div>
                                <div className="col-lg-8">
                                    <div className="card">
                                        <table className="table card-table table-vcenter">
                                            <tbody>
                                            {this.state.vacancies.map(vacancy => (
                                                <tr key={vacancy.id}>
                                                    <td><img src="demo/products/apple-iphone7-special.jpg" alt="" className="h-8"/></td>
                                                    <td>
                                                        <Link to={"/vacancy/" + vacancy.id}>{vacancy.position_name}</Link>
                                                    </td>
                                                    <td className="text-right text-muted d-none d-md-table-cell text-nowrap">{vacancy.company.name}</td>
                                                    <td className="text-right text-muted d-none d-md-table-cell text-nowrap">{vacancy.hunters.length} hunters</td>
                                                    <td className="text-right">
                                                        <BadgeVacancy status={vacancy.status} />
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
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

class BadgeVacancy extends Component{
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
                badge_class = "badge-success";
                badge_text = "Ongoing";
                break;
            case 1 :
                badge_class = "badge-warning";
                badge_text = "Processing";
                break;
            case 2 :
                badge_class = "badge-danger";
                badge_text = "Closed";
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

export default Home;