import React from 'react';

const FormSelect = (props) => {
    return (
        <select> {/* For edit we have here set value of current user as default */}
            <option>Customer</option>
            <option selected="selected">Moderator</option>
            <option>Admin</option>
        </select>
    );
}

export default FormSelect;