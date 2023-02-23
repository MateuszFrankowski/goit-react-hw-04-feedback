import PropTypes from 'prop-types';
import css from './Section.module.css';
import React, { Component } from 'react';
export class Section extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className={css.profile}>
        <h2 className={css.title}>{title}</h2>
      </div>
    );
  }
}
Section.propTypes = {
  title: PropTypes.string,
};
