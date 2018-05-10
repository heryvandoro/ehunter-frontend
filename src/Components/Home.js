import React, { Component } from 'react'
import Slider from './Shared/Slider'
import GeneralService from '../Services/GeneralService'

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
                <Slider />
                <div className="container">
                    <div className="row row-cards">
                        <div className="col-lg-3">
                            <div className="row">
                                <div className="col-md-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="mb-4 text-center">
                                                <img src="demo/products/apple-iphone7-special.jpg" alt="Apple iPhone 7 128GB" className="img-fluid" />
                                            </div>
                                            <h4 className="card-title"><a href="javascript:void(0)">Apple iPhone 7 Plus 256GB Red Special Edition</a></h4>
                                            <div className="card-subtitle">
                                                Apple
                                            </div>
                                            <div className="mt-5 d-flex align-items-center">
                                                <div className="product-price">
                                                    <strong>$499</strong>
                                                </div>
                                                <div className="ml-auto">
                                                    <a href="javascript:void(0)" className="btn btn-primary"><i className="fe fe-plus"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="mb-4 text-center">
                                                <img src="demo/products/gopro-hero.jpg" alt="Apple iPhone 7 128GB" className="img-fluid" />
                                            </div>
                                            <h4 className="card-title"><a href="javascript:void(0)">GoPro HERO6 Black</a></h4>
                                            <div className="card-subtitle">
                                                GoPro
                                            </div>
                                            <div className="mt-5 d-flex align-items-center">
                                                <div className="product-price">
                                                    <strong>$599</strong>
                                                </div>
                                                <div className="ml-auto">
                                                    <a href="javascript:void(0)" className="btn btn-primary"><i className="fe fe-plus"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="card">
                                <table className="table card-table table-vcenter">
                                    <tbody>
                                    {this.state.vacancies.map(vacancy => (
                                        <tr key={vacancy.id}>
                                            <td><img src="demo/products/apple-iphone7-special.jpg" alt="" className="h-8"/></td>
                                            <td>
                                                {vacancy.position_name}
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