import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import {Redirect} from 'react-router-dom';
import { userType, userObject } from '../LoginPage/LoginPage';
import OrderList from '../OrderList/OrderList';
import ImportPage from '../ControlStaffView/ImportPage/ImportPage';
import QuotationPage from '../QuotationPage/QuotationPage';
import TeamsPage from '../TeamsPage/TeamsPage';
import UserProfilePage from '../UserProfilePage/UserProfilePage';
import UploadPage from '../EngineTeamView/UploadPage/UploadPage';
import WorkItemsPage from '../WorkItemsPage/WorkItemsPage';
import OrderDetails from '../OrderList/OrderDetails/OrderDetails';

export let orderObjects;
export let totalOrders;
export let items = [];

class MainView extends Component {
    constructor(props){
      super(props);
      this.state = {
        orders:[],
        pageType: 'Orders',
        orderIndex: 0,
        username: userObject.username,
        orderObjects:[]
      }
    }

    componentDidMount(){
      if(userType==='hktcs'){
        items = ["Orders", "Import", "Quotations", "Teams"];
          this.setState({
              pageType: items[0]
          })
      }else if(userType==='et'){
        items = ["Orders", "Make Quotation", "Quotations"];
        this.setState({
            pageType: items[0]
        })
      }else{
        items = ["Orders", "Quotations", "Work Items","Teams"];
        this.setState({
            pageType: items[0]
        })
      } // initialize nav items

      console.log(this.state.username);
      this.getOrders(); // get orders to display
    } 

    navOnClick = t =>{
      this.setState({
        pageType:t
      })
    } // change the existing type of the page

    orderOnClick = (t,index) => {
      this.setState({
        pageType:t,
        orderIndex: index
      })
    } // change to the relative order detail page

    getOrders = _ => {
      fetch('http://localhost:8080/orders')
        .then(response => response.json())
        .then(response => {
          totalOrders = response.data.length;
          this.setState({
            orderObjects: response.data
          })
          orderObjects = response.data;
          console.log(orderObjects);
        })
        .catch(err => console.log(err))
    } // get orders from db
    
    findOrders = (field, keyword) => {
      console.log(field + " " + keyword);
      fetch(`http://localhost:8080/orders/find?field=${field}&keyword=${keyword}`)
      .then(response => response.json())
        .then(response => {
          console.log(response.data[0]);
          if(response.data[0]!==undefined){
            totalOrders = response.data.length;
            this.setState({
              orderObjects: response.data
            })
            orderObjects = response.data;
          }else{
            totalOrders = 0;
            this.setState({
              orderObjects: []
            })
            orderObjects = [];
          }
        })
        .catch(err => console.log(err))
    }
    
    logout = _ => {
      this.setState({
        username:''
      })
    }

    render() {
      const s = this.state;
      console.log(s.pageType);
      console.log(this.state.orderObjects);
        return (
          <div>
            {this.state.username===''?<Redirect to={{pathname: `/`}}/>:
              <>
              <NavBar onClick={this.navOnClick} logout={this.logout} items={s.items}/>
              <SearchBar pageType={s.pageType} findOrders={this.findOrders}/>
              {/*render screen when login as hktcs*/}
              {userType==='hktcs'?
                <>
                 {s.pageType===items[0]?<OrderList onClick={this.orderOnClick} orderObjects={this.state.orderObjects} getOrders={this.getOrders}/>:
                 s.pageType===items[1]?<ImportPage />:
                 s.pageType===items[2]?<QuotationPage />:
                 s.pageType===items[3]?<TeamsPage />:
                 s.pageType==='details'?<OrderDetails orderIndex={this.state.orderIndex}/>:
                 s.pageType==='profile'?<UserProfilePage />:
                 <></>
                }
                </>
                :<></>
              }
              {/*render screen when login as et*/}
              {userType==='et'?
                <>
                 {s.pageType===items[0]?<OrderList onClick={this.orderOnClick} orderObjects={this.state.orderObjects} getOrders={this.getOrders}/>:
                 s.pageType===items[1]?<UploadPage />:
                 s.pageType===items[2]?<QuotationPage />:
                 s.pageType==='details'?<OrderDetails orderIndex={this.state.orderIndex}/>:
                 s.pageType==='profile'?<UserProfilePage />:
                 <></>
                }
                </>
                :<></>
              }
              {/*render screen when login as admin*/}
              {userType==='admin'?
                <>
                 {s.pageType===items[0]?<OrderList onClick={this.orderOnClick} orderObjects={this.state.orderObjects} getOrders={this.getOrders}/>:
                 s.pageType===items[1]?<QuotationPage />:
                 s.pageType===items[2]?<WorkItemsPage />:
                 s.pageType===items[3]?<TeamsPage />:
                 s.pageType==='details'?<OrderDetails orderIndex={this.state.orderIndex}/>:
                 s.pageType==='profile'?<UserProfilePage />:
                 <></>
                }
                </>
                :<></>
              }
              </>
            }
          </div>
        ); // end of return
    }
}
export default MainView;