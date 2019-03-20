import React, { Component } from 'react';
import './OrderDetails.css';
import PageHeader from '../../PageHeader/PageHeader';
import { orderObjects } from '../../ControlStaffView/ControlStraffView';



class OrderDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            pageName: this.props.pageName,
            orderObjects: orderObjects,
            orderIndex: this.props.orderIndex
        }
    }

    render() {
        let orderObjects = this.state.orderObjects;
        let i = this.state.orderIndex;
        return (
            <div className="OrderDetails MainWrapper">
                <PageHeader pageName={this.state.pageName}/>
                <div className="col-lg-12">
                    <div className="card">
                        <table className="table">
                        <tbody>
                            <tr>
                            <th className="orderNoField">Order No.: </th>
                            <td className="orderNoData">{orderObjects[i].order_number}</td>
                            </tr>
                            <tr>
                            <th className="BSNField">BSN: </th>
                            <td className="BNSData">{orderObjects[i].BSN}</td>
                            </tr>
                            <tr>
                            <th className="statusField">Status: </th>
                            <td className="statusData">{orderObjects[i].order_status}</td>
                            </tr>
                            <tr>
                            <th className="ADField">Assigning Date: </th>
                            <td className="ADData">{orderObjects[i].assigning_date}</td>
                            </tr>
                            <tr>
                            <th className="PVField">Pre-Visit Date: </th>
                            <td className="PVData">{orderObjects[i].pre_visit_date}</td>
                            </tr>
                            <tr>
                            <th className="WField">Wiring Date: </th>
                            <td className="WData">{orderObjects[i].wiring_date}</td>
                            </tr>
                            <tr>
                            <th className="TIDField">Team ID: </th>
                            <td className="TIData">{orderObjects[i].team_id}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div> 
         );
    }
}
 
export default OrderDetails;