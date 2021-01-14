import React from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm.js'

class StreamEdit extends React.Component {

	componentDidMount() {
		//here we fetch the id from the router so don't worry.
		this.props.fetchStream(this.props.match.params.id);
	};

	onSubmit = (formValues) => {
		// console.log("onSubmit called")
		this.props.editStream(this.props.match.params.id,formValues);
	}


	render() {
		if(!this.props.stream)
		{
			return <div>loading...</div>
		}

		return (
			<div>
				<h3>Edit the Stream</h3>
				{/*redux form wraps the streamForm form and initialValues is a keyword
				for redux form that helps to initialize it.*/}
				<StreamForm onSubmit={this.onSubmit} initialValues={{title:this.props.stream.title,description:this.props.stream.description}}>
				</StreamForm>
			</div>
		);
	}
}

const mapStateToProps = (state,ownProps) =>{
	return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream:fetchStream,editStream:editStream})(StreamEdit);