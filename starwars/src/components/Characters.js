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
            <strong>Gender:</strong> {this.props.starWarsProps.gender.charAt(0).toUpperCase() + this.props.starWarsProps.gender.slice(1)}
          </p>
          <p>
            <strong>Birth Year:</strong> {this.props.starWarsProps.birth_year.charAt(0).toUpperCase() + this.props.starWarsProps.birth_year.slice(1)}
          </p>
          <p>
            <strong>Height:</strong> {this.props.starWarsProps.height.charAt(0).toUpperCase() + this.props.starWarsProps.height.slice(1)}
          </p>
          <p>
            <strong>Mass:</strong> {this.props.starWarsProps.mass.charAt(0).toUpperCase() + this.props.starWarsProps.mass.slice(1)}
          </p>
          <p>
            <strong>Skin Color:</strong> {this.props.starWarsProps.skin_color.charAt(0).toUpperCase() + this.props.starWarsProps.skin_color.slice(1)}
          </p>

          <p>
            <strong>Hair Color:</strong> {this.props.starWarsProps.hair_color.charAt(0).toUpperCase() + this.props.starWarsProps.hair_color.slice(1)}
          </p>
          <p>
            <strong>Eye Color:</strong> {this.props.starWarsProps.eye_color.charAt(0).toUpperCase() + this.props.starWarsProps.eye_color.slice(1)}
          </p>

        </div>
      </div>
    );
  }
}

export default Characters;