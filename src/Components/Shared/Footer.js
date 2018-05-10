import React, { Component } from 'react'

class Footer extends Component{
    render(){
        return(
            <div>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-6 col-md-3">
                                        <ul className="list-unstyled mb-0">
                                            <li><a href="#">Pribadi Ridwan Mulyono</a></li>
                                            <li><a href="#">Mario Viegash</a></li>
                                            <li><a href="#">Hery Vandoro</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <ul className="list-unstyled mb-0">
                                            <li><a href="#">Bukalapak</a></li>
                                            <li><a href="#">Last link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right col-lg-4 mt-4 mt-lg-0">
                                Easy find job, easy filtering CV!
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="container">
                        <div className="row align-items-center flex-row-reverse">
                            <div className="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
                                Copyright © 2018 <a href=".">eHunter</a>. Theme by <a href="https://github.com/tabler/tabler" target="_blank">Tabler</a> All rights reserved.
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;