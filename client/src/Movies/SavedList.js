import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink
            to={`/movies/${movie.id}`}
            style={{ textDecoration: "none", color: "#000000" }}
            activeClassName="saved-active"
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        <Link to="/" className="home-button" style={{ textDecoration: "none", color: "#000000" }}>
          Home
        </Link>
      </div>
    );
  }
}
