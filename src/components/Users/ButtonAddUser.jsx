import React from 'react';

const ButtonAddUser = ({openAddWindow}) => {
    return (
        <div class="add-user" onClick={() => {openAddWindow()}}>
          <a class="button is-success"> {/* After click we show Add user form */}
            <span>Add user</span>
            <span class="icon is-small">
              <i class="fas fa-plus"></i>
            </span>
          </a>
        </div>
    );
}

export default ButtonAddUser;