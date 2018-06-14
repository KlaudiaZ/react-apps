import React from 'react';

const ConfirmDelete = () => {
    return (
        <div>
      <hr/>
      <h2 class="subtitle">Delete Confirmation</h2>
        <section class="hero is-medium is-light is-bold">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Please confirm removing the user John Wayne
              </h1>
              <h2 class="subtitle">
                <div class="field s-grouped">
                  <a class="button is-danger">
                    <span class="icon is-small">
                      <i class="fas fa-check"></i>
                    </span>
                    <span>Confirm</span> {/* After click delete call should run and big loader should be shown and user should go back to list */}
                  </a>
                  &nbsp;
                  <a class="button">
                    <span>Cancel</span> {/* After click we go back to user edit screen */}
                  </a>
                </div>
              </h2>
            </div>
          </div>
        </section>
      </div>  
    );
}

export default ConfirmDelete;