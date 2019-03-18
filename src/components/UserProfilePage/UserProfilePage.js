import React, { Component } from 'react';
import './UserProfilePage.css';
import PageHeader from '../PageHeader/PageHeader';


class UserProfilePage extends Component {
    constructor(props){
        super(props);
        this.state={
            pageName: this.props.pageName
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