import React from 'react';
import { connect } from 'react-redux';
import {signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
	
	componentDidMount () {
		window.gapi.load('client:auth2', () =>{
			window.gapi.client.init({
				clientId: "915751515360-lna23o4cj1dvdohuugbece1plta46smv.apps.googleusercontent.com",
				scope: 'email'
			}).then( () => {
				this.auth=window.gapi.auth2.getAuthInstance();
				this.onAuthChange(this.auth.isSignedIn.get());
				//listen basically listens to change on function provided by gapi namely
				//isSignedIn
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	};

	// onClickForSignIn = () =>{
	// 	this.auth.signIn();
	// }

	onAuthChange = (isSignedIn) => {
		if(isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};
	
	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if(this.props.isSignedIn ===  null)
		{
			return(
				<button className="ui blue google button">
					<i className="google icon"></i>
					Sign In
				</button>
			);
		}
		else if(this.props.isSignedIn === true)
		{
			return(
				<button onClick={this.onSignOutClick} className="ui red google button">
					<i className="google icon"></i>
					Sign Out
				</button>
			);
		}
		else
		{
			return(
				<button onClick={this.onSignInClick} className="ui blue google button">
					<i className="google icon"></i>
					Sign In
				</button>
			);
		}
	}
	
	render() {
		
		return(
			<div className="item">{this.renderAuthButton()}</div>
		);
	}
}
// map state to props magically takes out state from redux store and uses it's data at will.
//the name of the state props is decided by the combine reducers when you combine
//like combineReducers({ auth: authReducers, xyz: anotherReducer}); now the state becomes like state.auth so the second reducer state can be accessed by using state.xyz.so on.....
const mapStateToProps = (state) => {
	//console.log(state);
	return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps,{signIn:signIn,signOut:signOut}) (GoogleAuth);