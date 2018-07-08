/**
 * Todo List Item Component
 */
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import classNames from 'classnames';

const TodoListItem = ({ todo, onSelectTodo, onCheckBoxClickTodoItem, getTaskLabelNames, getTaskAssigners, sortIndex }) => (
    <li className={classNames('d-flex justify-content-between todo-item', { 'strike': todo.completed })} key={todo.id} onClick={() => onSelectTodo(todo)}>
        <div className="media">
            <FormControlLabel control={
                <Checkbox
                    checked={todo.task_status}
                    onClick={(event) => {
                        event.stopPropagation();
                        onCheckBoxClickTodoItem(todo);
                    }}
                />
            } />
            <div className="media-body">
                <p>{todo.task_name}</p>
                {getTaskLabelNames(todo.labels)}
            </div>
        </div>
        <div className="todo-user">
            <img className="img-fluid rounded-circle" alt="user-img" src={todo.assignTo.photo_url} width="35" height="35" />
        </div>
    </li>
);

export default TodoListItem;
