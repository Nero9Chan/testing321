import React, { Component } from 'react';
import { userObject } from '../LoginPage/LoginPage';
import { items } from '../MainView/MainView';

class HKTCSNav extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navbar">
            {/*User*/}
                <div className="Wrapper user" onClick={()=>this.props.onClick('profile')}>
                    <i className="fas fa-user-circle userIcon"></i>
                    <div className="username">
                        {userObject.username}
                    </div>
                </div>
                <div className="sperator"></div>
            
            {/*------------------------------below are nav items-----------------------------*/}
              <ul className="navbar-nav">
                {/*Order list*/}
                <li className="nav-item" onClick={()=>this.props.onClick(items[0])}>
                  <i className="fas fa-list-ul listIcon navIcons"></i>
                  <div className="nav-link">{items[0]}</div>
                  <div className="underline"></div>
                </li>

                {/*Import order*/}
                <li className="nav-item" onClick={()=>this.props.onClick(items[1])}>
                  <i className="fas fa-plus plusIcon navIcons"></i>
                  <div className="nav-link">{items[1]}</div>
                  <div className="underline">
                  </div>
                </li>

                {/*Quotation list*/}
                <li className="nav-item" onClick={()=>this.props.onClick(items[2])}>
                  <i className="fas fa-file fileIcon navIcons"></i>
                  <div className="nav-link">{items[2]}</div>
                  <div className="underline">
                  </div>
                </li>

                {/*Team list*/}
                <li className="nav-item" onClick={()=>this.props.onClick(items[3])}>
                  <i class="fas fa-users teamsIcon navIcons"></i>
                  <div className="nav-link">{items[3]}</div>
                  <div className="underline">
                  </div>
                </li>
              </ul>
            {/*------------------------------above are nav items-----------------------------*/}

              {/*logout*/}
              <div className="logoutWrapper">
                <i className="fas fa-sign-out-alt logoutIcon" onClick={this.props.logout}></i>
                  <div className="logoutTag" onClick={this.props.logout}>
                    Logout
                  </div>
              </div>

            </div>
         );
    }
}
 
export default HKTCSNav;