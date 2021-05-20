import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <article className="NoMatch">
      <h2>This is not the page you are looking for</h2>
      <Link className="link" to='/'>
        <button className="back-btn">Go Back</button>
      </Link>
    </article>
  )
}
