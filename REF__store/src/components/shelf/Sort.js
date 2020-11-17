import React, { Component } from 'react'
import { func, string } from 'prop-types'
import { connect } from 'react-redux'

import { updateSort } from 'store/actions/sortActions'
import Selectbox from '../util/Selectbox'

const mapStateToProps = ({ sort }) => ({
  sort: sort.item,
})

const mapDispatchToProps = { updateSort }

const sortBy = [
  { value: '', label: '선택하세요.' },
  { value: 'lowestprice', label: '높은 가격 순' },
  { value: 'highestprice', label: '낮은 가격 순' },
]

class Sort extends Component {
  static propTypes = {
    updateSort: func.isRequired,
    sort: string.isRequired,
  }

  handleSort = (value) => {
    this.props.updateSort(value)
  }

  render() {
    return (
      <div className="sort">
        상품 정렬{' '}
        <Selectbox options={sortBy} handleOnChange={this.handleSort} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)
