import React, { Component } from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { Link } from 'react-router-dom'

class Hunter extends Component {
    constructor(props){
        super(props);
    }

    render(){
       return(
            <div>
            <Header />
                
            <Footer />
            </div>
       )
    }
}

export default Hunter;