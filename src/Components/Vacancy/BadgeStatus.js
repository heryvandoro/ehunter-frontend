import React, { Component } from 'react'

class BadgeStatus extends Component{
    constructor(props){
        super(props);
        this.state = {
            badge_text : "",
            badge_class : ""
        };
    }
    componentDidMount(){
        this.props.onRef(this);
    }
    sync(status){
        let badge_text, badge_class;
        switch(status){
            case 0 :
                badge_text = "Ongoing";
                badge_class = "bg-success";
                break;
            case 1 :
                badge_text = "Processing";
                badge_class = "bg-warning";
                break;
            case 2 :
                badge_text = "Closed";
                badge_class = "bg-danger";
                break;
            default :
                badge_text = "";
                badge_class = "";
                break;
        }
        this.setState({
            badge_text : badge_text,
            badge_class : badge_class,
        });
    }
    render(){
        return(
            <div className={"badge " + this.state.badge_class}>{this.state.badge_text}</div>
        )
    }
}

export default BadgeStatus;