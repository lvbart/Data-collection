/**
 * Chat Area Component
 */
import React, { Component } from 'react';
import MessageBlock from './MessageBlock';
import { FormGroup, Input } from 'reactstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { Badge } from 'reactstrap';
import Button from '@material-ui/core/Button';
import $ from 'jquery';

// actions
import { sendMessageToUser } from 'Actions';

class ChatArea extends Component {

    state = {
        message: ''
    }

    onSubmitMessage(event) {
        event.preventDefault();
        if (this.state.message !== '') {
            let data = {
                user: this.props.selectedUser,
                message: this.state.message,
                isAdmin: true,
                time: 'Just Now'
            }
            this.props.sendMessageToUser(data);
            this.setState({ message: '' })
        }
    }

    getScrollHeight() {
        if (this.props.fullHeight) {
            return 'calc(100vh - 226px)';
        } else {
            return 'calc(100vh - 270px)';
        }
    }

    render() {
        const { selectedUser, admin_photo_url } = this.props;
        if (selectedUser === null) {
            return (
                <div className="chat-box-main">
                    <div className="centerlized">
                        <img src={require('Assets/img/chat-icon.png')} alt="chat icon" className="img-fluid mg-15" width="100" height="100" />
                        <h4>Please Select User</h4>
                    </div>
                </div>
            );
        }
        return (
            <div className="chat-main-body">
                <div className="chat-head">
                    <div className="d-flex justify-content-between">
                        <div className="media">
                            <div className="mr-10 position-relative">
                                <img src={selectedUser.photo_url} alt="user profile" className="rounded-circle" width="40" height="40" />
                                {selectedUser.isActive ?
                                    <Badge color="success" className="badge-xs rct-notify">&nbsp;</Badge>
                                    : <Badge color="warning" className="badge-xs rct-notify">&nbsp;</Badge>
                                }
                            </div>
                            <div className="media-body pt-5">
                                <h3 className="mb-0">{selectedUser.first_name}&nbsp;{selectedUser.last_name}</h3>
                            </div>
                        </div>
                        <div className="attachment">
                            <a href="javascript:void(0);"><i className="ti-clip"></i></a>
                        </div>
                    </div>
                </div>
                <Scrollbars className="rct-scroll" autoHide style={{ height: this.getScrollHeight() }}>
                    <div className="chat-body">
                        {selectedUser.previousChats.map((previousChat, key) => (
                            <MessageBlock
                                even={!previousChat.isAdmin}
                                key={key}
                                selectedUserPhotoUrl={selectedUser.photo_url}
                                data={previousChat}
                                adminPhotoUrl={admin_photo_url} />
                        ))}
                    </div>
                </Scrollbars>
                <div className="chat-footer d-flex no-gutters">
                    <div className="col">
                        <form onSubmit={(event) => this.onSubmitMessage(event)}>
                            <FormGroup className="mb-0 rounded-0">
                                <Input
                                    type="text" id="search-msg"
                                    placeholder="Type your message"
                                    value={this.state.message}
                                    className="rounded-0"
                                    onChange={(event) => this.setState({ message: event.target.value, })}
                                />
                            </FormGroup>
                        </form>
                    </div>
                    <Button onClick={(event) => this.onSubmitMessage(event)} className="btn-light rounded-0"><i className="zmdi zmdi-mail-send"></i></Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ chatAppReducer }) => {
    return chatAppReducer;
}

export default connect(mapStateToProps, {
    sendMessageToUser
})(ChatArea);
