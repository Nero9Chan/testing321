import React, { Component } from 'react';
import './QuotationPage.css';
import PageHeader from '../PageHeader/PageHeader';

class QuotationPage extends Component {
    constructor(props){
        super(props);
        this.state={
            pageName: 'Quotations'
        }
    }
    render() { 
        return ( 
            <div className="QuotationPage MainWrapper">
                <PageHeader pageName={this.state.pageName}/>
            </div>

         );
    }
}
 
export default QuotationPage;