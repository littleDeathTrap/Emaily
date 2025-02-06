//SurveyField contains logic to render a single
//label and text input

import React from "react";
import { Field, ErrorMessage } from "formik";

const SurveyField = ({ label, name }) => {
  return (
    <div>
      <label>{label}</label>
      <Field name={name} type="text" className="input-field" />
      <ErrorMessage name={name} component="div" className="red-text" />
    </div>
  );
};

export default SurveyField;
/*
import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  console.log(meta);
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
*/
