import React, { Component } from 'react';
import './UserProfilePage.css';
import PageHeader from '../PageHeader/PageHeader';
import { userObject, userType } from '../LoginPage/LoginPage';


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
        let userObject = this.state.userObject;
        console.log(userObject.staff_id!==null);
        return ( 
            <div className="UserProfilePage MainWrapper">
                <PageHeader pageName={this.state.pageName} />
                <div className="usernameField">Username: </div>
                <div className="usernameData">{userObject.username}</div>
                {userType === 'HKTCS'?
                    <> 
                    <div className="staff_idField">Staff ID: </div>
                    <div className="staff_idData">{userObject.staff_id}</div>
                    </>
                    :
                    <>
                    <div className="tean_idField">Team ID: </div>
                    <div className="tean_idData">{userObject.team_id}</div>
                    </>
                }
                <div className="emailField">Email: </div>
                <div className="emailData">{userObject.email}</div>
                <div className="telField">Tel: </div>
                <div className="telData">{userObject.tel}</div>
            </div>
         );
    }
}

export default UserProfilePage;