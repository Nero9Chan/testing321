import React, { Component } from 'react';
import './OrderList.css';
import PageHeader from '../PageHeader/PageHeader';


class OrderList extends Component {
    constructor(props){
        super(props);
        this.state={
            pageName: this.props.pageName
        }
    }

    convertDateTime = date => {
        let d = date.split('');
        return d.slice(0,10);
    }

    appendOrders = _ => {
        let orders = this.props.orders;
        let tr = [];
        let td = [];
        let j = this.props.totalOrders;
        for(let i = 0; i < j; i++){
            td.push(<td key={i+1*j}>
                <div className="orderNo" onClick={()=>this.props.onClick('details')}>{orders[i].order_number}</div>
            </td>)
            td.push(<td key={i+2*j}>{orders[i].order_status}</td>)
            td.push(<td key={i+3*j}>{this.convertDateTime(orders[i].assigning_date)}</td>)
            td.push(<td key={i+4*j}>{this.convertDateTime(orders[i].pre_visit_date)}</td>)
            td.push(<td key={i+5*j}>{this.convertDateTime(orders[i].wiring_date)}</td>)
            td.push(<td key={i+6*j}>{orders[i].team_id}</td>)
            tr.push(<tr key={i+7*j}>{td}</tr>);    
            td = [];
        }
        return tr;
    } // end of method appendOrders

    render() { 
        return ( 
        <div className="OrderList MainWrapper">
            <PageHeader pageName={this.state.pageName} />
            <table border="1px" className="table table-hover table-striped table-bordered orderTable">
                <thead className="thead-dark">
                    <tr>
                        <th>
                            Order#
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Assigning Date
                        </th>
                        <th>
                            Pre-Visit Date
                        </th>
                        <th>
                            Wiring Date
                        </th>
                        <th>
                            Team ID
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.appendOrders()}
                </tbody>
            </table>
        </div>
        );
    }
}
 
export default OrderList;