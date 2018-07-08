/**
 * Email Detail
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Avatar from '@material-ui/core/Avatar';
import classnames from 'classnames';

// redux actions
import { hideLoadingIndicator, onNavigateToEmailListing, onDeleteEmail } from 'Actions';

//Intl Message
import IntlMessages from 'Util/IntlMessages';

// rct section loader
import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';

class EmailDetail extends Component {

	componentWillMount() {
		this.getEmailDetails();
	}

	/**
	 * Get Email Details By Id
	 */
	getEmailDetails() {
		let self = this;
		setTimeout(() => {
			this.props.hideLoadingIndicator();
		}, 1500);
	}

	/**
	 * On Back Press Naviagte To Email Listing Page
	 */
	onBackPress() {
		const { history } = this.props;
		this.props.onNavigateToEmailListing();
		history.goBack();
	}

	/**
	 * On Delete Email
	 */
	onDeleteEmail() {
		const { history } = this.props;
		this.props.onDeleteEmail();
		history.goBack();
	}

	/**
	 * Function to return task label name
	 */
	getTaskLabelNames = (taskLabels) => {
		let elements = [];
		const { labels } = this.props;
		for (const taskLabel of taskLabels) {
			for (const label of labels) {
				if (label.value === taskLabel) {
					let ele = <span key={label.value} className={classnames("badge badge-pill pull-right", { 'badge-success': label.value === 1, 'badge-primary': label.value === 2, 'badge-info': label.value === 3, 'badge-danger': label.value === 4 })}><IntlMessages id={label.name} /></span>;
					elements.push(ele);
				}
			}
		}
		return elements;
	}

	render() {
		const { currentEmail, loading } = this.props;
		if (loading) {
			return (
				<RctSectionLoader />
			)
		}
		return (
			<div className="email-detail-page-warrper">
				<div className="top-head border-bottom-0 d-flex justify-content-between">
					<IconButton onClick={() => this.onBackPress()}>
						<ArrowBackIcon />
					</IconButton>
					<div className="mail-action">
						<IconButton>
							<i className="zmdi zmdi-mail-reply"></i>
						</IconButton>
						<IconButton>
							<i className="zmdi zmdi-print"></i>
						</IconButton>
						<IconButton onClick={() => this.onDeleteEmail()}>
							<i className="zmdi zmdi-delete"></i>
						</IconButton>
					</div>
				</div>
				{currentEmail !== null &&
					<div>
						<div className="top-head clearfix">
							<h4 className="mb-0 text-capitalize pull-left">
								<IconButton>
									<i className="zmdi zmdi-star-outline mr-20"></i>
								</IconButton>
								Fwd: {currentEmail.email_subject}</h4>
							{this.getTaskLabelNames(currentEmail.email_labels)}
						</div>
						<div className="user-detail d-flex justify-content-between">
							<div className="media">
								{currentEmail.from.avatar !== '' ?
									<img src={currentEmail.from.avatar} alt="user profile" className="rounded-circle mr-20" width="50" height="50" />
									: <Avatar className="mr-20">{currentEmail.from.name.charAt(0)}</Avatar>
								}
								<div className="media-body">
									<h5>{currentEmail.from.name}</h5>
									<p className="mb-0">From <span className="text-muted">&lt;{currentEmail.from.email}&gt;</span></p>
									<p className="mb-0">To: <span className="text-muted">Me</span></p>
								</div>
							</div>
							<span className="align-items-center d-flex small text-muted">{currentEmail.received_time}</span>
						</div>
						<div className="mail-detail">
							<div className="mb-30">
								<p>{currentEmail.email_content}</p>
							</div>
							<p className="mb-0">Regards,</p>
							<p>Mike Mayers</p>
						</div>
						<div className="attachments p-20 border-bottom">
							<div className="d-flex justify-content-between">
								<h4>3 Attachments</h4>
								<div className="mail-action">
									<IconButton>
										<i className="zmdi zmdi-file"></i>
									</IconButton>
									<IconButton>
										<i className="zmdi zmdi-cloud-download"></i>
									</IconButton>
								</div>
							</div>
							<ul className="list-inline">
								<li className="list-inline-item border-bottom-0">
									<img src={require('Assets/img/about-card-1.png')} alt="attachments" className="img-fluid mb-10" width="180" height="140" />
									<p className="mb-5">Attachment 1.jpg</p>
									<div className="list-action">
										<a href="javascript:void(0)"><i className="zmdi zmdi-download zmdi-hc-lg mr-10"></i></a>
										<a href="javascript:void(0)"><i className="zmdi zmdi-zoom-in zmdi-hc-lg"></i></a>
									</div>
								</li>
								<li className="list-inline-item border-bottom-0">
									<img src={require('Assets/img/about-card-2.png')} alt="attachments" className="img-fluid mb-10" width="180" height="140" />
									<p className="mb-5">Attachment 2.jpg</p>
									<div className="list-action">
										<a href="javascript:void(0)"><i className="zmdi zmdi-download zmdi-hc-lg mr-10"></i></a>
										<a href="javascript:void(0)"><i className="zmdi zmdi-zoom-in zmdi-hc-lg"></i></a>
									</div>
								</li>
								<li className="list-inline-item border-bottom-0">
									<img src={require('Assets/img/about-card-3.png')} alt="attachments" className="img-fluid mb-10" width="180" height="140" />
									<p className="mb-5">Attachment 3.jpg</p>
									<div className="list-action">
										<a href="javascript:void(0)"><i className="zmdi zmdi-download zmdi-hc-lg mr-10"></i></a>
										<a href="javascript:void(0)"><i className="zmdi zmdi-zoom-in zmdi-hc-lg"></i></a>
									</div>
								</li>
							</ul>
						</div>
						<div className="media p-20">
							<img src={require('Assets/img/user-5.jpg')} alt="user profile" className="img-fluid rounded-circle mr-15" width="50" height="50" />
							<div className="media-body card p-20">
								<span>Click here to <a href="javascript:void(0)">Reply</a>,<a href="javascript:void(0)">Reply to all</a>,or <a href="javascript:void(0)">Forward</a></span>
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}

// map state to props
const mapStateToProps = ({ emailApp }) => {
	return emailApp;
};

export default withRouter(connect(mapStateToProps, {
	hideLoadingIndicator,
	onNavigateToEmailListing,
	onDeleteEmail
})(EmailDetail));
