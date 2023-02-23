import PropTypes from 'prop-types';
import css from './Notification.module.css';
import React, { Component } from 'react';
export class Notification extends Component {
  render() {
    const { message } = this.props;

    return (
      <div>
        <h2 className={css.message}>{message}</h2>
      </div>
    );
  }
}
Notification.propTypes = {
  message: PropTypes.string,
};
