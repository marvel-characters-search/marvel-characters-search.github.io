import React from 'react';

class Search extends React.Component {
  state = {
    val: '',
    autoCompteleOptions: [],
  };

  handleSelect = (e) => {
    console.log('I am handleSelect');
  };

  handleSearch = (e) => {
    console.log('I am handleSearch');
  };

  handleChange = (e) => {
    console.log('I am handleChange');
  };

  render() {
    return (
      <AutoComplete
        value={this.state.value}
        options={this.state.autoCompteleOptions}
        style={{
          width: 200,
        }}
        onSelect={this.handleSelect}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        placeholder="control mode"
      />
    )
  }
};

export default Search;

