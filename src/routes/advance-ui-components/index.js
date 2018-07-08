/**
 * Advance UI Components Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async routes
import {
    AsyncAdvanceUIDateAndTimePickerComponent,
    AsyncAdvanceUITabsComponent,
    AsyncAdvanceUIStepperComponent,
    AsyncAdvanceUINotificationComponent,
    AsyncAdvanceUISweetAlertComponent,
    AsyncAdvanceUIAutoCompleteComponent
} from 'Components/AsyncComponent/AsyncComponent';

const AdvanceUIComponents = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/dateTime-picker`} />
            <Route path={`${match.url}/dateTime-picker`} component={AsyncAdvanceUIDateAndTimePickerComponent} />
            <Route path={`${match.url}/tabs`} component={AsyncAdvanceUITabsComponent} />
            <Route path={`${match.url}/stepper`} component={AsyncAdvanceUIStepperComponent} />
            <Route path={`${match.url}/notification`} component={AsyncAdvanceUINotificationComponent} />
            <Route path={`${match.url}/sweet-alert`} component={AsyncAdvanceUISweetAlertComponent} />
            <Route path={`${match.url}/auto-complete`} component={AsyncAdvanceUIAutoCompleteComponent} />
        </Switch>
    </div>
);

export default AdvanceUIComponents;
