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

Header.Brand = function HeaderBrand({ children, className, ...restProps }) {
  return (
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
}

Header.SignInLink = function HeaderSignInLink({
  children,
  className,
  external,
  ...restProps
}) {
  return (
    <SignInLink
      {...restProps}
      className={classNames('resetA', className)}
      target={external ? '_blank' : null}
      rel={external ? 'noopener noreffer' : null}
    >
      {children}
    </SignInLink>
  )
}
