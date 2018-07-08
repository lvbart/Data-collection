/**
 * Forms Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncFormElementsComponent,
    AsyncTextFieldComponent,
    AsyncSelectListComponent
} from 'Components/AsyncComponent/AsyncComponent';

const Forms = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/form-elements`} />
            <Route path={`${match.url}/form-elements`} component={AsyncFormElementsComponent} />
            <Route path={`${match.url}/text-field`} component={AsyncTextFieldComponent} />
            <Route path={`${match.url}/select-list`} component={AsyncSelectListComponent} />
        </Switch>
    </div>
);

export default Forms;
