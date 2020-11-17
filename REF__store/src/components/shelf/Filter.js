import React, { Component } from 'react'
import { func, array } from 'prop-types'
import { connect } from 'react-redux'
import { updateFilters } from 'store/actions/filterActions'
import Checkbox from '../util/Checkbox'

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL']

const mapStateToProps = ({ filters }) => ({
  filters: filters.items,
})

class Filter extends Component {
  static propTypes = {
    updateFilters: func.isRequired,
    filters: array,
  }

  toggleCheckbox = (label) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label)
    } else {
      this.selectedCheckboxes.add(label)
    }

    this.props.updateFilters(Array.from(this.selectedCheckboxes))
  }

  createCheckbox = (label) => (
    <Checkbox
      classes="filters-available-size"
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )

  createCheckboxes = () => availableSizes.map(this.createCheckbox)

  componentDidMount() {
    this.selectedCheckboxes = new Set()
  }

  render() {
    return (
      <div className="filters">
        <h4 className="title">사이즈:</h4>
        {this.createCheckboxes()}
      </div>
    )
  }
}

export default connect(mapStateToProps, { updateFilters })(Filter)
