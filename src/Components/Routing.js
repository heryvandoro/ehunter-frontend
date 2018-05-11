import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import Vacancy from './Vacancy/Router';
import Profile from './Profile/Router';

const Content = route => (
	<Route
		exact={true}
		path={route.path}
		render={props => (
			<route.component {...props} routes={route.routes} />
		)}
	/>
);

class Routing extends Component{
    routes = [
        { path: "/", component: Home },
        { path: "/vacancy/insert/", component: Vacancy.Insert },
        { path: "/vacancy/:id/detail", component: Vacancy.Detail },
        { path: "/vacancy/:id/hunters", component: Vacancy.Hunters },
        { path: "/vacancy/:id/result", component: Vacancy.Result },
        { path: "/login", component: Login },
        { path: "/register", component: Register },
        { path: "/profile/hunter", component: Profile.Hunter },
        { path: "/profile/company", component: Profile.Company }
    ]
    render(){
        return(
            this.routes.map((route, i) => 
                <Content key={i} {...route} />
            )
        )
    }
} 

export default Routing;