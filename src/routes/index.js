/**
 * App Routes
 */
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// app default layout
import RctAppLayout from 'Components/RctAppLayout';

// routes
import Widgets from './widgets';
import Pages from './pages';
import AdvanceUIComponents from './advance-ui-components';
import CalendarComponents from './calendar';
import ChartsComponents from './charts';
import FormElements from './forms';
import Users from './users';
import Components from './components';
import Tables from './tables';
import Icons from './icons';
import Maps from './maps';
import DragAndDrop from './drag-drop';
import Editor from './editor';
import Ecommerce from './ecommerce';
import Dashboard from './dashboard';

// async component
import {
	AsyncAboutUsComponent,
	AsyncChatComponent,
	AsyncMailComponent,
	AsyncTodoComponent,
} from 'Components/AsyncComponent/AsyncComponent';

class MainApp extends Component {
	render() {
		const { match } = this.props;
		return (
			<RctAppLayout>
				<Route path={`${match.url}/dashboard`} component={Dashboard} />
				<Route path={`${match.url}/widgets`} component={Widgets} />
				<Route path={`${match.url}/ecommerce`} component={Ecommerce} />
				<Route path={`${match.url}/icons`} component={Icons} />
				<Route path={`${match.url}/about-us`} component={AsyncAboutUsComponent} />
				<Route path={`${match.url}/pages`} component={Pages} />
				<Route path={`${match.url}/chat`} component={AsyncChatComponent} />
				<Route path={`${match.url}/mail`} component={AsyncMailComponent} />
				<Route path={`${match.url}/todo`} component={AsyncTodoComponent} />
				<Route path={`${match.url}/charts`} component={ChartsComponents} />
				<Route path={`${match.url}/tables`} component={Tables} />
				<Route path={`${match.url}/maps`} component={Maps} />
				<Route path={`${match.url}/users`} component={Users} />
				<Route path={`${match.url}/ui-components`} component={Components} />
				<Route path={`${match.url}/advanced-component`} component={AdvanceUIComponents} />
				<Route path={`${match.url}/drag-andDrop`} component={DragAndDrop} />
				<Route path={`${match.url}/forms`} component={FormElements} />
				<Route path={`${match.url}/editor`} component={Editor} />
				<Route path={`${match.url}/calendar`} component={CalendarComponents} />
			</RctAppLayout>
		);
	}
}

export default withRouter(connect(null)(MainApp));
