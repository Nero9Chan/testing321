import React, { Component } from 'react'
import logo from './HKT.png';
import './LoginPage.css';
import {Redirect} from 'react-router';

export let userObject = {username:''};
export let userType = '';

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      isAuthenticated:false,
      errorMessage:''
    }
  }  

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validateUser = _ => {
      fetch(`http://localhost:8080/users/validation?username=${this.state.username}&password=${this.state.password}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data[0]);
        if(res.data.length>0){
          userObject = res.data[0];
          userType = res.data[0].user_type;
          this.setState({
            isAuthenticated: true,
          })
        }else{
          this.setState({
            errorMessage: 'Incorrect username or password'
          });
          console.log(this.state.errorMessage);
        }
      })
      .catch(err => console.log(err))
    }

    onSubmit = e => {
      e.preventDefault();
      if(this.state.password === '' || this.state.username === ''){
        this.setState({
          errorMessage: 'Please enter username and password'
        }) // end of method setState
      }
      else{
        this.setState({
          errorMessage: ''
        }) // end of method setState
        this.validateUser();
      } // end of checking empty
    } // end of onSubmit method

    render() {
      return(
        <div>
          {this.state.isAuthenticated ? // redirect to HKTCS view or ET view if authenticated
          <Redirect to={{pathname: `/main`}}/>:(
            <div className="login container">
              <img src={logo} alt="Logo"/>
              <div className="title">Order Monitoring System</div>
              
              <form onSubmit={this.onSubmit}>
                  <div className="form-input">
                      <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.onChange}/>
                  </div>
                  <div className="form-input">
                      <input type="password" name="password" placeholder="Password" onChange={this.onChange}/>
                  </div>
                  <button type="submit" name="submit" value="LOGIN" className="btn-login">LOGIN</button>
              </form>
              {
                this.state.errorMessage !== '' ? // prompt error message if it's not empty
                (
                  <div className="errorMessage">
                    {this.state.errorMessage}
                  </div>
                ):(<></>)
              }
            </div>
          )} 
        </div>
      )
    }
}
 

export default LoginPage;