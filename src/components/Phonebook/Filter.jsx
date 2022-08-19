import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './formStyles.module.css';
class Filter extends Component {
  state = { filter: '' };
  render() {
    return (
      <label className={s.labelFilter}>
        Find contacts by name
        <input
          className={s.inputFilter}
          onChange={this.props.handleFilter}
          name="filter"
        ></input>
      </label>
    );
  }
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
};
