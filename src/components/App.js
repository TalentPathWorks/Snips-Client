/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import axios from 'axios';
import './App.css';
import '../css/style.css';
import SnipList from './SnipList';
import SearchBar from './SearchBar';
import CreateSnip from './CreateSnip'

class App extends React.Component {
  constructor(props) {
    // call parent (React.Component) constructor
    super(props);

    // set intial state
    this.state = {
      snippets: [],
    };
  }

  async componentDidMount() {
    console.log('App Mounted');
    // 1. request the data from our server
    const { data } = await axios.get('http://localhost:5001/api/snippets');
    // 2. hold that data in state so that it will be passed down to our Snips
    this.setState({
      snippets: data,
    });
  }

  fetchSnippets = async searchText => {
    // fetch snippets from database
    const { data: snippets } = await axios.get(
      'http://localhost:5001/api/snippets'
    );

    // inner function for string matching
    const matchStr = (str, toMatch) =>
      str.toLowerCase().includes(toMatch.toLowerCase());
    // filter them
    const filteredSnips = snippets.filter(
      snippet =>
        matchStr(snippet.title || '', searchText) ||
        matchStr(snippet.description || '', searchText) ||
        matchStr(snippet.code || '', searchText) ||
        matchStr(snippet.language || '', searchText)
    );

    // set state
    this.setState({
      snippets: filteredSnips,
    });
  };
  
  createSnip = async (newSnippet) => {
    const snip = await axios.post('http://localhost:5001/api/snippets',newSnippet);
    let list = this.state.snippets
    list.push(snip.data);
    this.setState({snippets: list})
  }
  render() {
    return (
      <React.Fragment>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="snippets.html">Snippets</a>
              </li>
              <li>
                <a href="account.html"> Account</a>
              </li>
            </ul>
          </nav>
        </header>
        <SearchBar onSearch={this.fetchSnippets} />
        <CreateSnip onCreate={this.createSnip}/>
        <SnipList snippets={this.state.snippets} />
      </React.Fragment>
    );
  }
}

export default App;
