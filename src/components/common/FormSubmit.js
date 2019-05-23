import React, { PropTypes } from "react";
import { FormGroup, HelpBlock, Button } from "react-bootstrap";

// Form submit component
export default class FormSubmit extends React.Component {
  // render
  render() {
    const {error, invalid, submitting, buttonSaveLoading, buttonSave} = this.props;
    return (
      <div>
        {error &&
        <FormGroup validationState="error">
          <HelpBlock>{error}</HelpBlock>
        </FormGroup>}

        <FormGroup className="submit">
          <Button type="submit" bsStyle="primary" disabled={invalid || submitting}>
            {submitting ?
              (buttonSaveLoading ? buttonSaveLoading : 'Saving...') :
              (buttonSave ? buttonSave : 'Save')}
          </Button>
        </FormGroup>
      </div>
    );
  }
}

// prop checks
FormSubmit.propTypes = {
  error: PropTypes.string, 
  invalid: PropTypes.bool, 
  submitting: PropTypes.bool, 
  buttonSaveLoading: PropTypes.string,
  buttonSave: PropTypes.string,   
};
