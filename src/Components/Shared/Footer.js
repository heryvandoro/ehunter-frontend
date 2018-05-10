import React, { Component } from 'react'

class Footer extends Component{
    render(){
        return(
            <div>
                <div class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="row">
                                    <div class="col-6 col-md-3">
                                        <ul class="list-unstyled mb-0">
                                            <li><a href="#">First link</a></li>
                                            <li><a href="#">Second link</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-6 col-md-3">
                                        <ul class="list-unstyled mb-0">
                                            <li><a href="#">Other link</a></li>
                                            <li><a href="#">Last link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 mt-4 mt-lg-0">
                                Premium and Open Source dashboard template with responsive and high quality UI. For Free!
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    <div class="container">
                        <div class="row align-items-center flex-row-reverse">
                            <div class="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
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