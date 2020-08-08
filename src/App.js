import React from 'react';

import './App.css';
import { Cardlist } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount () {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users }));
    
  }
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monsters=> monsters.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox
        placeholder='search mosnters'
        handleChange={e => this.setState({searchField: e.target.value})}
        />
        <Cardlist monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;