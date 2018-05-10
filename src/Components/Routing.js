import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import Member from './Members/Routes'; 
import Category from './Categories/Routes';
import Product from './Products/Routes';
import Transaction from './Transactions/Routes';
import Admin from './Admins/Routes';

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
        { path: "/", component: Dashboard },
        { path: "/members", component : Member.ManageMembers },
        { path: "/members/insert", component : Member.InsertMembers },
        { path: "/members/:id/update", component : Member.UpdateMembers },
        { path: "/categories", component : Category.ManageCategories },
        { path: "/categories/insert", component : Category.InsertCategories },
        { path: "/categories/:id/update", component : Category.UpdateCategories },
        { path: "/categories/hierarchy", component : Category.ManageHierarchy },
        { path: "/admins", component : Admin.ManageAdmins },
        { path: "/admins/insert", component : Admin.InsertAdmins },
        { path: "/admins/:id/update", component : Admin.UpdateAdmins },
        { path: "/products", component : Product.ManageProducts },
        { path: "/products/insert", component : Product.InsertProducts },
        { path: "/products/:id/update", component : Product.UpdateProducts },
        { path: "/transactions", component : Transaction.ManageTransactions },
        { path: "/transactions/insert", component : Transaction.InsertTransactions },
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