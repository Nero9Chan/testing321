import React, { Component } from 'react';
import './SearchBar.css';
import HKTLogo from './HKT.png';


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword:'',
            searchField:'order_number'
        }
    }

    onChange = e =>{
        this.setState({
            keyword: e.target.value
        },
        () => {
            this.props.findOrders(this.state.searchField, this.state.keyword);
        });
        console.log(this.state.keyword);
    }

    selectOnChange = e => {
        this.setState({
            searchField: e.target.value
        })
        console.log(this.state.searchField);
    }

    onBlur = e => {
        e.target.value = '';
        this.setState({
            keyword:''
        })
    }


    render() { 
        return (
        <> 
        {this.props.pageType !== "Orders"? this.props.pageType !== "Work Items"?
        // render normal top bar
        <div className="SearchBar">
            <img src={HKTLogo} alt="logo" width="200px" className="HKTLogo"></img>
        </div>
        : // render order list seach bar
        <div className="SearchBar">
            <img src={HKTLogo} alt="logo" width="200px" className="HKTLogo"></img>
            <input type="text" className="textBar" placeholder="Search..." name={this.state.keyword} onChange={this.onChange} onBlur={this.onBlur}></input>
            <i className="fas fa-search searchIcon"></i>
            <select value={this.state.searchField} className="selectOrderFields" onChange={this.selectOnChange}>
                <option value="Work_item_ID">Work_item_ID</option>
                <option value="Description">Description</option>
                <option value="unit">unit</option>
                <option value="unit_rate">unit_rate</option>
            </select>
        </div>
        : // render work items seach bar
        <div className="SearchBar">
            <img src={HKTLogo} alt="logo" width="200px" className="HKTLogo"></img>
            <input type="text" className="textBar" placeholder="Search..." name={this.state.keyword} onChange={this.onChange} onBlur={this.onBlur}></input>
            <i className="fas fa-search searchIcon"></i>
            <select value={this.state.searchField} className="selectOrderFields" onChange={this.selectOnChange}>
                <option value="order_number">Order#</option>
                <option value="BSN">BSN</option>
                <option value="order_status">Status</option>
                <option value="assigning_date">Assigning Date</option>
                <option value="pre_visit_date">Pre-visit Date</option>
                <option value="wiring_date">Wiring Date</option>
                <option value="team_id">Team ID</option>
            </select>
        </div>
        }
        </>
        );
    }
}
 

export default SearchBar;