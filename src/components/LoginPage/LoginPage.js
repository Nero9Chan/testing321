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
        console.log(res.data[0].username);
        if(res.data.length>0){
          userObject = res.data[0];
          userType = res.data[0].user_type;
          this.setState({
            isAuthenticated: true,
          })
        }else{
          return false;
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
        if(!this.validateUser()){
          this.setState({
            errorMessage: 'Incorrect username or password'
          }) 
        } // end of validating username and password from HKTCS DB
      } // end of checking empty
    } // end of onSubmit method

    render() {
      return(
        <div>
          {this.state.isAuthenticated ? // redirect to HKTCS view or ET view if authenticated
          <Redirect to={{pathname: `/main`}}/>:(
            <div className="login container">
              <img src={logo} alt="Logo"/>
              {
                this.state.errorMessage !== '' ? // prompt error message if it's not empty
                (
                  <div>
                    {this.state.errorMessage}
                  </div>
                ):(<></>)
              }
              <form onSubmit={this.onSubmit}>
                  <div className="form-input">
                      <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.onChange}/>
                  </div>
                  <div className="form-input">
                      <input type="password" name="password" placeholder="Password" onChange={this.onChange}/>
                  </div>
                  <button type="submit" name="submit" value="LOGIN" className="btn-login">LOGIN</button>
              </form>
            </div>
          )} 
        </div>
      )
    }
}
 

export default LoginPage;