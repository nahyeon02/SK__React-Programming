import { number } from 'prop-types'
import Clearfix from '../util/Clearfix'
import Sort from './Sort'

const ShelfHeader = ({ productsLength }) => (
  <div className="shelf-container-header">
    <small className="products-found">
      <span>{productsLength} 개의 제품을 찾았습니다.</span>
    </small>
    <Sort />
    <Clearfix />
  </div>
)

ShelfHeader.propTypes = {
  productsLength: number.isRequired,
}

export default ShelfHeader
