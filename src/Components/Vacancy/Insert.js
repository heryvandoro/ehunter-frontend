import React, { Component } from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'

class Insert extends Component{
    render(){
        return(
            <div>
            <Header />
                <div className="my-3 my-md-5">
                    <div className="container">
                        <div className="page-header">
                            <h1 className="page-title">Post Vacancy</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label class="form-label">Company</label>
                                                    <input type="text" class="form-control" disabled placeholder="Company" />
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label class="form-label">Position Name</label>
                                                    <input type="text" class="form-control" placeholder="Username" />
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label class="form-label">Salary Start</label>
                                                    <div class="input-group">
                                                        <span class="input-group-prepend">
                                                            <span class="input-group-text">Rp.</span>
                                                        </span>
                                                        <input type="text" class="form-control text-right" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label class="form-label">Salary End</label>
                                                    <div class="input-group">
                                                        <span class="input-group-prepend">
                                                            <span class="input-group-text">Rp.</span>
                                                        </span>
                                                        <input type="text" class="form-control text-right" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group mb-0">
                                                    <label class="form-label">Description</label>
                                                    <textarea rows="3" class="form-control" placeholder="Here can be your description"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer text-right">
                                        <button type="submit" class="btn btn-primary">Update Profile</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
            </div>
        );
    }
}

export default Insert;