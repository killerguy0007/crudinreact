import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchStreams} from '../../actions';

class StreamList extends React.Component {

	componentDidMount() {
		this.props.fetchStreams();
	}

	renderDeleteAndEditButtons = (stream) => {
		if(stream.userId===this.props.currentUserId)
		{
			return (
				<div className="right floated content">
					<Link to={`/streams/edit/${stream.id}`} className="ui button primary">
						EDIT
					</Link>
					<Link to={`/streams/delete/${stream.id}`} className="ui button negative">
						DELETE
					</Link>
				</div>
			);
		}
	};

	renderList = () => {
		return this.props.streams.map((stream)=>{
			return(
				<div className="item" key={stream.id}>
				{this.renderDeleteAndEditButtons(stream)}
					<i className="large middle aligned icon camera" />
					<div onClick={this.onClick} className="content">
						<Link to={`streams/show/${stream.id}`} >
							{stream.title}
						</Link>
						<div className="description">
							{stream.description}
						</div>
					</div>
				</div>
			);
		});
	}

	renderCreateButton = () => {
		if(this.props.isSignedIn)
		{
			return (
				<div>
					<Link to="/streams/new" className="ui button yellow right floated">
						CREATE STREAM
					</Link>
				</div>
				);
		}
		else
		{
			return;
		}
	};

	render(){
		return (
			<div>
				<h2>STREAMS</h2>
				<div className="ui celled list">
					{this.renderList()}
				</div>
				{this.renderCreateButton()}
			</div>
		);
	};
}

//the streams are stored as not a list but a huge object so first convert to array. 
//object.values(map) is a function that takes a map/object as input and return 
//an array discarding the key.

// use mapStateToProps only when you want to pull some info out of the state.
const mapStateToProps = (state) =>{
	return {
		streams:Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn
	};
}

export default connect(mapStateToProps,{fetchStreams:fetchStreams})(StreamList);