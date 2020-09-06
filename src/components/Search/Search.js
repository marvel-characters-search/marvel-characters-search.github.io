import React from 'react';
import { AutoComplete, Input } from 'antd';
import debounce from 'lodash/debounce';
import CharactersModel from '../../model/CharactersModel';
import './Search.css';

class Search extends React.Component {
  state = {
    options: [],
    notFoundContent: '',
  };

  // Passing information about selected character to a parent element
  handleSelect = (characterName) => {
    this.props.showSingleCharacter(characterName);
  };

  // If we've got multiple options from database, 
  // passes these options to a parent element to render on the page 
  showSearchResults = (characters) => {
    this.props.showCharacterSelection(characters);
  };

  // On empty search, passes information to render a list of paginated characters
  handleEmptySearchResult() {
    this.props.renderInitialCharacterSelection()
  };

  handleSearch = searchText => {
    if (searchText !== '') {
      // Making api call and sets autocomplete only when search input is not empty
      CharactersModel.getCharactersByNamePrefix(searchText)
        .then(res => {
          let options = res.data.results.map(characterOption => {
            return { value: characterOption.name }
          });
          this.setState({
            options: options
          })
        })
        .catch(err => console.log(err))
    } else {
      // If search input is empty, reset options from previous search
      this.setState({
        notFoundContent: '',
        options: [],
      });
    };
  };

  searchCharacterByPrefix = (namePrefix) => {
    if (namePrefix) {
      CharactersModel.getCharactersByNamePrefix(namePrefix)
        .then(res => {
          if (res.data.results.length === 1) {
            // if there is only one result - selects this character
            this.handleSelect(res.data.results[0].name)
          } else if (res.data.results.length > 1) {
            // if there are many options with the same name - renders options on the page
            this.showSearchResults(res.data.results);
          } else {
            this.setState({
              notFoundContent: 'Ouch..Looks like I don\'t have it...'
            })
          }
        })
    } else {
      this.handleEmptySearchResult();
    }
  };

  handleEnter = (e) => {
    this.searchCharacterByPrefix(e.target.value);
  };

  render() {
    return (
      <AutoComplete
        dropdownClassName='certain-category-search-dropdown'
        options={this.state.options}
        onSelect={this.handleSelect}
        onSearch={debounce(this.handleSearch, 300)}
        style={{
          width: '100%',
          padding: '20px 0'
        }}
        notFoundContent={this.state.notFoundContent}
      >
        <Input.Search
          size='large'
          placeholder='Name of the Character (ex. Spider-Man)'
          onPressEnter={this.handleEnter}
          onSearch={this.searchCharacterByPrefix}
        />
      </AutoComplete>
    );
  }
}

export default Search;