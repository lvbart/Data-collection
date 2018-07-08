/**
 * Quick Links
 */
import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';
import Tooltip from '@material-ui/core/Tooltip';

// intl messages
import IntlMessages from 'Util/IntlMessages';

const QuickLinks = () => (
    <UncontrolledDropdown nav className="list-inline-item quicklink-wrapper rct-dropdown tour-step-1">
        <DropdownToggle nav className="header-icon p-0">
            <Tooltip title="Quick Links" placement="bottom">
                <i className="zmdi zmdi-apps"></i>
            </Tooltip>
        </DropdownToggle>
        <DropdownMenu>
            <Scrollbars className="rct-scroll" autoHeight autoHeightMin={100} autoHeightMax={350}>
                <div className="quicklink-content">
                    <div className="quicklink-top d-flex justify-content-between rounded-top bg-primary">
                        <span className="text-white font-weight-bold">Quick Links</span>
                        <Badge color="warning">1 NEW</Badge>
                    </div>
                    <ul className="list-unstyled mb-0 quicklink-list">
                        <li>
                            <Link to="/app/pages/report">
                                <i className="ti-notepad text-primary mr-10"></i>
                                <IntlMessages id="sidebar.report" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/app/tables/data-table">
                                <i className="ti-layout text-danger mr-10"></i>
                                <IntlMessages id="sidebar.tables" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/app/users/user-management" className="p-3">
                                <i className="ti-user text-success mr-10"></i>
                                <IntlMessages id="sidebar.userManagement" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/app/ecommerce/invoice">
                                <i className="text-info ti-agenda mr-10"></i>
                                <IntlMessages id="sidebar.invoice" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/app/mail/folder/inbox">
                                <i className="ti-email text-danger  mr-10"></i>
                                <IntlMessages id="sidebar.inbox" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/app/calendar/basic">
                                <i className="text-warning ti-calendar mr-10"></i>
                                <IntlMessages id="sidebar.calendar" />
                            </Link>
                        </li>

                    </ul>
                </div>
            </Scrollbars>
        </DropdownMenu>
    </UncontrolledDropdown>
);

export default QuickLinks;
