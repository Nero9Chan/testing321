import React, { Component } from 'react';
import './NavBar.css';
import { navItems } from '../ControlStaffView/ControlStraffView';

class NavBar extends Component {

    createNavItems = _ => {
        let items = [];
        for(let i = 0; i < navItems.length; i++){
            items.push(
                <li key = {i}>
                    {navItems[i]}
                </li>
            )
        }
        return items;
    }

    render() { 
        return ( 
            <div className="navbar bg-dark navbar-dark">
            <div className="Wrapper user" onClick={()=>this.props.onClick('user')}>
              <i className="fas fa-user-circle userIcon"></i>
              <div className="username">
                {this.props.username}
              </div>
            </div>
              <div className="sperator"></div>
              <ul className="navbar-nav">
                <li className="nav-item" onClick={()=>this.props.onClick(this.props.items[0])}>
                  <i className="fas fa-list-ul listIcon"></i>
                  <div className="nav-link">{this.props.items[0]}</div>
                  <div className="underline">
                  </div>
                </li>
                <li className="nav-item" onClick={()=>this.props.onClick(this.props.items[1])}>
                  <i className="fas fa-plus plusIcon"></i>
                  <div className="nav-link">{this.props.items[1]}</div>
                  <div className="underline">
                  </div>
                </li>
                <li className="nav-item" onClick={()=>this.props.onClick(this.props.items[2])}>
                  <i className="fas fa-file fileIcon"></i>
                  <div className="nav-link">{this.props.items[2]}</div>
                  <div className="underline">
                  </div>
                </li>
              </ul>
              <div className="logoutWrapper">
                <i className="fas fa-sign-out-alt logoutIcon" onClick={this.props.logout}></i>
                  <div className="logoutTag">
                    Logout
                  </div>
              </div>
            </div>
        );
    }
}
 
export default NavBar;