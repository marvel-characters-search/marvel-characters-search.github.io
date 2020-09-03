import React from 'react';
import { signUrl } from '../urlSigner';

class CharactersContainer extends React.Component {
  state = {
    characters: [],
  }

  componentDidMount() {
    let url = signUrl(`http://gateway.marvel.com/v1/public/characters?limit=100`);
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({
        characters: res.data.results,
      }))
      .catch(err => console.log(err))
  }

  render() {    
    return (
      <>
        <h1>Container</h1>
      </>
    )
  }
}

export default CharactersContainer;
