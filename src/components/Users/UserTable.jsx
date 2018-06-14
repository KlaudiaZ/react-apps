import React from 'react';
import ButtonAddUser from './ButtonAddUser';
import ButtonEdit from './ButtonEdit';

const UserTable = ({users, userTypes, onAddUserClick, onEditClick}) => {
    return (
        <div>
        <h2 class="subtitle">Users List Screen</h2>
        <ButtonAddUser openAddWindow={onAddUserClick} />
        {/* Table with list of users */}
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Last name</th>
              <th>User type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {users.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  
                    {userTypes.map((type, index) => {
                      if (type.id === user.typeId) {
                        return (<td key={index}>{type.name}</td>);
                      }
                    })}
                  
                  <td>
                      <ButtonEdit openEditWindow={onEditClick} />
                  </td>
                </tr>
              );
            })}

          </tbody>
        </table>
      </div>
    );
}

export default UserTable;