import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from './Section'

import './Dashboard.css';

import { fetchCat, adoptCat } from './actions/cat';
import { fetchDog, adoptDog } from './actions/dog';

export class Dashboard extends Component {

    componentDidMount() {
      this.props.dispatch(fetchCat());
      this.props.dispatch(fetchDog());
    }

    onAdoptPet(type){
        console.log('adopting a', type)
    }

  render() {
    return (
        <div className='dashboard'>
          <Section animalType='cat' animalToAdopt={this.props.cat} onAdoptPet={this.onAdoptPet}/>
          <Section animalType='dog' animalToAdopt={this.props.dog} onAdoptPet={this.onAdoptPet}/>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  cat: state.cat.cat,
  dog: state.dog.dog
})

export default connect(mapStateToProps)(Dashboard);
