import React from 'react';

export default class CreateSnip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author:"NULL",
      code:"",
      title: "",
      description: "",
      language: ""
    };
  }

  // uses newer arrow sytnax to bind method to this
  handleChange = event => {
    // capture the input data from the event
    // update state
    this.setState({
      searchText: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onCreate(this.state);
  };
  handleLanguage = event =>{
    this.setState({language: event.target.value})
  }
  handleTitleChange = event => {
    this.setState({title: event.target.value})
  }
  handleDescriptionChange = event => {
    this.setState({description: event.target.value})
  }
  handleCodeChange = event => {
    this.setState({code: event.target.value})
  }
  render() {
    return (
      <form id="createSnip" onSubmit={this.handleSubmit}>
        <h1>Create a Snip</h1>
        <label>Title</label>
        <input
          type="text"
          name="search-text"
          id="search-text"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <label>Language</label>
        <select value={this.state.language} onChange={this.handleLanguage}>
          <option selected value="">Select a language</option>
          <option value="Javascript">Javascript</option>
          <option value="C++">C++</option>
          <option value="Python">Python</option>
          <option value="HTML">HTML</option>
        </select>
        <br/>
        <label>Description</label>
        <textarea
        
        name="description-text"
        id="description-text"
        value={this.state.searchText}
        onChange={this.handleDescriptionChange}
        >
        </textarea>
     <br/>
        <label>Code</label>
        <textarea
        name="code-text"
        id="code-text"
        value={this.state.searchText}
          onChange={this.handleCodeChange}
        >
        </textarea>
        <br/>
        <button type="submit">Create</button>
        <br/>
      </form>
    );
  }
}
