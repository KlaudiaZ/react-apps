import React from 'react';

const ButtonConfirm = (props) => {
    return (
        <a class="button is-success">
            <span class="icon is-small">
                <i class="fas fa-check"></i>
            </span>
            <span>{props.type}</span> {/* Here should be Add text for adding user and Save for edit */}
        </a>
    );
}

export default ButtonConfirm;