import { FETCH_PRODUCTS } from './types'
import axios from 'axios'

const productsAPI = `${process.env.PUBLIC_URL}/api/products.json`

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1
    if (a.price > b.price) return 1
    return 0
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1
    if (a.price < b.price) return 1
    return 0
  },
}

export const fetchProducts = (filters, sortBy, callback) => (dispatch) => {
  axios
    .get(productsAPI)
    .then((res) => {
      let { products } = res.data

      if (!!filters && filters.length > 0) {
        products = products.filter((p) =>
          filters.find((f) => p.availableSizes.find((size) => size === f))
        )
      }

      if (!!sortBy) {
        products = products.sort(compare[sortBy])
      }

      if (!!callback) {
        callback()
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products,
      })
    })
    .catch((err) => {
      console.log(err)
      throw new Error('상품을 가져올 수 없습니다. 나중에 다시 시도해보세요.')
    })
}
