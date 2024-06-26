import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'; 
import Link from 'next/link';

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
      <Link className="logo" href="/">{title}</Link>
      <nav>
        <ul className="nav-links">
          <li><Link href={links.Report}>日報提出</Link></li>
          <li><Link href={links.result}>試験</Link></li>
          <li><Link href={links.thoughts}>感想シート</Link></li>
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
