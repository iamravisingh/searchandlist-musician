import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search/search-box.component'

class App extends Component{
  constructor() {
    super();

    this.state = {
      singers: [],
      searchField : ''
    }
  }

  componentDidMount() {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => res.json())
      .then(response => {
        console.log(response);
        this.setState({ singers: response.data })
      })
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }
  
  render() {
    const { singers, searchField } = this.state;
    const filteredRappers = singers.filter(item =>
      item.employee_name.toLowerCase().includes(searchField.toLowerCase())
    );
    
    return (
      <div className='App'>
        <h1> Underground Rappers </h1>
        <SearchBox placeholder='search rappers' handleChange = {this.handleChange}/>
        <CardList rappers={filteredRappers  }></CardList>
      </div>
    );
  }
}

export default App;
