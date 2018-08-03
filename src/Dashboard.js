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

    onAdoptPet = (type)=>{
       
        if(type === 'cat'){
            this.props.dispatch(adoptCat())
        }
        else{
            this.props.dispatch(adoptDog())
        }
    }

  render() {
    return (
        <main className='dashboard'>
          <Section animalType='cat' animalToAdopt={this.props.cat} onAdoptPet={this.onAdoptPet}/>
          <Section animalType='dog' animalToAdopt={this.props.dog} onAdoptPet={this.onAdoptPet}/>
        </main>
    );
  }
}

const mapStateToProps = state => ({
  cat: state.cat.cat,
  dog: state.dog.dog
})

export default connect(mapStateToProps)(Dashboard);
