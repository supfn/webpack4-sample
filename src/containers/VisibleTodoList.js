import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {toggleTodo} from 'src/redux/modules/todo'
import TodoList from 'src/components/todo/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_ALL':
    default:
      return todos
  }
};

const mapStateToProps = state => ({ todos: getVisibleTodos(state.todo.todos, state.todo.visibilityFilter) });

const mapDispatchToProps = dispatch => ({ onTodoClick: bindActionCreators(toggleTodo, dispatch) });

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
