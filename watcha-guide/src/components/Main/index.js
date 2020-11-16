import classNames from 'classnames'
import { Section, Headline, Description, Link, Button } from './styles'

export default function Main({
  sections = [],
  children,
  className,
  ...restProps
}) {
  return (
    <main {...restProps} className={classNames(className)}>
      {children}
    </main>
  )
}

Main.Section = function MainSection({ children, className, ...restProps }) {
  return <Section className={classNames(className)}>{children}</Section>
}

Main.Headline = function MainHeadline({ children, className, ...restProps }) {
  return <Headline className={classNames(className)}>{children}</Headline>
}

Main.Description = function MainDescription({
  children,
  className,
  ...restProps
}) {
  return <Description className={classNames(className)}>{children}</Description>
}

Main.Link = function MainLink({ children, className, ...restProps }) {
  return (
    <Link {...restProps} className={classNames('resetA', className)}>
      {children}
    </Link>
  )
}

Main.GoToSectionButton = function MainGoToSectionButton({
  gotoFirst,
  children,
  className,
  ...restProps
}) {
  return (
    <Button
      type="button"
      {...restProps}
      className={classNames(
        // 'resetButton',
        gotoFirst ? 'is--first' : null,
        className
      )}
    >
      {children}
    </Button>
  )
}
