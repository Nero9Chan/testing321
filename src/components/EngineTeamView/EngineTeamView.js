import React, { Component } from 'react';
import QuotationPage from '../QuotationPage/QuotationPage';
import UploadPage from './UploadPage/UploadPage';
import UserProfilePage from '../UserProfilePage/UserProfilePage';
import OrderList from '../OrderList/OrderList';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import {Redirect} from 'react-router';
import { userObject } from '../LoginPage/LoginPage';
import OrderDetails from '../OrderList/OrderDetails/OrderDetails';

class EngineTeamView extends Component {
    constructor(props){
      super(props);
      this.state = {
       items:['Orders', 'Make Quotation', 'Quotations'], // nav items
        orders:[],
        type: '',
        username: userObject.username, // pass username to navbar
        totalOrders: 0,
        logout:false
      }
    }

    componentDidMount(){
      this.setState({
        type: this.state.items[0], // initialize to show order list first
      });
      console.log(this.state.username);
      this.getOrders();
    }



    getOrders = _ => {
        fetch('http://localhost:8080/orders')
          .then(response => response.json())
          .then(response => this.setState({orders: response.data}))
          .catch(err => console.log(err))
    }

    onClick = x =>{
      this.setState({
        type:x
      })
    }

    logout = _ => {
      console.log("1222")
      this.setState({
        logout:true
      })
    }

    render() { 
        // const { orders } = this.state;
          return ( 
            <div>
              {this.state.username===''?<Redirect to={{pathname: `/`}}/>:
              <>
              <NavBar onClick={this.onClick} username={this.state.username} items={this.state.items} logout={this.logout}/>
              <SearchBar pageType={this.state.type}/>
              {this.state.type === this.state.items[0]? <OrderList pageName={this.state.items[0]}/>:
              this.state.type === this.state.items[1]? <UploadPage pageName={this.state.items[1]}/>:
              this.state.type === this.state.items[2]? <QuotationPage pageName={this.state.items[2]}/>:
              this.state.type === 'details'? <OrderDetails pageName='Order Details' />:
              this.state.type === 'profile'? <UserProfilePage pageName='User Profile'/>:<></>}
              </>
              }
              {
                this.state.logout===true?<Redirect to={{pathname: `/`}}/>:<></>
              }
            </div> 
          );
      }
}
 
export default EngineTeamView;