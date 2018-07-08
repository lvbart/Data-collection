/**
 * Task Details
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';

// rct section loader
import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// redux action
import {
	backToTodosAction,
	showLoadingIndicatorAction,
	markAsStarTodoAction,
	deleteTodoAction,
	addLabelsIntoTheTaskAction,
	completeTask,
	updateTaskTitle,
	updateTaskDescription,
	changeTaskAssigner,
	fetchTodos
} from 'Actions';

class TaskDetails extends Component {
	state = {
		anchorEl: null,
		taskTitleEdit: false,
		newTaskTitle: this.props.selectedTodo.task_name,
		taskContentEdit: false,
		newTaskDescription: this.props.selectedTodo.task_description,
		userMenu: false,
		assignTo: '',
		labelMenu: false
	}
	// back to todos hanlder
	backToTodos() {
		this.props.showLoadingIndicatorAction();
		setTimeout(() => {
			this.props.backToTodosAction();
		}, 1500);
	}
	// mark as star todo
	markAsStarTodo() {
		const { selectedTodo } = this.props;
		this.props.markAsStarTodoAction(selectedTodo);
	}
	// delete todo
	deleteTodo() {
		this.props.deleteTodoAction();
		this.props.fetchTodos();
	}
	/**
	 * Function to return task label name
	 */
	getTaskLabelNames = (taskLabels) => {
		let elements = [];
		const { labels } = this.props;
		for (const taskLabel of taskLabels) {
			for (const label of labels) {
				if (label.value === taskLabel) {
					let ele = <span key={label.value}
						className={classNames('badge mr-10 mb-5', { 'badge-success': label.value === 1, 'badge-primary': label.value === 2, 'badge-info': label.value === 3, 'badge-danger': label.value === 4 })}
					>
						<IntlMessages id={label.name} />
					</span>;
					elements.push(ele);
				}
			}
		}
		return elements;
	}
	handleClick = event => {
		this.setState({ labelMenu: true, anchorEl: event.currentTarget });
	}
	handleClose = () => {
		this.setState({ anchorEl: null, labelMenu: false });
	}
	/**
	 * Function to edit the task title
	 */
	editTaskTitle() {
		this.setState({ taskTitleEdit: true });
	}
	/**
	* Function to add labels in the task
	*/
	addLabelsIntoTheTask(label) {
		this.setState({ anchorEl: null });
		this.props.addLabelsIntoTheTaskAction(label);
	}
	/**
	 * Function to complete task
	 */
	completeTask() {
		this.props.completeTask();
	}
	/**
	 * Submit new task title
	 */
	submitNewTaskTitle() {
		this.setState({ taskTitleEdit: false });
		this.props.updateTaskTitle(this.state.newTaskTitle);
	}
	/**
	 * Function to edit the task content
	 */
	editTaskDescription() {
		this.setState({ taskContentEdit: true });
	}
	/**
	 * Function to submit new task description
	 */
	submitNewTaskDescription() {
		this.setState({ taskContentEdit: false });
		this.props.updateTaskDescription(this.state.newTaskDescription);
	}
	handleUserClick = event => {
		this.setState({ userMenu: true, anchorEl: event.currentTarget });
	};
	handleRequestClose = () => {
		this.setState({ userMenu: false });
	};
	/**
	 * Function to change task asssigner
	 */
	changeTaskAssigner(user) {
		this.setState({ userMenu: false });
		this.props.changeTaskAssigner(user);
	}
	render() {
		const { loading, selectedTodo, labels, users } = this.props;
		const { anchorEl } = this.state;
		return (
			<div className="todo-listing">
				{loading ? <RctSectionLoader />
					: <div className="task-detail-wrapper">
						<div className="task-head">
							<IconButton aria-label="back arrow" onClick={() => this.backToTodos()}>
								<i className="zmdi zmdi-arrow-back"></i>
							</IconButton>
						</div>
						<Scrollbars autoHide style={{ height: "calc(100vh - 300px)" }}>
							<div className="task-detail">
								<div className="d-flex justify-content-between flex-wrap task-detail-top">
									<div className="media" onClick={this.handleUserClick}>
										<img src={selectedTodo.assignTo.photo_url} alt="select user" className="img-fluid rounded-circle mr-15" width="50" height="50" />
										<span className="badge badge-info badge-bottom badge-xs">&nbsp;</span>
										<div className="media-body pt-15">
											<span>{selectedTodo.assignTo.name}</span>
										</div>
									</div>
									<Menu
										id="label-menu"
										anchorEl={this.state.anchorEl}
										open={this.state.userMenu}
										onClose={this.handleRequestClose}
										MenuListProps={{
											style: {
												width: 180,
											},
										}}>
										{users.map((user, index) =>
											<MenuItem key={index} value={user.id} onClick={() => {
												this.changeTaskAssigner(user);
											}}>
												<div className="d-flex user-name manage-margin align-items-center">
													<Avatar src={user.photo_url} alt={user.name} /><h4>{user.name}</h4>
												</div>
											</MenuItem>
										)}
									</Menu>
									<div className="task-action d-flex align-items-center">
										<ul className="list-inline mb-0">
											<li className="list-inline-item">
												<IconButton aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true" onClick={this.handleClick}>
													<i className="zmdi zmdi-label-alt"></i>
												</IconButton>
												<Menu
													id="simple-menu"
													anchorEl={anchorEl}
													open={this.state.labelMenu}
													onClose={this.handleClose}
													MenuListProps={{
														style: {
															width: 150
														}
													}}
												>
													{labels.map((label) => (
														<MenuItem onClick={() => this.addLabelsIntoTheTask(label)} key={label.value}>
															<IntlMessages id={label.name} />
														</MenuItem>
													))}
												</Menu>
											</li>
											<li className="list-inline-item">
												<IconButton onClick={() => this.markAsStarTodo()}>
													<i className={classNames('zmdi', { ' zmdi-star-outline': !selectedTodo.starred, 'zmdi-star': selectedTodo.starred })}></i>
												</IconButton>
											</li>
											<li className="list-inline-item">
												<IconButton onClick={() => this.deleteTodo()}><i className="zmdi zmdi-delete"></i></IconButton>
											</li>
										</ul>
									</div>
								</div>
								<div className="task-detail-content">
									<div className="task-labels">
										{this.getTaskLabelNames(selectedTodo.labels)}
									</div>
									<div className="task-content">
										<div className="mb-25 task-box">
											<IconButton aria-label="check" onClick={() => this.completeTask()}>
												<i className={classNames('zmdi zmdi-check-all', { 'text-info': selectedTodo.completed })}></i>
											</IconButton>
											{this.state.taskTitleEdit ?
												<span>
													<TextField
														id="title"
														fullWidth
														type="text"
														value={this.state.newTaskTitle}
														onChange={(e) => this.setState({ newTaskTitle: e.target.value })}
													/>
													<IconButton aria-label="check" className="task-btn" onClick={() => this.submitNewTaskTitle()}>
														<i className="zmdi zmdi-check"></i>
													</IconButton>
												</span>
												: <span>
													<span>{selectedTodo.task_name}</span>
													<IconButton aria-label="check" className="task-btn" onClick={() => this.editTaskTitle()}>
														<i className="zmdi zmdi-edit"></i>
													</IconButton>
												</span>
											}
										</div>
										<div className="task-box">
											{this.state.taskContentEdit ?
												<div>
													<TextField
														id="task-description"
														fullWidth
														type="text"
														value={this.state.newTaskDescription}
														onChange={(e) => this.setState({ newTaskDescription: e.target.value })}
													/>
													<IconButton aria-label="check" className="task-btn" onClick={() => this.submitNewTaskDescription()}>
														<i className="zmdi zmdi-check"></i>
													</IconButton>
												</div>
												: <div>
													<span className="small-text">{selectedTodo.task_description}</span>
													<IconButton aria-label="check" className="task-btn" onClick={() => this.editTaskDescription()}>
														<i className="zmdi zmdi-edit"></i>
													</IconButton>
												</div>
											}
										</div>
									</div>
								</div>
								<div className="task-comment">
									<h3 className="mb-20">Comments</h3>
									<ul className="list-unstyled">
										<li className="media">
											<img src={require('Assets/img/user-2.jpg')} className="img-fluid rounded-circle mr-15" alt="user profile" width="50" height="50" />
											<div className="media-body pt-5">
												<h5 className="mb-0">Jhon Smith <span className="fs-14">Jan 9, 2017, 3:03:28 PM</span></h5>
												<span className="text-muted fs-14">Asperger S Syndrome Is There Real Cure For It</span>
											</div>
										</li>
										<li className="media">
											<img src={require('Assets/img/user-3.jpg')} className="img-fluid rounded-circle mr-15" alt="user profile" width="50" height="50" />
											<div className="media-body pt-5">
												<h5 className="mb-0">Rukshana Smith <span className="fs-14">Jan 9, 2017, 3:03:28 PM</span></h5>
												<span className="text-muted fs-14">Asperger S Syndrome Is There Real Cure For It</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="task-foot d-flex justify-content-between">
								<TextField id="search" fullWidth label="Send Message" type="text" />
								<IconButton aria-label="back arrow">
									<i className="zmdi zmdi-mail-send"></i>
								</IconButton>
							</div>
						</Scrollbars>
					</div>
				}
			</div>
		);
	}
}

// map state to props
const mapStateToProps = ({ todoApp, settings }) => {
	const { loading, selectedTodo, labels, users } = todoApp;
	return { loading, selectedTodo, labels, users, settings };
};

export default connect(mapStateToProps, {
	backToTodosAction,
	showLoadingIndicatorAction,
	markAsStarTodoAction,
	deleteTodoAction,
	addLabelsIntoTheTaskAction,
	completeTask,
	updateTaskTitle,
	updateTaskDescription,
	changeTaskAssigner,
	fetchTodos
})(TaskDetails);
