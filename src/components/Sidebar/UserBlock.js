/**
 * User Block Component
 */
import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Badge } from 'reactstrap';
import { NotificationManager } from 'react-notifications';

// components
import SupportPage from '../Support/Support';

// redux action
import { logoutUserFromFirebase } from 'Actions';

// intl messages
import IntlMessages from 'Util/IntlMessages';

class UserBlock extends Component {

    state = {
        userDropdownMenu: false,
        isSupportModal: false
    }

    /**
     * Logout User
     */
    logoutUser() {
        this.props.logoutUserFromFirebase();
    }

    /**
     * Toggle User Dropdown Menu
     */
    toggleUserDropdownMenu() {
        this.setState({ userDropdownMenu: !this.state.userDropdownMenu });
    }

    /**
     * Open Support Modal
     */
    openSupportModal() {
        this.setState({ isSupportModal: true });
    }

    /**
     * On Close Support Page
     */
    onCloseSupportPage() {
        this.setState({ isSupportModal: false });
    }

    /**
     * On Submit Support Page
     */
    onSubmitSupport() {
        this.setState({ isSupportModal: false });
        NotificationManager.success('Message has been sent successfully!');
    }

    render() {
        return (
            <div className="top-sidebar">
                <div className="sidebar-user-block media">
                    <div className="user-profile">
                        <img src={require('Assets/img/user-7.jpg')} alt="user profile" className="img-fluid rounded-circle" width="60" height="129" />
                    </div>
                    <Dropdown isOpen={this.state.userDropdownMenu} toggle={() => this.toggleUserDropdownMenu()} className="rct-dropdown media-body pt-10">
                        <DropdownToggle nav className="d-flex align-items-center justify-content-between">
                            Lucile Beck
                            <i className="ti-angle-down pull-right"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                            <ul className="list-unstyled mb-0">
                                <li className="p-15 border-bottom user-profile-top bg-primary rounded-top">
                                    <p className="text-white mb-0 fs-14">Lucile Beck</p>
                                    <span className="text-white fs-14">info@example.com</span>
                                </li>
                                <li>
                                    <Link to={{
                                        pathname: '/app/users/user-profile-1',
                                        state: { activeTab: 0 }
                                    }}>
                                        <i className="ti ti-user"></i>
                                        <IntlMessages id="widgets.profile" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={{
                                        pathname: '/app/users/user-profile-1',
                                        state: { activeTab: 2 }
                                    }}>
                                        <i className="ti ti-comment-alt"></i>
                                        <IntlMessages id="widgets.messages" />
                                        <Badge color="danger" className="pull-right">3</Badge>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/app/pages/feedback">
                                        <i className="ti ti-pencil"></i>
                                        <IntlMessages id="sidebar.feedback" />
                                        <Badge color="info" className="pull-right">1</Badge>
                                    </Link>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" onClick={() => this.openSupportModal()}>
                                        <i className="ti ti-headphone-alt"></i>
                                        <IntlMessages id="widgets.support" />
                                    </a>
                                </li>
                                <li>
                                    <Link to="/app/pages/faq">
                                        <i className="ti ti-help-alt"></i>
                                        <IntlMessages id="sidebar.faq(s)" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/app/pages/pricing">
                                        <i className="ti-package"></i>
                                        <IntlMessages id="widgets.upgradePlains" />
                                    </Link>
                                </li>
                                <li className="border-top">
                                    <a href="javascript:void(0)" onClick={() => this.logoutUser()}>
                                        <i className="ti ti-power-off"></i>
                                        <IntlMessages id="widgets.logOut" />
                                    </a>
                                </li>
                            </ul>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <SupportPage
                    isOpen={this.state.isSupportModal}
                    onCloseSupportPage={() => this.onCloseSupportPage()}
                    onSubmit={() => this.onSubmitSupport()}
                />
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({ settings }) => {
    return settings;
}

export default connect(mapStateToProps, {
    logoutUserFromFirebase
})(UserBlock);
