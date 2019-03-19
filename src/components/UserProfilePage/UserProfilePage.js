import React, { Component } from 'react';
import './UserProfilePage.css';
import PageHeader from '../PageHeader/PageHeader';
import { userObject } from '../LoginPage/LoginPage';


class UserProfilePage extends Component {
    constructor(props){
        super(props);
        this.state={
            pageName: this.props.pageName,
            type: this.props.type,
            userObject: userObject
        }
    }



    render() { 
        return ( 
            <div className="UserProfilePage MainWrapper">
                <PageHeader pageName={this.state.pageName} />
                
            </div>
         );
    }
}

export default UserProfilePage;