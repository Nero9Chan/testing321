import React, { Component } from 'react';
import './UserProfilePage.css';
import PageHeader from '../PageHeader/PageHeader';
import { userObject, userType } from '../LoginPage/LoginPage';


class UserProfilePage extends Component {
    constructor(props){
        super(props);
        this.state={
            pageName: 'User',
            userDetails: {}
        }
    }

    componentDidMount(){
        this.getUserDetails();
    }

    getUserDetails = _ => {
        let ut
        (userType==='admin' || userType==='hktcs')?ut = 'hktcs':ut = 'et';
        fetch(`http://localhost:8080/users/${ut}_details?username=${userObject.username}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
            userDetails: res.data[0]
        })
      })
      .catch(err => console.log(err))
    }

    render() {
        const userDetails = this.state.userDetails;
        return ( 
            <div className="UserProfilePage MainWrapper">
                <PageHeader pageName={this.state.pageName} />
                
                {/*Edit button*/}
                <div className="editBtnWrapper">
                    <i className="fas fa-edit editIcon"></i>
                    <div className="editTag">Edit</div>
                </div>
                {/*End of Edit button*/}

                {/*Profile table*/}
                <div className="col-lg-12">
                    <div className="card">
                        <table className="table">
                        <tbody>
                            <tr>
                            <th className="usernameField">Username: </th>
                            <td className="usernameData">{userDetails.username}</td>
                            </tr>
                            {userType === 'hktcs' || userType === 'admin'?
                                <tr> 
                                <th className="staff_idField">Staff ID: </th>
                                <td className="staff_idData">{userDetails.staff_id}</td>
                                </tr>
                                :
                                <tr>
                                <th className="tean_idField">Team ID: </th>
                                <td className="tean_idData">{userDetails.team_id}</td>
                                </tr>
                            }
                            <tr>
                            <th className="emailField">Email: </th>
                            <td className="emailData">{userDetails.email}</td>
                            </tr>
                            <tr>
                            <th className="telField">Tel: </th>
                            <td className="telData">{userDetails.tel}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/*End of Profile table*/}
            </div>
         );
    }
}

export default UserProfilePage;