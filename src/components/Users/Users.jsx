import React, {Component} from 'react';
import './Users.css';
import axios from 'axios';
import UserTable from './UserTable';
import UserAddOrEdit from './UserAddOrEdit';
import ConfirmDelete from './ConfirmDelete';

const SERVER_URL = "http://localhost:3000/";

class Users extends Component {
  state = {
    show: "users", //users, add, edit, delete
    users: [],
    userTypes: []
  }


  componentDidMount () {
    axios.get(SERVER_URL + "users")
      .then((response) => {
        return response.data;
      })
      .then((users) => {
        this.setState((state) => {
          return {
            users: users
          }
        });
      });
      axios.get(SERVER_URL + "user_types")
      .then((response) => {
        return response.data;
      })
      .then((userTypes) => {
        this.setState((state) => {
          return {
            userTypes: userTypes
          }
        });
      })
      .then(() => {
        console.log(this.state.users, this.state.userTypes)
      })
  }

  openAddWindow = () => {
    this.setState((state) => {
      return {
        show: "add"
      }
    });
  }

  openEditWindow = () => {
    this.setState((state) => {
      return {
        show: "edit"
      }
    });
  }

  openUserTable = () => {
    this.setState((state) => {
      return {
        show: "users"
      }
    });
  }

  render () {
    return (<section className="section Users project">
    <div className="container">
      <h1 className="title">Users React App</h1>
      
      {
        this.state.show === "users" && 
          <UserTable 
            users={this.state.users} 
            userTypes={this.state.userTypes} 
            onAddUserClick={this.openAddWindow}
            onEditClick={this.openEditWindow} />
      }
  
      {/* Screen for adding or editing user. Difference is that for edit fields should have actual values */}
      
      {
        this.state.show === "add" && <UserAddOrEdit add={true} />
      }
  
      {
        this.state.show === "edit" && <UserAddOrEdit add={false} />
      }

      {/* Delete Confirmation screen*/}

  
    </div>
    </section>
    )
  }
}

export default Users;