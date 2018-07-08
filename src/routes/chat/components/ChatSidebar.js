/**
 * Chat Sidebar
 */
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';

// components
import UserList from './UserList';

class ChatSidebar extends Component {
	render() {
		return (
			<div className="chat-sidebar">
				<div className="user-mail d-flex justify-content-between">
					<div className="media">
						<img src={require('Assets/img/user-5.jpg')} alt="user prof" className="img-fluid rounded-circle mr-10" width="40" height="40" />
						<div className="media-body pt-10">
							<h4 className="mb-0">Vivek Prajapati </h4>
						</div>
					</div>
					<IconButton className="text-white">
						<i className="zmdi zmdi-apps"></i>
					</IconButton>
				</div>
				<UserList />
			</div>
		);
	}
}

export default ChatSidebar;
