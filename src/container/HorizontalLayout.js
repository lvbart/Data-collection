/**
 * Horizontal App
 */
import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

// routes
import Widgets from 'Routes/widgets';
import Pages from 'Routes/pages';
import AdvanceUIComponents from 'Routes/advance-ui-components';
import CalendarComponents from 'Routes/calendar';
import ChartsComponents from 'Routes/charts';
import FormElements from 'Routes/forms';
import Users from 'Routes/users';
import Components from 'Routes/components';
import Tables from 'Routes/tables';
import Icons from 'Routes/icons';
import Maps from 'Routes/maps';
import DragAndDrop from 'Routes/drag-drop';
import Editor from 'Routes/editor';
import Ecommerce from 'Routes/ecommerce';
import Dashboard from 'Routes/dashboard';

// async component
import {
	AsyncAboutUsComponent,
	AsyncChatComponent,
	AsyncMailComponent,
	AsyncTodoComponent
} from 'Components/AsyncComponent/AsyncComponent';

// horizontal layout
import RctHorizontalLayout from 'Components/RctHorizontalLayout';

class RctHorizontalApp extends Component {
	render() {
		const { match, location } = this.props;
		if (location.pathname === '/horizontal') {
			return (<Redirect to={'/horizontal/dashboard/ecommerce'} />);
		}
		return (
			<RctHorizontalLayout>
				<Route path={`${match.url}/dashboard`} component={Dashboard} />
				<Route path={`${match.url}/widgets`} component={Widgets} />
				<Route path={`${match.url}/ecommerce`} component={Ecommerce} />
				<Route path={`${match.url}/icons`} component={Icons} />
				<Route path={`${match.url}/about-us`} component={AsyncAboutUsComponent} />
				<Route path={`${match.url}/pages`} component={Pages} />
				<Route path={`${match.url}/chat`} component={AsyncChatComponent} />
				<Route path={`${match.url}/mail`} component={AsyncMailComponent} />
				<Route path={`${match.url}/todo`} component={AsyncTodoComponent} />
				<Route path={`${match.url}/tables`} component={Tables} />
				<Route path={`${match.url}/maps`} component={Maps} />
				<Route path={`${match.url}/ui-components`} component={Components} />
				<Route path={`${match.url}/advanced-component`} component={AdvanceUIComponents} />
				<Route path={`${match.url}/drag-andDrop`} component={DragAndDrop} />
				<Route path={`${match.url}/forms`} component={FormElements} />
				<Route path={`${match.url}/editor`} component={Editor} />
				<Route path={`${match.url}/users`} component={Users} />
				<Route path={`${match.url}/charts`} component={ChartsComponents} />
				<Route path={`${match.url}/calendar`} component={CalendarComponents} />
			</RctHorizontalLayout>
		);
	}
}

export default withRouter(RctHorizontalApp);
