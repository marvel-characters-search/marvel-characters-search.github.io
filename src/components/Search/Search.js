import React from 'react';
import { AutoComplete, Input } from 'antd';
import debounce from 'lodash/debounce';
import { SearchOutlined } from '@ant-design/icons';
import CharactersModel from '../../model/CharactersModel';
import './Search.css';

class Search extends React.Component {
  state = {
    dataSource: [],
    notFoundContent: ''
  };

  handleSelect = (characterName) => {
    this.props.renderSelectedCharacter(characterName);
  };

  handleMultipleOptions = (characters) => {
    this.props.setMultipleOptions(characters);
  }

  handleAllPaginatedCharacters() {
    this.props.renderPaginatedCharacters()
  }

  //Sets options for autocomplete
  handleSearch = searchText => {
    if (searchText !== '') {
      CharactersModel.getCharactersByNameStart(searchText)
        .then(res => {
          let dataSource = res.data.results.map(characterOption => characterOption.name)
          this.setState({
            dataSource: dataSource
          })
        })
        .catch(err => console.log(err))
    } else {
      this.setState({
        dataSource: [],
      });
    }
  };

  getPotentialCharacter = (characterName) => {
    if (characterName) {
      CharactersModel.getCharactersByNameStart(characterName)
        .then(res => {
          if (res.data.results.length === 1) {
            this.handleSelect(res.data.results[0].name)
          } else if (res.data.results.length > 1) {
            this.handleMultipleOptions(res.data.results);
          } else {
            this.setState({
              notFoundContent: "Ouch..Looks like I don't have it..."
            })
          }
        })
    } else {
      this.handleAllPaginatedCharacters();
    }
  };

  handleEnterPress = (e) => {
    this.getPotentialCharacter(e.target.value);
  };

  handleInputSearch = (inputText) => {
    this.getPotentialCharacter(inputText);
  };

  render() {
    return (
      <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        style={{ width: 250 }}
        dataSource={this.state.dataSource}
        onSelect={this.handleSelect}
        onSearch={debounce(this.handleSearch, 300)}
        style={{
            width: "100%",
            padding: "10px 0"
        }}
        notFoundContent={this.state.notFoundContent}
      >
        <Input.Search
          size="large"
          placeholder="Character's Name (ex. Spider-Man)"
          onPressEnter={this.handleEnterPress}
          onSearch={this.handleInputSearch}
        />
      </AutoComplete>
    );
  }
}

export default Search;

