import React, { Component } from 'react'
import Slider from './Shared/Slider'
import Header from './Shared/Header'
import Footer from './Shared/Footer'
import GeneralService from '../Services/GeneralService'
import Company from './Company/Router'
import Vacancy from './Vacancy/Router'

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
                                        <Vacancy.Box title="All Vacancies" vacancies={this.state.vacancies} />
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

export default Home;