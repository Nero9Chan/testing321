import React, { Component } from 'react';
import './UploadPage.css';
import PageHeader from '../../PageHeader/PageHeader';

class UploadPage extends Component {
    constructor(props){
        super(props);
        this.state={
            pageName: this.props.pageName
        }
    }
    render() { 
        return ( 
            <div className="UploadPage">
                <PageHeader pageName={this.state.pageName}/>
                UploadPage
            </div> 
        );
    }
}
 
export default UploadPage;