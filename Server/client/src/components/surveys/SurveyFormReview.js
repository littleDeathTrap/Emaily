//SurveyReview shows users their form inputs for review

import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"; // Используем useHistory для v5
import formFields from "./formFields";
import { submitSurvey } from "../../actions";

const SurveyFormReview = ({ onCancel, values }) => {
  const dispatch = useDispatch();
  const history = useHistory(); // Используем useHistory()

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {formFields.map(({ name, label }) => (
        <div key={name}>
          <label>{label}</label>
          <div>{values[name]}</div>
        </div>
      ))}

      <button className="grey darken-3 btn-flat white-text" onClick={onCancel}>
        Back
      </button>
      <button
        className="grey btn-flat right white-text"
        onClick={() => dispatch(submitSurvey(values, history))}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

export default SurveyFormReview;

/*import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { formValues } from "redux-form";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className="grey darken-3 btn-flat white-text" onClick={onCancel}>
        Back
      </button>
      onClick={() => submitSurvey(formValues, history)}
      <button className="grey btn-flat right white-text">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return { formValues: state.form.surveyForm.values };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
*/
