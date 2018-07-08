/**
 * Customizer Component
 */
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import QueueAnim from 'rc-queue-anim';

// components
import ChatBlock from './ChatBlock';

// intl messages
import IntlMessages from 'Util/IntlMessages';

class Customizer extends Component {
  render() {
    return (
      <div className="rct-customizer">
        <AppBar position="static" className="bg-primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              <IntlMessages id="sidebar.chat" />
            </Typography>
          </Toolbar>
        </AppBar>
        <QueueAnim type="bottom" duration={1000}>
          <ChatBlock key={1} />
        </QueueAnim>
      </div>
    );
  }
}

export default Customizer;
