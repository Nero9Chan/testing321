import React, { Component } from 'react';
import './QuotationPage.css';
import PageHeader from '../PageHeader/PageHeader';

class QuotationPage extends Component {
    constructor(props){
        super(props);
        this.state={
            pageName: this.props.pageName
        }
    }
    render() { 
        return ( 
            <div className="QuotationPage MainWrapper">
                <PageHeader pageName={this.state.pageName}/>
                QuotationPage
            </div>

         );
    }
}
 
export default QuotationPage;