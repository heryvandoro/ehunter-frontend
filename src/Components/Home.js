import React, { Component } from 'react'
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
            vacancies : vacancies
        });
    }
    render(){
        return(
            <div>
                <div className="map-header">
                    <div id="carousel-captions" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner" style={{height: "230px"}}>
                            <div className="carousel-item active">
                                <img className="d-block w-100" alt="" src="./demo/photos/david-marcu-114194-1500.jpg" data-holder-rendered="true" />
                                <div className="carousel-item-background d-none d-md-block"></div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" alt="" src="./demo/photos/davide-cantelli-139887-1500.jpg" data-holder-rendered="true" />
                                <div className="carousel-item-background d-none d-md-block"></div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" alt="" src="./demo/photos/dino-reichmuth-84359-1500.jpg" data-holder-rendered="true" />
                                <div className="carousel-item-background d-none d-md-block"></div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" alt="" src="./demo/photos/eberhard-grossgasteiger-311213-1500.jpg" data-holder-rendered="true" />
                                <div className="carousel-item-background d-none d-md-block"></div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" alt="" src="./demo/photos/geran-de-klerk-290418-1500.jpg" data-holder-rendered="true" />
                                <div className="carousel-item-background d-none d-md-block"></div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carousel-captions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-captions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
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
                                    <tr>
                                        <td><img src="demo/products/apple-iphone7-special.jpg" alt="" className="h-8"/></td>
                                        <td>
                                            Apple iPhone 7 Plus 256GB Red Special Edition
                                        </td>
                                        <td className="text-right text-muted d-none d-md-table-cell text-nowrap">98 reviews</td>
                                        <td className="text-right text-muted d-none d-md-table-cell text-nowrap">38 offers</td>
                                        <td className="text-right">
                                            <strong>$499</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="demo/products/samsung-galaxy.jpg" alt="" className="h-8"/></td>
                                        <td>
                                            Samsung Galaxy A5 A520F 2017 LTE Black Sky
                                        </td>
                                        <td className="text-right text-muted d-none d-md-table-cell text-nowrap">37 reviews</td>
                                        <td className="text-right text-muted d-none d-md-table-cell text-nowrap">40 offers</td>
                                        <td className="text-right">
                                            <strong>$399</strong>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;