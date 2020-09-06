import CharacterModel from '../model/CharactersModel';

test('Should get characters', () => {
  CharacterModel.getPaginatedCharacters()
    .then(res => {
      let result = res.data.results;
      expect(result.length).not.toBe(0)
  })
});

test('Should get a selected character by name', () => {
  let name = 'Thor'
  CharacterModel.getSelectedCharacter(name)
    .then(res => {
      let result = res.data.results[0];
      expect(result.name).toBe(name)
    })
  
  let name2 = 'Iron Man'
  CharacterModel.getSelectedCharacter(name2)
    .then(res => {
      let result = res.data.results[0];
      expect(result.name).toBe(name2)
    })
});

test('Should get character options if name is NOT unique', () => {
  CharacterModel.getCharactersByNameStart('Thor')
    .then(res => {
      let result = res.data.results;
      expect(result.length).not.toBe(1)
    })
});