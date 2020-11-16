import React from 'react'
import logoPath from 'assets/Logo.svg'
import Link from './Link'

const Header = () => (
  <header className="appHeader appHeader--fixed container">
    <h1 className="appHeader__brand">
      <Link href="/">
        <img
          className="img appHeader__logo"
          src={logoPath}
          alt="왓챠(WATCHA)"
          width={99}
          height={40}
        />
      </Link>
    </h1>
    <a
      className="linkA appHeader__signInLink"
      href="https://watcha.com/sign_in"
    >
      로그인
    </a>
  </header>
)

export default Header
