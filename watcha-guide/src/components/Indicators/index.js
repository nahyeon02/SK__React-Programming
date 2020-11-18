import { createContext, useContext, useState } from 'react'
import classNames from 'classnames'
import { A11yHidden } from 'components'
import { Container, Button } from './styles'

const Context = createContext()

/* -------------------------------------------------------------------------- */

const Indicators = ({ children, className, ...restProps }) => {
  return (
    <Container {...restProps} className={classNames(className)}>
      <A11yHidden as="h2">섹션 탐색</A11yHidden>
      {children}
    </Container>
  )
}

Indicators.Group = function IndicatorsGroup({
  children,
  className,
  list,
  render,
  ...resetProps
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Context.Provider value={{ activeIndex, setActiveIndex }}>
      <ul {...resetProps} className={classNames('resetList', className)}>
        {list.map((item, index) => render(item, index))}
      </ul>
    </Context.Provider>
  )
}

Indicators.Item = function IndicatorsItem({
  item,
  index,
  children,
  className,
  ...resetProps
}) {
  const { activeIndex, setActiveIndex } = useContext(Context)
  return (
    <li {...resetProps}>
      <Button
        type="button"
        className={classNames(
          'resetButton',
          className,
          index === activeIndex ? 'is-active' : null
        )}
        onClick={() => setActiveIndex(index)}
      >
        <A11yHidden className="tooltip">{item.abbr}</A11yHidden>
      </Button>
    </li>
  )
}

export default Indicators
