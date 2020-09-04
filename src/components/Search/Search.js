import React from 'react';
import { AutoComplete, Button } from 'antd';
import debounce from 'lodash/debounce';
import { SearchOutlined } from '@ant-design/icons';
import './Search.css';

class Search extends React.Component {
  state = {
    value: '',
    dataSource: [],
  };

  handleSelect(value) {
    console.log('onSelect', value);
  }

  //Sets options for autocomplete
  handleSearch = searchText => {
    if (searchText !== '') {
      console.log(searchText)
      this.setState({
        dataSource: [searchText, searchText.repeat(2), searchText.repeat(3)],
      });
    } else {
      this.setState({
        dataSource: [],
      });
    }
  };

  render() {
    return (
      <>
        <AutoComplete
          size="large"
          dropdownMatchSelectWidth={252}
          style={{
            width: "100%",
            padding: "10px 0"
          }}
          dataSource={this.state.dataSource}
          onSelect={this.handleSelect}
          onSearch={debounce(this.handleSearch, 300)}
          placeholder="Character's Name (ex. Spider-Man)"
        >
      </AutoComplete>
        <Button size="large" icon={<SearchOutlined />}>
          Search
      </Button>
      </>
    );
  }
}

export default Search;

