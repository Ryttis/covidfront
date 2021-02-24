import React, { Component  } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = ['Armenia','Austria','Australia','Albania','Argentina','Brazil','Chile']

  class SelectCountry extends Component {
    constructor (props) {
      super(props)
      this.state = {
        selected: '',
        // options: props.countries
      }
      
      console.log(this.options)
      this._onSelect = this._onSelect.bind(this)
    }
  
    _onSelect (option) {
      
      this.setState({selected: option})
      const url = `http://localhost:3000/${option.label}`
      window.location.replace(url);
      
    }
  
    render () {
      const defaultOption = this.state.selected
      
      return (
        <section>
          <h3>Select Country</h3>
          <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        </section>
      )
    }
  }
  
  export default SelectCountry