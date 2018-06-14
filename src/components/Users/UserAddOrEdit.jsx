import React, {Component} from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import ButtonConfirm from './ButtonConfirm';
import ButtonDelete from './ButtonDelete';
import ButtonCancel from './ButtonCancel';
import ButtonLoading from './ButtonLoading';

class UserAddOrEdit extends Component {
  state = {
    isLoading: false
  }

  render () {
    return (
        <div>
        <hr/>
        <h2 class="subtitle">Users Add/Edit Screen</h2>
          <form>
            
            <FormInput title="Name" placeholder="User Name" />
            <FormInput title="Last Name" placeholder="User Lastname" />
            
  
            <div class="field">
              <label class="label">User Type</label>
              <div class="control">
                <div class="select">
                  <FormSelect />
                </div>
              </div>
            </div>
            <div class="field s-grouped">
              {this.state.isLoading ? <ButtonLoading /> : <ButtonConfirm type={this.props.add ? "Add" : "Save"} />}
              &nbsp;
              {(!this.props.add && !this.state.isLoading) && <ButtonDelete />}
              &nbsp;
              {!this.state.isLoading && <ButtonCancel />}
              &nbsp;
            </div>
          </form>
      </div>
    );
  }
}

export default UserAddOrEdit;