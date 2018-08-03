import React, { Component } from 'react';

import './Section.css';




class Section extends Component {
    
  render() {
 
    return (
      <div className='column'>
        <header >
            <h1>{this.props.animalToAdopt.name}</h1>
            <img className='img-pet' src={this.props.animalToAdopt.imageURL} alt={this.props.animalToAdopt.imageDescription}></img>
            <div>
                <dl>
                  <dt>Name</dt> 
                  <dd>{this.props.animalToAdopt.name}</dd>
                  <dt>Sex</dt> 
                  <dd>{this.props.animalToAdopt.sex}</dd>
                  <dt>Age</dt> 
                  <dd>{this.props.animalToAdopt.age}</dd>
                  <dt>Breed</dt> 
                  <dd>{this.props.animalToAdopt.breed}</dd>
                  <dt>Story</dt> 
                  <dd>{this.props.animalToAdopt.story}</dd>
                </dl>
                <button onClick={()=>{this.props.onAdoptPet(this.props.animalType)}}>
                  Adopt     
                </button>
            </div>
        </header>
      </div>
      
    );
  }
}

export default Section;
