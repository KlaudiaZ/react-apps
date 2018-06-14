import React from 'react';

const FormInput = (props) => {
    return (
        <div class="field">
            <label class="label">{props.title}</label>
            <div class="control">
            <input class="input" type="text" placeholder={props.placeholder} /> {/* For edit we have here set value of current user as default */}
            </div>
            <p class="help is-danger">Field is required</p>
        </div>
    );
}

export default FormInput;