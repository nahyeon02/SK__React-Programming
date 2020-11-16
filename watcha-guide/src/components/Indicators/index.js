import classNames from 'classnames'
import { A11yHidden } from 'components'
import { Container, Button } from './styles'

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
  ...resetProps
}) {
  return (
    <ul {...resetProps} className={classNames('resetList', className)}>
      {children}
    </ul>
  )
}

Indicators.Item = function IndicatorsItem({
  active,
  children,
  className,
  ...resetProps
}) {
  return (
    <li {...resetProps}>
      <Button
        type="button"
        className={classNames(
          // 'resetButton',
          className,
          active ? 'is-active' : null
        )}
      >
        <A11yHidden className="tooltip">{children}</A11yHidden>
      </Button>
    </li>
  )
}

export default Indicators
