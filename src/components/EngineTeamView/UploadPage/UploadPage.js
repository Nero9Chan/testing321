import React, { Component } from 'react';
import './UploadPage.css';
import PageHeader from '../../PageHeader/PageHeader';

class UploadPage extends Component {
    constructor(props){
        super(props);
        this.state={
            pageName: 'Make Quotation'
        }
    }
    render() { 
        return ( 
            <div className="UploadPage MainWrapper">
                <PageHeader pageName={this.state.pageName}/>

                <form>
                <div class="form-group">
                    <label for="orderNum">Order Number:</label>
                    <input type="orderNum" class="form-control" id="orderNum"/>
                </div>
                <div class="form-group">
                    <label for="workItems">Work Items:</label>
                    <input type="workItems" class="form-control" id="workItems"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div> 
        );
    }
}
 
export default UploadPage;