import React, { Component } from 'react';
import './NavBar.css';
import { userType } from '../LoginPage/LoginPage';
import HKTCSNav from './HKTCSNav';
import ETNav from './ETNav';
import AdminNav from './AdminNav';

class NavBar extends Component {

    render() {
      const p = this.props; 
        return ( 
            <>
            {userType === 'hktcs'? <HKTCSNav onClick={p.onClick} logout={p.logout} />:
             userType === 'et'? <ETNav onClick={p.onClick} logout={p.logout} />:
             userType === 'admin'? <AdminNav onClick={p.onClick} logout={p.logout} />:
             <></>
            }
            </>
        );
    }
}
 
export default NavBar;