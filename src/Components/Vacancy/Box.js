import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BoxVacancy extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.vacancies.length === 0) return (
            <div className="card-body">No Data</div>
        );
        return(
            <div>
                <div className="card-header">
                    <h3 className="card-title">Vacancies</h3>
                </div>
                <table className="table card-table table-vcenter">
                    <tbody>
                        {this.props.vacancies.map(vacancy => (
                            <tr key={vacancy.id}>
                                <td><img src={vacancy.company.logo} alt="" className="h-8"/></td>
                                <td>
                                    <Link to={"/vacancy/" + vacancy.id}>{vacancy.position_name}</Link>
                                </td>
                                <td className="text-right text-muted d-none d-md-table-cell text-nowrap">{vacancy.company.name}</td>
                                <td className="text-right text-muted d-none d-md-table-cell text-nowrap">{vacancy.hunters.length} hunters</td>
                                <td className="text-right">
                                    <BadgeVacancy status={vacancy.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

class BadgeVacancy extends Component{
    constructor(props){
        super(props);
        this.state = {
            badge_class : "",
            badge_text : ""
        }
    }
    componentWillMount(){
        let badge_class, badge_text;
        switch(this.props.status){
            case 0 :
                badge_class = "badge-success";
                badge_text = "Ongoing";
                break;
            case 1 :
                badge_class = "badge-warning";
                badge_text = "Processing";
                break;
            case 2 :
                badge_class = "badge-danger";
                badge_text = "Closed";
                break;
        }
        this.setState({
            badge_class : badge_class,
            badge_text : badge_text
        });
    }
    render(){
        return(
            <span className={"badge " + this.state.badge_class}>{this.state.badge_text}</span>
        )
    }
}

export default BoxVacancy;