/**
 * Todo Redux App
 */
import React, { Component } from 'react';
import { FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import $ from 'jquery';

// component
import AddNewTask from './components/AddNewTask';
import TaskListing from './components/TaskListing';
import TaskStatusFilter from './components/TaskStatusFilter';
import TaskDetails from './components/TaskDetails';

// intl message
import IntlMessages from 'Util/IntlMessages';

// redux actions
import { closeSnakbarAction, updateSearch, onSearchTodo, getTodos } from 'Actions';

const drawerWidth = 280;

const styles = theme => ({
	root: {
		flexGrow: 1,
		height: 'auto',
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%',
	},
	appBar: {
		position: 'absolute',
		marginLeft: theme.direction !== 'rtl' ? drawerWidth : 0,
		marginRight: theme.direction === 'rtl' ? drawerWidth : 0,
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${drawerWidth}px)`,
		}
	},
	navIconHide: {
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		[theme.breakpoints.up('md')]: {
			position: 'relative',
		},
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
	},
});

class TodoList extends Component {

	state = {
		mobileOpen: false,
	};

	componentWillMount() {
		this.props.getTodos();
	}

	componentDidMount() {
		$('body').css({ 'overflow': 'hidden' });
	}

	componentWillUnmount() {
		$('body').css({ 'overflow': '' });
		$('body').css({ 'overflow-x': 'hidden' });
	}

	handleDrawerToggle = () => {
		this.setState({ mobileOpen: !this.state.mobileOpen });
	};

	/**
	 * Search Todo Hanlder
	 */
	updateSearch(e) {
		this.props.updateSearch(e.target.value);
		this.props.onSearchTodo(e.target.value);
	}

	render() {
		const { selectedTodo, showMessage, message, searchTodo, theme, classes } = this.props;
		const drawer = (
			<div>
				<div className="user-mail d-flex justify-content-between">
					<div className="media">
						<img src={require('Assets/img/user-5.jpg')} alt="user prof" className="img-fluid rounded-circle mr-10" width="40" height="40" />
						<div className="media-body align-self-center d-flex">
							<h4 className="mb-0">Vivek Prajapati </h4>
						</div>
					</div>
					<IconButton className="text-white">
						<i className="zmdi zmdi-apps"></i>
					</IconButton>
				</div>
				<AddNewTask />
				<TaskStatusFilter />
			</div>
		);
		return (
			<div className="todo-wrapper">
				<div className={classes.root}>
					<AppBar className={classes.appBar} position="static">
						<Toolbar className="d-flex justify-content-between">
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={this.handleDrawerToggle}
								className={classes.navIconHide}>
								<MenuIcon />
							</IconButton>
							<Typography variant="title" color="inherit" noWrap>
								<IntlMessages id="sidebar.toDo" />
							</Typography>
							<FormGroup className="mb-0 w-30">
								<Input type="search"
									name="search"
									id="search-todo"
									className="has-input-right"
									placeholder="Search To Do List"
									onChange={(e) => this.updateSearch(e)}
									value={searchTodo}
								/>
							</FormGroup>
						</Toolbar>
					</AppBar>
					<Hidden mdUp>
						<Drawer
							variant="temporary"
							anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={this.state.mobileOpen}
							onClose={this.handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper,
							}}
							ModalProps={{
								keepMounted: true,
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden smDown implementation="css">
						<Drawer
							variant="permanent"
							open
							classes={{
								paper: classes.drawerPaper,
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<div className={classes.content}>
						<div className={classes.toolbar} />
						{selectedTodo === null ?
							<TaskListing />
							: <TaskDetails />
						}
					</div>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
					open={showMessage}
					message={<span id="message-id">{message}</span>}
					autoHideDuration={1000}
					onClose={() => this.props.closeSnakbarAction()}
				/>
			</div>
		);
	}
}

// map state to props
const mapStateToProps = ({ todoApp, settings }) => {
	const { selectedTodo, message, showMessage, searchTodo } = todoApp;
	return { selectedTodo, message, showMessage, searchTodo, settings };
}

export default connect(mapStateToProps, {
	closeSnakbarAction,
	updateSearch,
	onSearchTodo,
	getTodos
})(withStyles(styles, { withTheme: true })(TodoList));
