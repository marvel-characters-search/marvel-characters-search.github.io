import CharacterModel from '../model/CharactersModel';

test('Should get characters', () => {
  CharacterModel.getInitalCharacterSet()
    .then(res => {
      let result = res.data.results;
      expect(result.length).not.toBe(0)
  })
});

test('Should get a selected character by name', () => {
  let name = 'Thor'
  CharacterModel.getCharacterByName(name)
    .then(res => {
      let result = res.data.results[0];
      expect(result.name).toBe(name)
    })
  
  let name2 = 'Iron Man'
  CharacterModel.getCharacterByName(name2)
    .then(res => {
      let result = res.data.results[0];
      expect(result.name).toBe(name2)
    })
});

test('Should get character options if name is NOT unique', () => {
  CharacterModel.getCharactersByNamePrefix('Thor')
    .then(res => {
      let result = res.data.results;
      expect(result.length).not.toBe(1)
    })
});