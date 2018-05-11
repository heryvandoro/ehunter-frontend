import React, { Component } from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { Link } from 'react-router-dom'
import Vacancy from '../Vacancy/Router'

class Hunter extends Component {
    constructor(props){
        super(props);
        this.state = {
            vacancies : []
        }
    }
    render(){
        return(
            <div>
                <Header />
					<div className="my-3 my-md-5">
                        <div className="container">
                            <div className="row row-cards">
                                <div className="col-lg-8">
                                    <div className="card">
                                        <Vacancy.Box vacancies={this.state.vacancies} />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                <div class="card">
                <div class="card-header">
                  <h3 class="card-title">My Profile</h3>
                </div>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-auto">
                        <span class="avatar avatar-xl" style={{backgroundImage : "url(/demo/faces/male/9.jpg)"}}></span>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label class="form-label">Email-Address</label>
                          <input class="form-control" placeholder="your-email@domain.com"/>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Bio</label>
                      <textarea class="form-control" rows="5">Big belly rude boy, million dollar hustler. Unemployed.</textarea>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Email-Address</label>
                      <input class="form-control" placeholder="your-email@domain.com"/>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Password</label>
                      <input type="password" class="form-control" value="password"/>
                    </div>
                    <div class="form-footer">
                      <button class="btn btn-primary btn-block">Save</button>
                    </div>
                  </form>
                </div>
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

export default Hunter;