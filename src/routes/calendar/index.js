/**
 * Calendar Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncBasicCalendarComponent,
    AsyncCulturesComponent,
    AsyncDndComponent,
    AsyncSelectableComponent,
    AsyncCustomComponent
} from 'Components/AsyncComponent/AsyncComponent';

const CalendarComponents = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/basic`} />
            <Route path={`${match.url}/basic`} component={AsyncBasicCalendarComponent} />
            <Route path={`${match.url}/cultures`} component={AsyncCulturesComponent} />
            <Route path={`${match.url}/dnd`} component={AsyncDndComponent} />
            <Route path={`${match.url}/selectable`} component={AsyncSelectableComponent} />
            <Route path={`${match.url}/custom-rendering`} component={AsyncCustomComponent} />
        </Switch>
    </div>
);

export default CalendarComponents;
