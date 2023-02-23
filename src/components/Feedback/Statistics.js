import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import React, { Component } from 'react';
export class Statistics extends Component {
  render() {
    const {
      data: { good, neutral, bad },
    } = this.props;
    const { positivePercentage } = this.props;
    const { total } = this.props;
    return (
      <div className={css.profile}>
        <h2 className={css['statistic-title']}>Statistic</h2>
        <ul className={css['item-list']}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>positive feedback: {positivePercentage}</li>
        </ul>
      </div>
    );
  }
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
