import React, { Component } from "react";
import { useLocation, useNavigate } from "react-router-dom";

class Detail extends React.Component{
    componentDidMount(){
        const {location, navigate} = this.props;
        if (location.state == null){
            navigate('/');
        }
    }
    render(){
        const {location} = this.props;
        if (location.state){
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props){
        let location = useLocation();
        let navigate = useNavigate();
        return <Component {...props} location={location} navigate={navigate}/>
    }
    return ComponentWithRouterProp
}

export default withRouter(Detail);