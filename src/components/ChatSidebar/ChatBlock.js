/**
 * Chat Sidebar Component
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Badge } from 'reactstrap';
import ChatArea from 'Routes/chat/components/ChatArea';
import { chatWithSelectedUser } from 'Actions';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
import QueueAnim from 'rc-queue-anim';

class ChatSidebar extends Component {

  state = {
    isChatArea: false // use to check whether it is chat area or not
  }

  /**
    * Swicth Chat With User
    * @param {*object} user
    */
  switchChatWithUser(user) {
    this.setState({ isChatArea: true });
    this.props.chatWithSelectedUser(user);
  }

  /**
   * On back press
   */
  onBackPress() {
    this.setState({ isChatArea: false });
  }

  render() {
    return (
      <div className="chat-sidebar">
        {!this.state.isChatArea ?
          <List>
            <ListItem>
              <h5 className="panel-title">Active User</h5>
            </ListItem>
            {this.props.recentChatUsers.map((user, key) => (
              <ListItem key={key} dense button onClick={() => this.switchChatWithUser(user)}>
                <div className="d-flex justify-content-between w-100">
                  <div className="media">
                    <div className="mr-15">
                      <img src={user.photo_url} className="img-fluid rounded-circle" alt="user profile" width="40" height="40" />
                    </div>
                    <div className="media-body pt-5">
                      <h5 className="mb-5">{user.first_name}&nbsp;{user.last_name}</h5>
                      <span className="fs-14 text-muted d-block">{user.last_chat}</span>
                    </div>
                  </div>
                  {user.isActive ?
                    <Badge color="success" className="badge-xs">&nbsp;</Badge>
                    : <Badge color="warning" className="badge-xs">&nbsp;</Badge>
                  }
                </div>
              </ListItem>
            ))}
          </List>
          : <QueueAnim type="right" duration={400}>
            <div className="chat-area" key={1}>
              <IconButton onClick={() => this.onBackPress()}>
                <KeyboardBackspace />
              </IconButton>
              <ChatArea fullHeight />
            </div>
          </QueueAnim>
        }
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({ chatAppReducer }) => {
  const { recentChatUsers } = chatAppReducer;
  return { recentChatUsers };
};

export default connect(mapStateToProps, {
  chatWithSelectedUser
})(ChatSidebar);
