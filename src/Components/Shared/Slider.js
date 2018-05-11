import React, { Component } from 'react'

class Slider extends Component{
    render(){
        return(
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
        )
    }
}

export default Slider;