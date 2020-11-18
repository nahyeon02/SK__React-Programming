import { Header } from 'components'
import Logo from 'assets/Logo.svg'

/* -------------------------------------------------------------------------- */

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Brand>
        <img
          className="img"
          src={Logo}
          alt="왓챠(WATCHA)"
          width={99}
          height={40}
        />
      </Header.Brand>
      <Header.SignInLink href="https://watcha.com/sign_in" external>
        로그인
      </Header.SignInLink>
    </Header>
  )
}
