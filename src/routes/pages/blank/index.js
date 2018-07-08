/**
 * Blank Page
 */
import React, { Component } from 'react';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

export default class Blank extends Component {
	render() {
		return (
			<div className="blank-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.blank" />} match={this.props.match} />
			</div>
		);
	}
}
