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
  signinUserWithTwitter,
  changePageHistory
} from 'Actions';

import item_list from '../../assets/data/chat-app/item-list';

class InputList extends Component {

  constructor(props) {
		super(props);
		this.state = {
      itemState: this.props.item_state,
      currentPage: this.props.current_page,
      user: this.props.user
		}
	};

  componentWillMount() {
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      itemState: newProps.item_state,
      currentPage: newProps.current_page
    });
  }

  /**
   * On User Login
   */
  changeValue(index, value) {
    const tempListData = [...this.state.itemState];
    tempListData[index] = value;
    this.setState({ itemState: tempListData });
  }

  goToPage(pageNum) {
    this.props.changePageHistory(this.state.itemState, pageNum, this.props.history);
  }

  render() {
    const { loading } = this.props;
    const { itemState, currentPage } = this.state;
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
                        {itemState.slice(currentPage * 3, currentPage * 3 + 3).map((item, index) => <InputGroup key={index} className="has-wrapper-input">
                          <Label className="has-label text-center">{item_list[index + currentPage * 3]}</Label>
                          <Input type="number" value={itemState[index + currentPage * 3]} name="user-data1" id="user-data1" className="has-input input-lg text-center" placeholder="0" onChange={(event) => { this.changeValue(index + currentPage * 3, event.target.value); }} />
                          <Input type="number" value={itemState[index + currentPage * 3]} name="user-data2" id="user-data2" className="has-input input-lg text-center" placeholder="0" onChange={(event) => { this.changeValue(index + currentPage * 3, event.target.value); }} />
                          <Input type="number" value={itemState[index + currentPage * 3]} name="user-data3" id="user-data3" className="has-input input-lg text-center" placeholder="0" onChange={(event) => { this.changeValue(index + currentPage * 3, event.target.value); }} />
                        </InputGroup>)}
                      </FormGroup>
                      <FormGroup row className="mb-15">
                        {currentPage !== 0 && <Button
                          color="primary"
                          className="btn-block text-white"
                          variant="raised"
                          size="large"
                          onClick={() => this.goToPage(currentPage - 1)}>
                          Prev Page
                        </Button>}
                        <Col/>
                        {currentPage !== 7 && <Button
                          color="primary"
                          className="btn-block text-white"
                          variant="raised"
                          size="large"
                          onClick={() => this.goToPage(currentPage + 1)}>
                          Next Page
                        </Button>}
                        {currentPage === 7 && <Button
                          color="primary"
                          className="btn-block text-white"
                          variant="raised"
                          size="large"
                          onClick={() => this.goToPage(currentPage - 1)}>
                          Submit
                        </Button>}
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
  const { user, loading, item_state, current_page } = authUser;
  return { user, loading, item_state, current_page }
}

export default connect(mapStateToProps, {
  signinUserInFirebase,
  signinUserWithFacebook,
  signinUserWithGoogle,
  signinUserWithGithub,
  signinUserWithTwitter,
  changePageHistory
})(InputList);
