import React, { Component } from 'react';

import './Section.css';




class Section extends Component {
    
  render() {
 
    return (
      <header>
          <h1>{this.props.animalToAdopt.name}</h1>
          <img src={this.props.animalToAdopt.imageURL} alt={this.props.animalToAdopt.imageDescription}></img>
          <main>
              <dl>
                  <dt> name </dt> <dd> {this.props.animalToAdopt.name}</dd>
                  <dt> sex </dt> <dd> {this.props.animalToAdopt.sex} </dd>
                  <dt> age </dt> <dd> {this.props.animalToAdopt.age} </dd>
                  <dt> breed </dt> <dd> {this.props.animalToAdopt.breed} </dd>
                  <dt> story </dt> <dd> {this.props.animalToAdopt.story} </dd>
              </dl>
              <button onClick={()=>{this.props.onAdoptPet(this.props.animalType)}}>
                Adopt     
              </button>
          </main>
      </header>
      
    );
  }
}

export default Section;
