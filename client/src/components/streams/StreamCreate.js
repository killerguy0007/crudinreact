// import React from 'react';
// import {Field,reduxForm} from 'redux-form';
// import {connect} from 'react-redux';
// //import {setTitle} from '../../actions';
// import {createStream} from '../../actions';

// class StreamCreate extends React.Component {
	
// 	// onChanging =(event) =>{
// 	// 	//this.props.setTitle(event.target.value);
// 	// }
	
// 	renderError = (meta) => {
// 		if(meta.touched && meta.error)
// 		{
// 			return (
// 				<div className="ui error message">
// 					<div className="header">{meta.error}</div>
// 				</div>
// 			);
// 		}
// 	} 
// 	renderInput = (formProps) => {
// 		// return(
// 		// 	<input 
// 		// 		type="text" 
// 		// 		onChange={formProps.input.onChange}
// 		// 		value={formProps.input.value}
// 		// 		>
// 		// 	</input>
// 		// );
		
// 		const className=`field ${formProps.meta.error && formProps.meta.touched ? 'error':''}`;
// 		//this is the correct one and a shorter syntax;
// 		return (
// 			<div className={className} >
// 				<label>{formProps.label}</label>
// 				<input {...formProps.input}>
// 				</input>
// 				<div>{this.renderError(formProps.meta)}</div>
// 			</div>
// 		);
// 	}
	
// 	//automatically calls prevent default.
// 	//formValues.title gives the title and formValues.
// 	//to be used later after getting the value from the form
	
// 	onSubmit = (formValues)=> {
// 		this.props.createStream(formValues);
// 	}
	
// 	render() {
// 		// return (
// 		// 	<div className="ui segment">
// 		// 		<form className="ui form">
// 		// 			<div className="field">
// 		// 				<label htmlFor="title">Title</label>
// 		// 				<input 
// 		// 					id="title"
// 		// 					type="text"
// 		// 					/*
// 		// 					value={this.props.title}
// 		// 					onChange={this.onChanging}
// 		// 					*/
							
// 		// 				></input>
// 		// 			</div>
// 		// 		</form>
// 		// 	</div>
// 		// );
		
// 		return (
// 			<div className="ui segment">
// 				<form 
// 					onSubmit={this.props.handleSubmit(this.onSubmit)} 
// 					className="ui form error"
// 				>
// 					<Field 
// 						name="title" 
// 						component={this.renderInput} 
// 						label="Enter Title"
// 					/>
// 					<Field 
// 						name="description" 
// 						component={this.renderInput} 
// 						label="Enter Description"
// 					/>
// 					<button className="ui button primary">SUBMIT</button>
// 				</form>	
// 			</div>
// 		);
// 	}
// };

// // to validate form values.
// const validate =(formValue) => {
	
// 	const errors ={};
	
// 	if(!formValue.title)
// 	{
// 		errors.title="you must enter a title";
// 	}
	
// 	if(!formValue.description)
// 	{
// 		errors.description="you must enter a description";
// 	}
	
// 	return errors;
// };


// // const mapStateToProps = (state) => {
// // 	return {title:state.titleReducer.title};
// // }

// //streamCreate is the name of the object inside the form for acessing state;
// // like say i have to access the field with name title then: 
// // form.streamCreate.value.title is used
// //export default connect(mapStateToProps,{setTitle: setTitle}) (StreamCreate);
// const formWrapped = reduxForm({
// 	form: 'streamCreate',
// 	validate:validate
// })(StreamCreate);

// export default connect(null,{createStream})(formWrapped);


import React from 'react';
import {connect } from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm.js';


class StreamCreate extends React.Component {
	
	onSubmit = (formValues) => {
		this.props.createStream(formValues);
	}

	render () {
		return(
			<div>
				<h3>Create a Stream</h3>
				<StreamForm onSubmit={this.onSubmit}>
				</StreamForm>
			</div>
		);
	}
}

export default connect(null,{createStream:createStream})(StreamCreate);



