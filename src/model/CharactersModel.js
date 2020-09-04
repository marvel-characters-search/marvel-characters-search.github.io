import { signUrl } from '../urlSigner';
let url = signUrl(`http://gateway.marvel.com/v1/public/characters?limit=18`);

class CharactersModel {
  static getPaginatedCharacters = () => {
    return fetch(url)
      .then(res => res.json())
  };

  // static getCharacterByName = () => {
  // }
}

export default CharactersModel;