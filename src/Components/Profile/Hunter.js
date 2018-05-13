import React, { Component } from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { Link } from 'react-router-dom'
import Vacancy from '../Vacancy/Router'
import HunterService from '../../Services/HunterService';

class Hunter extends Component {
    constructor(props){
        super(props);
        this.state = {
            vacancies : [],
            otw_cv : false,
            otw_ktp : false
        }
        this.service = new HunterService("/hunters");
        this.logChange = this.logChange.bind(this);
        this.actionSave = this.actionSave.bind(this);
        this.uploadCV = this.uploadCV.bind(this);
        this.uploadKTP = this.uploadKTP.bind(this);
        this.copyCV = this.copyCV.bind(this);
    }
    copyCV(e){
        e.preventDefault();
        let textField = document.createElement('textarea')
        textField.innerText = this.state.cv;
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    async componentWillMount(){
        let login_data = localStorage.getItem("login_data");
        if(login_data !== null) {
            login_data = JSON.parse(login_data);
            let hunter = await this.service.getOne(login_data.id);
            this.setState(hunter.data);
        }
        else window.location.href = "/";
    }
    async uploadCV(e){
        e.preventDefault();
        this.setState({ otw_cv : true });
        let data = new FormData();
        if(this.state.file) data.append('file', this.state.file, this.state.file.name);

        await this.service.uploadCV(this.state.id, data);
        window.location.reload();
    }
    async uploadKTP(e){
        e.preventDefault();
        this.setState({ otw_ktp : true });
        let data = new FormData();
        if(this.state.ktp_file) data.append('file', this.state.ktp_file, this.state.ktp_file.name);

        let ktp = await this.service.uploadKTP(this.state.id, data);
        if(ktp.data.messages !== "success"){
            alert(ktp.data.messages);
        }
        window.location.reload();
    }
    async actionSave(e){
        e.preventDefault();
        await this.service.update(this.state.id, this.state);
        window.location.reload();
    }
    logChange(e) {
        if(["file", "ktp_file"].indexOf(e.target.name) !== -1){
            this.setState({[e.target.name] : e.target.files[0]});
        }else{
            this.setState({[e.target.name]: e.target.value});  
        }
    }
    render(){
        return(
            <div>
                <Header />
					<div className="my-3 my-md-5">
                        <div className="container">
                            <div className="row row-cards">
                                <div className="col-lg-6">
                                    <div className="card">
                                        <Vacancy.Box title="Applied Vacancy" vacancies={this.state.vacancies} />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">KTP</h3>
                                        </div>
                                        <div className="card-body">
                                            {this.state.ktp === "" || this.state.ktp === null ? 
                                            <form onSubmit={this.uploadKTP}>
                                                <div className="form-group">
                                                    <div className="custom-file">
                                                        <input onChange={this.logChange} type="file" name="ktp_file" className="custom-file-input" />
                                                        <label className="custom-file-label">Choose KTP</label>
                                                    </div>
                                                </div>
                                                <div className="form-footer">
                                                    <button disabled={this.state.otw_ktp} className="btn btn-primary btn-block">Upload</button>
                                                </div>
                                            </form>
                                            : <img src={this.state.ktp} /> }
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">My CV</h3>
                                            {this.state.cv_raw !== null ? 
                                            <div className="card-options">
                                                <Link target="_blank" to={this.state.cv || '/'} className="stamp bg-green">&nbsp;<i style={{color: "white"}} className="fe fe-download" />&nbsp;</Link>
                                                <Link onClick={this.copyCV} to="/" className="stamp bg-red">&nbsp;<i style={{color: "white"}} className="fe fe-link" />&nbsp;</Link>
                                            </div> : ""}
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={this.uploadCV}>
                                                <div className="form-group">
                                                    <div className="custom-file">
                                                        <input onChange={this.logChange} type="file" name="file" className="custom-file-input" />
                                                        <label className="custom-file-label">Choose CV</label>
                                                    </div>
                                                </div>
                                                <div className="form-footer">
                                                    <button disabled={this.state.otw_cv} className="btn btn-primary btn-block">Upload</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">My Profile</h3>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={this.actionSave}>
                                                <div className="row">
                                                    <div className="col-auto">
                                                        <span className="avatar avatar-xl" style={{backgroundImage : "url(/demo/faces/male/9.jpg)"}}></span>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label className="form-label">Name</label>
                                                            <input name="name" type="text" onChange={this.logChange} value={this.state.name || ''} className="form-control" placeholder="Your name" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Bio</label>
                                                    <textarea name="bio" onChange={this.logChange} value={this.state.bio || ''} className="form-control" rows="5" placeholder="Big belly rude boy, million dollar hustler. Unemployed."></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Email</label>
                                                    <input name="email" type="email" onChange={this.logChange} value={this.state.email || ''} className="form-control" placeholder="info@ehunter.com" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Password</label>
                                                    <input name="password" type="password" onChange={this.logChange} className="form-control" placeholder="Your password" />
                                                </div>
                                                <div className="form-footer">
                                                    <button className="btn btn-primary btn-block">Save</button>
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