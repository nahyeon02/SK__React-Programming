import React, { Component } from 'react'
import { func, array, string } from 'prop-types'
import { connect } from 'react-redux'

import Clearfix from '../util/Clearfix'
import Spinner from '../util/Spinner'
import Product from './Product'
import ShelfHeader from './ShelfHeader'
import Filter from './Filter'

import { fetchProducts } from 'store/actions/productActions'
import { addProduct } from 'store/actions/floatCartActions'

const mapStateToProps = (state) => ({
  products: state.products.items,
  filters: state.filters.items,
  sort: state.sort.item,
})

const mapDispatchToProps = { fetchProducts, addProduct }

/* -------------------------------------------------------------------------- */

class Shelf extends Component {
  static propTypes = {
    fetchProducts: func.isRequired,
    products: array.isRequired,
    addProduct: func.isRequired,
    filters: array,
    sort: string,
  }

  state = {
    loading: false,
  }

  componentDidMount() {
    const { filters, sort } = this.props

    this.handleFetchProducts(filters, sort)
  }

  componentDidUpdate(nextProps) {
    const { filters: nextFilters, sort: nextSort } = nextProps

    if (nextFilters !== this.props.filters) {
      this.handleFetchProducts(nextFilters, undefined)
    }

    if (nextSort !== this.props.sort) {
      this.handleFetchProducts(undefined, nextSort)
    }
  }

  handleFetchProducts = (
    filters = this.props.filters,
    sort = this.props.sort
  ) => {
    this.setState({ loading: true })
    this.props.fetchProducts(filters, sort, () => {
      this.setState({ loading: false })
    })
  }

  render() {
    const { products } = this.props

    const p = products.map((p) => (
      <Product product={p} addProduct={this.props.addProduct} key={p.id} />
    ))

    return (
      <React.Fragment>
        {this.state.loading && <Spinner />}
        <Filter />
        <div className="shelf-container">
          <ShelfHeader productsLength={products.length} />
          {p}
          <Clearfix />
        </div>
        <Clearfix />
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shelf)
