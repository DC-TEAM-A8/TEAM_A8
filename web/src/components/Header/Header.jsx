import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'; 

/**
 * @param {{
 *   title: string,
 *   links: { Report: string, result: string, thoughts: string }
 * }} props 
 */
export function Header(props) {
  const { title, links } = props;

  return (
    <header className="header">
      <div className="logo">{title}</div>
      <nav>
        <ul className="nav-links">
          <li><a href={links.Report}>日報確認</a></li>
          <li><a href={links.result}>試験結果確認</a></li>
          <li><a href={links.thoughts}>感想シート閲覧</a></li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.shape({
    Report: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
    thoughts: PropTypes.string.isRequired,
  }).isRequired
};
