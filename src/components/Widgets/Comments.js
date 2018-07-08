/**
 * Comments Component
 */
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Badge } from 'reactstrap';

// api
import api from 'Api';

// intl messages
import IntlMessages from 'Util/IntlMessages';

export default class Comments extends Component {

	state = {
		comments: null
	}

	componentDidMount() {
		this.getComments();
	}

	// get comments
	getComments() {
		api.get('comments.js')
			.then((response) => {
				this.setState({ comments: response.data });
			})
			.catch(error => {
				// error hanlding
			})
	}

	render() {
		const { comments } = this.state;
		return (
			<Scrollbars className="rct-scroll" autoHeight autoHeightMin={100} autoHeightMax={600} autoHide>
				<ul className="list-group">
					{comments && comments.map((comment) => (
						<li className="list-group-item" key={comment.id}>
							<div className="media">
								<div className="media-left mr-20">
									<img src={comment.userAvatar} alt="user profile" className="rounded-circle" width="50" height="50" />
								</div>
								<div className="media-body">
									<div className="d-flex justify-content-between mb-10">
										<span>{comment.userName}</span>
										<span className="fs-12">{comment.date}</span>
									</div>
									<p>{comment.comment}</p>
									<div className="badge-action">
										<ul className="list-inline">
											<li className="list-inline-item">
												<Badge color="info"><IntlMessages id="widgets.pending" /></Badge>
											</li>
											<li className="list-inline-item hover-action">
												<Badge color="success"><IntlMessages id="widgets.approve" /></Badge>
											</li>
											<li className="list-inline-item hover-action">
												<Badge color="danger"><IntlMessages id="widgets.reject" /></Badge>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</Scrollbars>
		);
	}
}
