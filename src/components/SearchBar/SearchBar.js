import React, { Component } from 'react';
import './SearchBar.css';
import HKTLogo from './HKT.png';


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected:'',
            searchItem:'',
            searchField:''
        }
    }

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.searchField);
        console.log(e.target.name);
    }

    onBlur = e => {
        e.target.value = '';
        this.setState({
            [e.target.name]:''
        })
    }

    render() { 
        return ( 
        <div className="SearchBar">
            <img src={HKTLogo} alt="logo" width="200px" className="HKTLogo"></img>
            <input type="text" className="textBar" placeholder="Search..." name={this.state.searchItem} onChange={this.onChange} onBlur={this.onBlur}></input>
            <i className="fas fa-search searchIcon"></i>
            <select value={this.state.searchField} className="selectOrderFields" onChange={this.onChange}>
                <option value="Order#">Order#</option>
                <option value="BSN#">BSN</option>
                <option value="OrderStatus">Status</option>
                <option value="AD">Assigning Date</option>
                <option value="PVD">Pre-visit Date</option>
                <option value="WD">Wiring Date</option>
                <option value="team_id">Team ID</option>
            </select>
        </div>
        );
    }
}
 
export default SearchBar;