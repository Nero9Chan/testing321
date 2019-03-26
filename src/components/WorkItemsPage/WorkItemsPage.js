import React, { Component } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import './WorkItemsPage.css';

class WorkItemsPage extends Component {
    constructor(props){
        super(props);
        this.state={
            workitem_type:'ATG',
            pageName: 'Work Items',
            ATGitems:null,
            IBIitems:null,
            totalItems:0
        }
    }

    componentDidMount(){
        this.getitems();
    }

    onClick = t => {
        this.setState({
            workitem_type: t
        })
        this.getitems();
    }

    getitems = _ => {
        fetch(`http://localhost:8080/workitems?type=${this.state.workitem_type}`)
          .then(response => response.json())
          .then(response => {
            this.setState({
              totalOrders: response.data.length,
              items: response.data
            })
          })
          .catch(err => console.log(err))
          console.log(this.state.items); 
    } // get orders from db

    appendItems = t => {
        var items
        if(this.state.workitem_type==='ATG'){
            items = this.state.ATGitems;
        }else{
            items = this.state.IBIitems;
        }
        let tr = [];
        let td = [];
        let j = this.state.totalOrders;
        for(let i = 0; i < j; i++){
            td.push(<td key={i+1*j}>{items[i].work_item_id}</td>)
            td.push(<td key={i+2*j}>{items[i].description}</td>)
            td.push(<td key={i+3*j}>{items[i].unit}</td>)
            td.push(<td key={i+4*j}>{items[i].unit_rate===0?'-':'$'+items[i].unit_rate}</td>)
            tr.push(<tr key={i+5*j}>{td}</tr>);    
            td = [];
        }
        return tr;
    } // end of method appendOrders

    render() { 
        return ( 
            <div className="WrokItemsPage MainWrapper">
                <PageHeader pageName={this.state.pageName + " (" + this.state.workitem_type + ")"} />

                <div className="editBtnWrapper">
                    <i className="fas fa-edit editIcon"></i>
                    <div className="editTag">Edit</div>
                </div>

                <button type="button" class="btn btn-secondary atgBtn" onClick={()=>this.onClick('ATG')}>ATG</button>
                <button type="button" class="btn btn-secondary ibiBtn" onClick={()=>this.onClick('IBI')}>IBI</button>
                <div className="btnUnderline"></div>

                <table border="1px" className="table table-hover table-striped table-bordered workItemTable">
                    <thead className="thead-dark">
                        <tr>
                            <th width="10%">
                                Work_item_ID
                            </th>
                            <th width="60%">
                                Description
                            </th>
                            <th width="15%">
                                unit
                            </th>
                            <th width="15%">
                                unit_rate
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.appendItems()}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default WorkItemsPage;