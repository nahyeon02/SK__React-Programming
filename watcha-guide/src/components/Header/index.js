import classNames from 'classnames'
import { Container, Brand, HomeLink, SignInLink } from './styles'

/* -------------------------------------------------------------------------- */

export default function Header({ children, className, ...restProps }) {
  return (
    <Container {...restProps} className={classNames('container', className)}>
      {children}
    </Container>
  )
}

Header.Brand = ({ children, className, ...restProps }) => (
  <Brand>
    <HomeLink
      {...restProps}
      className={classNames('resetA', className)}
      href="/"
    >
      {children}
    </HomeLink>
  </Brand>
)

Header.SignInLink = ({ children, className, external, ...restProps }) => (
  <SignInLink
    {...restProps}
    className={classNames('resetA', className)}
    target={external ? '_blank' : null}
    rel={external ? 'noopener noreffer' : null}
  >
    {children}
  </SignInLink>
)
