import React from 'react';
import Modal from '../Modal.js';
import history from '../../history';
import {fetchStream,deleteStream} from '../../actions';
import {connect} from 'react-redux';


class StreamDelete extends React.Component {

	componentDidMount() {
		//we are fetching the stream here because if we directly navigate to this page
		//then redux does not have the stream so we get it from fetching
		this.props.fetchStream(this.props.match.params.id);
	}

	onDeleteClick =() => {
		this.props.deleteStream(this.props.match.params.id);
	};

	getActions = () => { 
		return (
			<div>
				<button onClick={this.onDeleteClick} className="ui button negative">Delete</button>
				<button onClick={this.onClick} className="ui button primary">Cancel</button>
			</div>
		);
	};

	onClick = () => {
		history.push('/');
	};

	renderContent =() =>{
		if(!this.props.stream) {
			return 'are you sure you want to delete stream ';
		}

		return `are you sure you want to delete stream named: ${this.props.stream.title}`;
	}

	render (){
		return (
			<div>
				<Modal 
					title="Delete Stream"
					content={this.renderContent()}
					actions={this.getActions}
					onClick={this.onClick}
				></Modal>
			</div>
		);	
	}
};

const mapStateToProps =(state,ownProps) => {
	return {stream:state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{fetchStream:fetchStream,deleteStream:deleteStream})(StreamDelete);