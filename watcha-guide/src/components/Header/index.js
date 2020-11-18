import classNames from 'classnames'
import { Container, Brand, HomeLink, SignInLink } from './styles'
import { connect } from 'react-redux'
import { createMessage, changeMessage } from '../../store/actions/message'

const mapStateToProps = (state) => ({
  // 스토어의 상태 추출
  messages: state.message,
})

const mapDispatchToProps = {
  // 액션 크리에이터 함수
  createMessage,
  changeMessage,
}

/* -------------------------------------------------------------------------- */

function Header({
  messages,
  createMessage,
  changeMessage,
  children,
  className,
  ...restProps
}) {
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
