import React from 'react';

const ButtonDelete = (props) => {
    return (
        <a class="button is-danger">{/* Delete doesnt exists for add form */}
            <span>Delete</span> {/* After delete click we go to Delete Confirmation*/}
            <span class="icon is-small">
                <i class="fas fa-times"></i>
            </span>
        </a>
    );
}

export default ButtonDelete;