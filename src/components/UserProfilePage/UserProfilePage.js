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
                <div className="editBtnWrapper">
                    <i className="fas fa-edit editIcon"></i>
                    <div className="editTag">Edit</div>
                </div>
                <div className="col-lg-12">
                    <div className="card">
                        <table className="table">
                            <tr>
                            <th className="usernameField">Username: </th>
                            <td className="usernameData">{userObject.username}</td>
                            </tr>
                            {userType === 'HKTCS'?
                                <tr> 
                                <th className="staff_idField">Staff ID: </th>
                                <td className="staff_idData">{userObject.staff_id}</td>
                                </tr>
                                :
                                <tr>
                                <th className="tean_idField">Team ID: </th>
                                <td className="tean_idData">{userObject.team_id}</td>
                                </tr>
                            }
                            <tr>
                            <th className="emailField">Email: </th>
                            <td className="emailData">{userObject.email}</td>
                            </tr>
                            <tr>
                            <th className="telField">Tel: </th>
                            <td className="telData">{userObject.tel}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
         );
    }
}

export default UserProfilePage;