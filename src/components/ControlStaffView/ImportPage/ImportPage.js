import React, { Component } from 'react';
import './ImportPage.css';
import PageHeader from '../../PageHeader/PageHeader';

class ImportPage extends Component {
    constructor(props){
        super(props);
        this.state={
            pageName: this.props.pageName
        }
    }

    render() { 
        return ( 
            <div className="ImportPage MainWrapper">
                <PageHeader pageName={this.state.pageName}/>
            </div>
        );
    }
}
 
export default ImportPage;