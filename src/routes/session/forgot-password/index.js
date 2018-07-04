import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';

// app config
import AppConfig from 'Constants/AppConfig';

export default class Forgotpwd extends Component {
  render() {
    return (
      <QueueAnim type="bottom" duration={2000}>
        <div className="rct-session-wrapper" key="1">
          <div className="session-inner-wrapper">
            <div className="row">
              <div className="col-sm-8 col-md-6 col-lg-5 mx-auto">
                <div className="session-body text-center">
                  <div className="session-head mb-30">
                    <h2>Get started with {AppConfig.brandName}</h2>
                  </div>
                  <Form>
                    <FormGroup className="has-wrapper">
                      <Input type="mail" name="user-mail" id="user-mail" className="has-input input-lg" placeholder="Enter Email Address" onChange={(event) => this.setState({ email: event.target.value })} />
                      <span className="has-icon"><i className="ti-email"></i></span>
                    </FormGroup>
                    <FormGroup>
                      <Button variant="raised" className="btn-info text-white btn-block btn-large">Reset Password</Button>
                    </FormGroup>
                    <Button component={Link} to="/signin" outline className="btn-dark btn-block btn-large text-white">Already having account?  Login</Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </QueueAnim>
    );
  }
}
