import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setVisibilityFilter} from 'src/redux/modules/todo';
import Link from 'src/components/todo/Link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.todo.visibilityFilter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired
};

export default FilterLink;
