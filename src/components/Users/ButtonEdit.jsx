import React from 'react';

const ButtonEdit = ({openEditWindow}) => {
    return (
        <a class="button is-primary" onClick={() => {openEditWindow()}}> 
            <span>Edit</span>
            <span class="icon is-small">
                <i class="fas fa-pen-square"></i>
            </span>
        </a> 
    );
}

export default ButtonEdit;