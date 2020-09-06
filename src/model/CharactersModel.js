import { signUrl } from '../urlSigner';

class CharactersModel {
  static getInitalCharacterSet = () => {
    let url = signUrl(`https://gateway.marvel.com/v1/public/characters?limit=18`);
    return fetch(url)
      .then(res => res.json())
  };

  static getCharactersByNamePrefix = (namePrefix) => {
    if (namePrefix) {
      let url = signUrl(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${namePrefix}`);
      return fetch(url)
        .then(res => res.json())
    }
  };

  static getCharacterByName = (characterName) => {
    if (characterName) {
      let nameForUrl = characterName.split(" ").join("%20");
      let url = signUrl(`https://gateway.marvel.com/v1/public/characters?name=${nameForUrl}`);
      return fetch(url)
        .then(res => res.json())
    }
  };
};

export default CharactersModel;