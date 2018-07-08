/**
* Email App Sidebar
* Used To Filter Mail List
*/
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';

// actions
import { filterEmails } from 'Actions';

//Intl Message
import IntlMessages from 'Util/IntlMessages';

class EmailAppSidebar extends Component {

	/**
	 * Navigate To Folder Emails
	 */
	navigateTo(key) {
		const { match, history } = this.props;
		history.push(`${match.url}/folder/${key}`);
	}

	/**
	 * Filter Emails
	 */
	filterEmails(label) {
		this.props.filterEmails(label);
	}

	render() {
		const { folders, selectedFolder, labels } = this.props;
		return (
			<Scrollbars className="rct-scroll" autoHide style={{ height: "calc(100vh - 200px)" }}>
				<div className="sidebar-filters-wrap">
					<div className="filters">
						<List className="py-0">
							{folders.map((folder, key) => (
								<ListItem
									button
									key={key}
									onClick={() => this.navigateTo(folder.handle)}
									className={classnames({ 'item-active': selectedFolder === folder.id })}>
									<i className={`mr-20 zmdi zmdi-${folder.icon}`} /><span className="filter-title"><IntlMessages id={folder.title} /></span>
								</ListItem>
							))}
						</List>
					</div>
					<h4 className="sidebar-title">Labels</h4>
					<div className="filters">
						<List className="list-unstyled">
							{labels.map((label, key) => (
								<ListItem button key={key} onClick={() => this.filterEmails(label)}>
									<span className={`badge-${label.badgeClass} ladgend`}></span> <span className="filter-title"><IntlMessages id={label.name} /></span>
								</ListItem>
							))}
						</List>
					</div>
				</div>
			</Scrollbars>
		);
	}
}

// map state to props
const mapStateToProps = ({ emailApp }) => {
	return emailApp;
};

export default withRouter(connect(mapStateToProps, {
	filterEmails
})(EmailAppSidebar));
