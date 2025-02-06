import React, { useState } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

const SurveyNew = () => {
  const [formValues, setFormValues] = useState(null);

  return (
    <div>
      {!formValues ? (
        <SurveyForm onSurveySubmit={(values) => setFormValues(values)} />
      ) : (
        <SurveyFormReview
          onCancel={() => setFormValues(null)}
          values={formValues}
        />
      )}
    </div>
  );
};

export default SurveyNew;

/*import React, { useState } from "react";
import { Formik } from "formik";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

const SurveyNew = () => {
  const [showFormReview, setShowFormReview] = useState(false);
  const [formValues, setFormValues] = useState({});

  return (
    <Formik
      initialValues={{
        title: "",
        subject: "",
        body: "",
        recipients: "",
      }}
      onSubmit={(values) => {
        setFormValues(values);
        setShowFormReview(true);
      }}
    >
      {() =>
        showFormReview ? (
          <SurveyFormReview
            onCancel={() => setShowFormReview(false)}
            values={formValues}
          />
        ) : (
          <SurveyForm onSurveySubmit={(x) => console.log(x)} />
        )
      }
    </Formik>
  );
};

export default SurveyNew;

*/
/*//SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
*/
