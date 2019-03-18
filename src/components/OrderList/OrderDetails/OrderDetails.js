import React, { Component } from 'react';
import './OrderDetails.css';
import PageHeader from '../../PageHeader/PageHeader';

class OrderDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            pageName: this.props.pageName
        }
    }

    render() { 
        return (
            <div className="OrderDetails MainWrapper">
                <PageHeader pageName={this.state.pageName}/>
            </div> 
         );
    }
}
 
export default OrderDetails;