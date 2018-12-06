import React, {Component} from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import {AvForm, AvFeedback, AvGroup, AvInput, AvField} from 'availity-reactstrap-validation';

class OpeningForm extends Component {

	handleSubmit = (e, values) => {

	};

	render() {
		return (
			<AvForm onValidSubmit={this.handleSubmit}>
				<AvField name="gameRow"
				         label="Enter Rows"
				         type="number"
				         min="1"
				         max="8"
				         required
				         errorMessage="Please enter a number between 1 and 8"/>
				<AvField name="gameCol"
				         label="Enter Columns"
				         type="number"
				         min="1"
				         max="12"
				         required
				         errorMessage="Please enter a number between 1 and 12"/>

				<FormGroup>
					<Button>Submit</Button>
				</FormGroup>
			</AvForm>
		)
	}
}

export default OpeningForm;