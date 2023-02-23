import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import React, { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={css.container}>
        {options.map(option => (
          <button
            className={css.btn}
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            <span>{option}</span>
          </button>
        ))}
      </div>
    );
  }
}
Notification.FeedbackOptions = {
  options: PropTypes.shape({}),
};
