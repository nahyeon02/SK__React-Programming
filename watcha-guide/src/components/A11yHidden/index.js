import classNames from 'classnames'

/* -------------------------------------------------------------------------- */

const A11yHidden = ({ as = 'span', children, className, ...restProps }) => {
  const Comp = as
  return (
    <Comp {...restProps} className={classNames('a11yHidden', className)}>
      {children}
    </Comp>
  )
}

export default A11yHidden
