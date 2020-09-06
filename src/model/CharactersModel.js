import { signUrl } from '../urlSigner';

class CharactersModel {
  // Getting first 18 characters to render on the page
  static getPaginatedCharacters = () => {
    let url = signUrl(`https://gateway.marvel.com/v1/public/characters?limit=18`);
    return fetch(url)
      .then(res => res.json())
  };

  static getCharactersByNameStart = (nameStart) => {
    if (nameStart) {
      let url = signUrl(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameStart}`);
      return fetch(url)
        .then(res => res.json())
    }
  };

  static getSelectedCharacter = (characterName) => {
    if (characterName) {
      let nameForUrl = characterName.split(" ").join("%20");
      let url = signUrl(`https://gateway.marvel.com/v1/public/characters?name=${nameForUrl}`);
      return fetch(url)
        .then(res => res.json())
    }
  };
};

export default CharactersModel;