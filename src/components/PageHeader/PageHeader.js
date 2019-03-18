import React, { Component } from 'react';
import './PageHeader.css';

class PageHeader extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="PageHeader">
                <h2 className="heading">{this.props.pageName}</h2>
            </div>
         );
    }
}
 
export default PageHeader;