import React from 'react'
import Header from './Header'
import Actions from './Actions'
import Options from './Options/Options'
import AddOption from './AddOption'
import OptionModel from './Options/Option/OptionModel'
class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  }

  handleDeleteAllOptions = () => {
    this.setState(() => {
      return {
        options: [],
      }
    })
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }))
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    this.setState(() => {
      return { selectedOption: option }
    })
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      }
    })
  }

  handleClearOptionModal = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }
  // componentDidMount() {
  //   try {
  //     const json = localStorage.getItem('options')
  //     const options = JSON.parse(json)

  //     if (options) {
  //       this.setState(() => ({ options }))
  //     }
  //   } catch (e) {}
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.options.length !== this.state.options.length) {
  //     const json = JSON.stringify(this.state.options)
  //     localStorage.setItem('options', json)
  //   }
  // }

  render() {
    const title = 'Indecision Application'
    const subtitle = 'finding out your decision through these application.'

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className='container'>
          <Actions
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className='widget'>
            <Options
              options={this.state.options}
              handleRemoveAllOptions={this.handleDeleteAllOptions}
              handleRemoveOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
          <OptionModel
            selectedOption={this.state.selectedOption}
            handleClearOptionModal={this.handleClearOptionModal}
          />
        </div>
      </div>
    )
  }
}

export default IndecisionApp
