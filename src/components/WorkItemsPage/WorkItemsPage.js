import React, { Component } from 'react';
import PageHeader from '../PageHeader/PageHeader';

class WorkItemsPage extends Component {
    constructor(props){
        super(props);
        this.state={
            pageName: this.props.pageName
        }
    }

    render() { 
        return ( 
            <div className="WrokItemsPage MainWrapper">
                <PageHeader pageName={this.state.pageName}/>
            </div>
        );
    }
}
 
export default WorkItemsPage;