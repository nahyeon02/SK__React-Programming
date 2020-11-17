import React, { Component } from 'react'
import { string, func } from 'prop-types'

class Checkbox extends Component {
  static propTypes = {
    label: string.isRequired,
    handleCheckboxChange: func.isRequired,
  }

  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked,
    }))

    handleCheckboxChange(label)
  }

  render() {
    const { label, classes } = this.props
    const { isChecked } = this.state

    return (
      <div className={classes}>
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          <span className="checkmark">{label}</span>
        </label>
      </div>
    )
  }
}

export default Checkbox
