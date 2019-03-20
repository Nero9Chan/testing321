import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

    createNavItems = _ => {
        let items = [];
        for(let i = 0; i < this.props.items.length; i++){
            items.push(
                <li key = {i}>
                    {this.props.items[i]}
                </li>
            )
        }
        return items;
    }

    render() { 
        return ( 
            <div className="navbar">
            <div className="Wrapper user" onClick={()=>this.props.onClick('profile')}>
              <i className="fas fa-user-circle userIcon"></i>
              <div className="username">
                {this.props.username}
              </div>
            </div>
              <div className="sperator"></div>
              <ul className="navbar-nav">
                <li className="nav-item" onClick={()=>this.props.onClick(this.props.items[0])}>
                  <i className="fas fa-list-ul listIcon navIcons"></i>
                  <div className="nav-link">{this.props.items[0]}</div>
                  <div className="underline">
                  </div>
                </li>
                <li className="nav-item" onClick={()=>this.props.onClick(this.props.items[1])}>
                  <i className="fas fa-plus plusIcon navIcons"></i>
                  <div className="nav-link">{this.props.items[1]}</div>
                  <div className="underline">
                  </div>
                </li>
                <li className="nav-item" onClick={()=>this.props.onClick(this.props.items[2])}>
                  <i className="fas fa-file fileIcon navIcons"></i>
                  <div className="nav-link">{this.props.items[2]}</div>
                  <div className="underline">
                  </div>
                </li>
                {this.props.items.length===4?
                // render the forth item (HKTCS view)
                <li className="nav-item" onClick={()=>this.props.onClick(this.props.items[3])}>
                  <i className="fas fa-tools workItemsIcon navIcons"></i>
                  <div className="nav-link">{this.props.items[3]}</div>
                  <div className="underline">
                  </div>
                </li>
                :
                <></>
                }
              </ul>
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
 
export default NavBar;