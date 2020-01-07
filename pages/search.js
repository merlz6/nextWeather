import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Weather from '../components/Weather';

import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            zip: ''
        }
    }

    zipChange = (event) => {
        this.setState({
            zip: event.target.value
        })
    }

    render(){
        return(
            <div>
              Search Page
              <form onSubmit={e =>{
                console.log(this.state.zip)
              }}>
              <h4> Zip Code </h4>  <input name="zipcode" value={this.state.zip} onChange={this.zipChange} required />
              <button> Submit </button>
              </form>
            </div>
        )
    }
}


export default Search;
