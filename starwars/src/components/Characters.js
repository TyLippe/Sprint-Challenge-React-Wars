import React from "react";

import "./StarWars.css";

class Characters extends React.Component {
    render() {
    console.log(this.props)
    return (
      <div className="character-card">
        <div className="character-info">
          
          <h3>{this.props.starWarsProps.name}</h3>
          <p>
            <strong>Home World:</strong> {this.props.starWarsProps.homeworld}
          </p>
          <p>
            <strong>Birth Year:</strong> {this.props.starWarsProps.birth_year}
          </p>
          <p>
            <strong>Gender:</strong> {this.props.starWarsProps.gender}
          </p>
          <p>
            <strong>Hair Color:</strong> {this.props.starWarsProps.hair_color}
          </p>
          <p>
            <strong>Eye Color:</strong> {this.props.starWarsProps.eye_color}
          </p>
          <p>
            <strong>Species:</strong> {this.props.starWarsProps.species}
          </p>
          <p>
            <strong>Starships:</strong> {this.props.starWarsProps.starships}
          </p>
          <p>
            <strong>Films Appeared In:</strong> {this.props.starWarsProps.films}
          </p>

        </div>
      </div>
    );
  }
}

export default Characters;