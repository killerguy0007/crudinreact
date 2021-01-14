import React from 'react';
import {Field,reduxForm} from 'redux-form';

class StreamForm extends React.Component {

	renderError = (meta) => {
		if(meta.touched && meta.error)
		{
			return (
				<div className="ui error message">
					<div className="header">{meta.error}</div>
				</div>
			);
		}
	}
	renderInput = (formProps) => {
		
		const className=`field ${formProps.meta.error && formProps.meta.touched ? 'error':''}`;
		//this is the correct one and a shorter syntax;
		return (
			<div className={className} >
				<label>{formProps.label}</label>
				<input {...formProps.input}>
				</input>
				<div>{this.renderError(formProps.meta)}</div>
			</div>
		);
	}
	
	//automatically calls prevent default.
	//formValues.title gives the title and formValues.
	//to be used later after getting the value from the form
	
	onSubmit = (formValues)=> {
		this.props.onSubmit(formValues);
	}
	
	render() {
		return (
			<div className="ui segment">
				<form 
					onSubmit={this.props.handleSubmit(this.onSubmit)} 
					className="ui form error"
				>
					<Field 
						name="title" 
						component={this.renderInput} 
						label="Enter Title"
					/>
					<Field 
						name="description" 
						component={this.renderInput} 
						label="Enter Description"
					/>
					<button className="ui button primary">SUBMIT</button>
				</form>	
			</div>
		);
	}
};

// to validate form values.
const validate =(formValue) => {
	
	const errors ={};
	
	if(!formValue.title)
	{
		errors.title="you must enter a title";
	}
	
	if(!formValue.description)
	{
		errors.description="you must enter a description";
	}
	
	return errors;
};


// const mapStateToProps = (state) => {
// 	return {title:state.titleReducer.title};
// }

//streamCreate is the name of the object inside the form for acessing state;
// like say i have to access the field with name title then: 
// form.streamCreate.value.title is used
//export default connect(mapStateToProps,{setTitle: setTitle}) (StreamCreate);
export default reduxForm({
	form: 'streamForm',
	validate:validate
})(StreamForm);
