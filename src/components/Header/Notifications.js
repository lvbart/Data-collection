/**
 * Notification Component
 */
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import Button from '@material-ui/core/Button';
import { Badge } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

// api
import api from 'Api';

// intl messages
import IntlMessages from 'Util/IntlMessages';

class Notifications extends Component {

  state = {
    notifications: null
  }

  componentDidMount() {
    this.getNotifications();
  }

  // get notifications
  getNotifications() {
    api.get('notifications.js')
      .then((response) => {
        this.setState({ notifications: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const { notifications } = this.state;
    return (
      <UncontrolledDropdown nav className="list-inline-item notification-icon">
        <DropdownToggle nav className="p-0">
          <Tooltip title="Notifications" placement="bottom">
            <IconButton className="shake" aria-label="bell">
              <i className="zmdi zmdi-notifications-active"></i>
              <Badge color="danger" className="badge-xs badge-top-right rct-notify">2</Badge>
            </IconButton>
          </Tooltip>
        </DropdownToggle>
        <DropdownMenu right>
          <div className="dropdown-head d-flex justify-content-between">
            <span><IntlMessages id="widgets.recentNotifications" /></span>
          </div>
          <Scrollbars className="rct-scroll" autoHeight autoHeightMin={100} autoHeightMax={280}>
            <ul className="list-unstyled dropdown-body">
              {notifications && notifications.map((notification, key) => (
                <li key={key}>
                  <div className="media">
                    <div className="mr-10">
                      <img src={notification.userAvatar} alt="user profile" className="media-object rounded-circle" width="50" height="50" />
                    </div>
                    <div className="media-body pt-5">
                      <div className="d-flex justify-content-between">
                        <h5 className="mb-5 text-primary">{notification.userName}</h5>
                        <span className="text-muted fs-12">{notification.date}</span>
                      </div>
                      <span className="text-muted fs-12 d-block">{notification.notification}</span>
                      <Button className="btn-default mr-10">
                        <i className="zmdi zmdi-mail-reply"></i> <IntlMessages id="button.reply" />
                      </Button>
                      <Button className="btn-default">
                        <i className="zmdi zmdi-thumb-up"></i> <IntlMessages id="button.like" />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Scrollbars>
          <div className="dropdown-foot text-center">
            <a href="javascript:void(0);" className=""><IntlMessages id="button.viewAll" /></a>
          </div>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

export default Notifications;
