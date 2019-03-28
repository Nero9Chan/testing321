import React, { Component } from 'react';
import './OrderList.css';
import PageHeader from '../PageHeader/PageHeader';
import { totalOrders } from '../MainView/MainView';


class OrderList extends Component {
    constructor(props){
        super(props);
        this.state={
            pageName: 'Orders'
        }
    }

    appendorderObjects = _ => {
        let orderObjects = this.props.orderObjects;
        let tr = [];
        let td = [];
        let j = totalOrders;
        for(let i = 0; i < j; i++){
            td.push(
            <td key={i+1*j}>
                <div className="orderNo" onClick={()=>this.props.onClick('details', i)}>{orderObjects[i].order_number}</div>
            </td>)
            td.push(<td key={i+2*j}>{orderObjects[i].order_status}</td>)
            td.push(<td key={i+3*j}>{orderObjects[i].assigning_date}</td>)
            td.push(<td key={i+4*j}>{orderObjects[i].pre_visit_date}</td>)
            td.push(<td key={i+5*j}>{orderObjects[i].wiring_date}</td>)
            td.push(<td key={i+6*j}>{orderObjects[i].team_id}</td>)
            tr.push(<tr key={i+7*j}>{td}</tr>);    
            td = [];
        }
        return tr;
    } // end of method appendorderObjects

    render() { 
        return ( 
        <div className="OrderList MainWrapper col-lg-12">
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
                    {this.props.orderObjects[0]!==undefined?this.appendorderObjects():<></>}
                </tbody>
            </table>
        </div>
        );
    }
}
 
export default OrderList;