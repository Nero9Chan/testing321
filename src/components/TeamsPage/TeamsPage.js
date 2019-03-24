import React, { Component } from 'react';
import './TeamsPage.css';
import PageHeader from '../PageHeader/PageHeader';

class TeamsPage extends Component {
    constructor(props){
        super(props);
        this.state={
            pageName: 'Teams'
        }
    }
    render() { 
        return ( 
            <div className="TeamsPage MainWrapper">
                <PageHeader pageName={this.state.pageName}/>
            </div>

         );
    }
}
 
export default TeamsPage;