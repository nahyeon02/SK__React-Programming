import React from 'react'
import { object, func } from 'prop-types'
import Thumb from '../util/Thumb'
import util from '../util/util'

const Product = ({ product, addProduct }) => {
  product.quantity = 1

  let formattedPrice = util.formatPrice(product.price, product.currencyId)
  let productInstallment = null

  if (!!product.installments) {
    const installmentPrice = product.price / product.installments

    productInstallment = (
      <div className="installment">
        <span>or {product.installments} x</span>
        <b>
          {' '}
          {product.currencyFormat}{' '}
          {util.formatPrice(installmentPrice, product.currencyId)}
        </b>
      </div>
    )
  }

  const { default: src } = require(`../../static/products/${product.sku}.jpg`)

  return (
    <div className="shelf-item" data-sku={product.sku}>
      {product.isFreeShipping && <div className="shelf-stopper">무료 배송</div>}
      <Thumb classes="shelf-item__thumb" src={src} alt={product.title} />
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>
        {productInstallment}
      </div>
      <div onClick={() => addProduct(product)} className="shelf-item__buy-btn">
        상품 담기
      </div>
    </div>
  )
}

Product.propTypes = {
  product: object.isRequired,
  addProduct: func.isRequired,
}

export default Product
