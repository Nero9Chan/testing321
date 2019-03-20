import React, { Component } from 'react';
import './SearchBar.css';
import HKTLogo from './HKT.png';


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected:'',
            keywords:'',
            searchField:''
        }
    }

    onChange = e =>{
        this.setState({
            keywords: e.target.value
        })
        console.log(this.state.searchField);
        console.log(e.target);
    }

    selectOnChange = e => {
        this.setState({
            searchField: e.target.value
        })
    }

    onBlur = e => {
        e.target.value = '';
        this.setState({
            keywords:''
        })
    }


    render() { 
        return (
        <> 
        {this.props.pageType !== "Orders"? this.props.pageType !== "Work Items"? <></>
        : // render order list seach bar
        <div className="SearchBar">
            <img src={HKTLogo} alt="logo" width="200px" className="HKTLogo"></img>
            <input type="text" className="textBar" placeholder="Search..." name={this.state.keywords} onChange={this.onChange} onBlur={this.onBlur}></input>
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
            <input type="text" className="textBar" placeholder="Search..." name={this.state.keywords} onChange={this.onChange} onBlur={this.onBlur}></input>
            <i className="fas fa-search searchIcon"></i>
            <select value={this.state.searchField} className="selectOrderFields" onChange={this.selectOnChange}>
                <option value="Order#">Order#</option>
                <option value="OrderStatus">Status</option>
                <option value="AD">Assigning Date</option>
                <option value="PVD">Pre-visit Date</option>
                <option value="WD">Wiring Date</option>
                <option value="team_id">Team ID</option>
            </select>
        </div>
        }
        </>
        );
    }
}
 

export default SearchBar;