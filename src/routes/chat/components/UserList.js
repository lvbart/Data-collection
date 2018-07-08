/**
 * User List
 */
import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

// components
import RecentChatUsers from './RecentChatUsers';

// redux actions
import {
    chatWithSelectedUser,
    updateUsersSearch,
    onSearchUsers
} from 'Actions';

class UserList extends Component {

    /**
     * Swicth Chat With User
     * @param {*object} user
     */
    switchChatWithUser(user) {
        this.props.chatWithSelectedUser(user);
    }

    /**
     * On Search Chat Users
     */
    updateSearch(e) {
        this.props.updateUsersSearch(e.target.value);
        this.props.onSearchUsers(e.target.value);
    }

    render() {
        const { searchUsers } = this.props;
        return (
            <div>
                <div className="has-wrapper mb-0">
                    <Input
                        type="text"
                        name="search-users"
                        id="search"
                        className="has-input-right input-lg-icon"
                        placeholder="Search"
                        onChange={(e) => this.updateSearch(e)}
                        value={searchUsers}
                    />
                    <span className="has-icon-left"><i className="ti-search"></i></span>
                </div>
                <div className="chat-list">
                    <Scrollbars className="rct-scroll" autoHide style={{ height: "calc(100vh - 185px)" }}>
                        <RecentChatUsers />
                    </Scrollbars>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ chatAppReducer }) => {
    return chatAppReducer;
};

export default connect(mapStateToProps, {
    chatWithSelectedUser,
    updateUsersSearch,
    onSearchUsers
})(UserList);
