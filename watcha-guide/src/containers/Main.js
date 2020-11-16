import classNames from 'classnames'
import { Main } from 'components'
import ArrowButton from 'assets/ArrowButton.svg'

/* -------------------------------------------------------------------------- */

export default function MainContainer({ list = [] }) {
  return (
    <Main>
      {list.map(({ id, headline, link }, index) => (
        <Main.Section key={id}>
          <Main.Headline>{headline.main}</Main.Headline>
          <Main.Description>{headline.sub}</Main.Description>
          <Main.Link href={link.href}>{link.text}</Main.Link>
          <Main.GoToSectionButton gotoFirst={list.length - 1 === index}>
            <img
              className={classNames(
                'resetImg',
                list.length - 1 === index ? 'rotate90' : 'rotate-90'
              )}
              src={ArrowButton}
              alt={
                list.length > index
                  ? '다음 섹션으로 이동'
                  : '처음 섹션으로 이동'
              }
            />
          </Main.GoToSectionButton>
        </Main.Section>
      ))}
    </Main>
  )
}
