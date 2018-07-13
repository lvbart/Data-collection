/**
 * Login Page
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, InputGroup, Label, Col, Row } from 'reactstrap';
import LinearProgress from '@material-ui/core/LinearProgress';
import QueueAnim from 'rc-queue-anim';

// components
import { SessionSlider } from 'Components/Widgets';

// app config
import AppConfig from 'Constants/AppConfig';

// redux action
import {
  signinUserInFirebase,
  signinUserWithFacebook,
  signinUserWithGoogle,
  signinUserWithGithub,
  signinUserWithTwitter
} from 'Actions';

class InputList extends Component {

  state = {
    area: 'China',
    office: 2
  }

  /**
   * On User Login
   */
  onUserLogin() {
    if (this.state.area !== '' && this.state.office !== '') {
      // this.props.signinUserInFirebase(this.state, this.props.history);
    }
  }

  /**
   * On User Sign Up
   */
  onUserSignUp() {
    this.props.history.push('/signup');
  }

  render() {
    const { area, office } = this.state;
    const { loading } = this.props;
    return (
      <QueueAnim type="bottom" duration={2000}>
        <div className="rct-session-wrapper">
          {loading &&
            <LinearProgress />
          }
          <div className="session-inner-wrapper">
            <div className="container">
              <div className="row row-eq-height">
                <div className="col-sm-7 col-md-7 col-lg-7">
                  <div className="session-body text-right">
                    <Form>
                      <FormGroup>
                        {[1,2,3].map(item => <InputGroup className="has-wrapper-input">
                          <Label md className="has-label text-center">{'March'}</Label>
                          <Input type="number" value={office} name="user-mail1" id="user-mail1" className="has-input input-lg text-center" placeholder="Office" onChange={(event) => this.setState({ office: event.target.value })} />
                          <Input type="number" value={office} name="user-mail1" id="user-mail1" className="has-input input-lg" placeholder="Office" onChange={(event) => this.setState({ office: event.target.value })} />
                          <Input type="number" value={office} name="user-mail1" id="user-mail1" className="has-input input-lg" placeholder="Office" onChange={(event) => this.setState({ office: event.target.value })} />
                        </InputGroup>)}
                      </FormGroup>
                      <FormGroup row className="mb-15">
                        <Button
                          color="primary"
                          className="btn-block text-white"
                          variant="raised"
                          size="large"
                          onClick={() => this.onUserLogin()}>
                          Prev Page
                        </Button>
                        <Col/>
                        <Button
                          color="primary"
                          className="btn-block text-white"
                          variant="raised"
                          size="large"
                          onClick={() => this.onUserLogin()}>
                          Next Page
                        </Button>
                      </FormGroup>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </QueueAnim>
    );
  }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading }
}

export default connect(mapStateToProps, {
  signinUserInFirebase,
  signinUserWithFacebook,
  signinUserWithGoogle,
  signinUserWithGithub,
  signinUserWithTwitter
})(InputList);
