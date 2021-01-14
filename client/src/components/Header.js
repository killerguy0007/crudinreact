import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth.js';
const Header = () => {
		return (
			<div className="ui pointing menu">
				<Link to="/" className="item">STREAMER</Link>
				<div className="right menu">
					<Link to="/" className="item">ALL STREAMS</Link> 
					<GoogleAuth></GoogleAuth>
				</div>
			</div>
		);
}

export default Header;

// client id: 915751515360-sf8o6irkocgt3siod274ffjtbjr1itqg.apps.googleusercontent.com

