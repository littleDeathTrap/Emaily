//SurveyForm shows a form for a user to add input

import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";
import * as Yup from "yup";

const SurveyForm = ({ onSurveySubmit }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must provide a title"),
    subject: Yup.string().required("You must provide a subject"),
    body: Yup.string().required("You must provide an email body"),
    recipients: Yup.string()
      .required("You must provide a recipient list")
      .test("validateEmails", "Invalid email format", (value) =>
        validateEmails(value)
      ),
  });

  return (
    <Formik
      initialValues={{ title: "", subject: "", body: "", recipients: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => onSurveySubmit(values)} // Передаем данные в SurveyNew
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          {formFields.map(({ label, name }) => (
            <SurveyField key={name} label={label} name={name} />
          ))}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SurveyForm;

/*
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right while-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
*/
